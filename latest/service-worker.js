if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const c=e=>i(e,o),l={module:{uri:o},exports:d,require:c};s[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-0d02fa54"],(function(e){"use strict";e.setCacheNameDetails({prefix:"phishing-warning-page"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.js",revision:"0d03298a3600987ec9d9cbb386c9b66a"},{url:"design-tokens.css",revision:"5450cd51aeb0ca36c56137439f9b7847"},{url:"globalthis.js",revision:"a042e6951e4877b286a95fe3c08c028b"},{url:"index.css",revision:"dd144e79c52695361a74132bcf8df807"},{url:"index.html",revision:"eb7f1c5730d22014e98e18bf4f552c6b"},{url:"lockdown-install.js",revision:"0a1030c97ecbe0e2b00f0d86b2ed0bf9"},{url:"lockdown-more.js",revision:"8c5643c834685df14b32726bf2d42a21"},{url:"lockdown-run.js",revision:"f25896dd75865d1092d1fe29b744338c"},{url:"metamask-fox.svg",revision:"19bb5b823b525eabd6d7da6bf4ed98ea"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
