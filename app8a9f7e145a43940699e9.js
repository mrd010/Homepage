(()=>{"use strict";var t={};function e(t,e){e.forEach((e=>t.appendChild(e)))}function r(t,e){const r=document.createElement(t);void 0!==e&&r.setAttribute("class",e);for(var i=arguments.length,n=new Array(i>2?i-2:0),a=2;a<i;a++)n[a-2]=arguments[a];return n.forEach((t=>{r.setAttribute(t[0],t[1])})),r}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var i=r.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const i=t.p+"github-icon.svg",n=t.p+"open_in_new.svg",a=[{name:"Battleship",description:"Classic battleship game between a player and AI.",thumbnailImg:t.p+"battleshipScreen.png",githubUrl:"https://github.com/mrd010/Battleship",liveUrl:"https://mrd010.github.io/Battleship/"},{name:"Trivia Game",description:"a Simple trivia game with 4 options and boolean options.",thumbnailImg:t.p+"triviaScreen.png",githubUrl:"https://github.com/mrd010/more-trivia",liveUrl:"https://mrd010.github.io/more-trivia/"},{name:"Weather App",description:"Simple weather app with limited options. get a location weather in a few seconds.",thumbnailImg:t.p+"weatherappScreen.png",githubUrl:"https://github.com/mrd010/weather-app",liveUrl:"https://mrd010.github.io/weather-app/"}],o=t.p+"linkedin-icon.svg",c=t.p+"twitter-icon.svg",p=[i,o,c],l=document.querySelector(".main");document.querySelectorAll(".footer .footer-links .contact-link").forEach(((t,e)=>{const r=new Image;r.src=p[e],t.querySelector("a").appendChild(r)})),l.appendChild(function(t){const a=r("ul","projects");return t.forEach((t=>{const o=r("li","project-card"),c=new Image;c.classList.add("project-image"),c.src=t.thumbnailImg;const p=r("h6","project-title");p.textContent=t.name;const l=r("p","project-desc");l.textContent=t.description;const s=r("a","project-link-gh",["href",`${t.githubUrl}`],["target","_blank"]);let h=new Image;h.src=i,s.appendChild(h);const g=r("a","project-link-live",["href",`${t.liveUrl}`],["target","_blank"]);g.textContent="Live Preview",h=new Image,h.src=n,e(g,[h]),e(o,[c,p,l,s,g]),a.appendChild(o)})),a}(a))})();
//# sourceMappingURL=app8a9f7e145a43940699e9.js.map