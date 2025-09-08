// src/components/ChatbaseEmbed.tsx
import React, { useEffect } from "react";

declare global {
  interface Window {
    chatbase?: any;
  }
}

/**
 * ChatbaseEmbed
 * - Recreates the original IIFE behavior in a React-friendly way.
 * - Sets up a proxy-based queue for window.chatbase until the real script loads.
 * - Appends the embed script on window load (or immediately if document.readyState === "complete").
 * - Cleans up event listener and (optionally) the script on unmount.
 */
const ChatbaseEmbed: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR safety

    const SCRIPT_ID = "F10Z9EfUzo9_zsq2UkgB5";
    const SCRIPT_SRC = "https://www.chatbase.co/embed.min.js";
    const SCRIPT_DOMAIN = "www.chatbase.co";

    // Initialize proxy queue if needed
    try {
      const chatbaseState =
        typeof window.chatbase === "function"
          ? window.chatbase("getState")
          : undefined;

      if (!window.chatbase || chatbaseState !== "initialized") {
        // If chatbase isn't already a function, create a queuing function
        if (!window.chatbase || !window.chatbase.q) {
          window.chatbase = ((...args: any[]) => {
            if (!window.chatbase!.q) window.chatbase!.q = [];
            window.chatbase!.q.push(args);
          }) as any;
        }

        // Wrap with a Proxy so property access behaves similarly to original snippet
        // (this allows calling window.chatbase.someMethod(...) even before script loads)
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop: string | symbol) {
            if (prop === "q") {
              return (target as any).q;
            }
            // When accessing a property, return a function that pushes [prop, ...args]
            return (...args: any[]) => (target as any)(prop, ...args);
          },
        });
      }
    } catch (err) {
      // never throw from embed setup
      // eslint-disable-next-line no-console
      console.warn("chatbase proxy init failed:", err);
    }

    // Function to append the real embed script
    const onLoad = () => {
      // Avoid adding the script twice
      if (document.getElementById(SCRIPT_ID)) return;

      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.id = SCRIPT_ID;
      // add a data attribute for domain (script.domain is not a standard element property)
      script.setAttribute("data-domain", SCRIPT_DOMAIN);
      document.body.appendChild(script);
    };

    // If document already loaded, run onLoad immediately; otherwise attach load listener
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("load", onLoad);
      // Optionally remove the injected script (uncomment if desired)
      // const s = document.getElementById(SCRIPT_ID);
      // if (s && s.parentNode) s.parentNode.removeChild(s);
      // Note: Removing the script after it loaded may break chatbase; keep commented unless you want full removal.
    };
  }, []);

  // This component doesn't render visible UI
  return null;
};

export default ChatbaseEmbed;
