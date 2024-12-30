"use client";
import { useEffect } from "react";

const TawkTo = ({ tawkToScript }: any) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = `
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
      (function(){
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "${tawkToScript || "https://embed.tawk.to/677281d6af5bfec1dbe489af/1igbkmce4"}";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    `;

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [tawkToScript]); // Dependency ensures the effect re-runs if tawkToScript changes

  return null; // No UI rendered, the component only loads the script
};

export default TawkTo;
