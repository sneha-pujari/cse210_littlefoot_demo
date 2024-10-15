var littlefootDemo=function(t){"use strict";var e=function(){return e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)};function n(t,e){t.classList.add(e)}function r(t,e){t.classList.remove(e)}function i(t,e){return t.classList.contains(e)}function o(t,e){var n;const r=((null===(n=t.ownerDocument)||void 0===n?void 0:n.defaultView)||window).getComputedStyle(t);return r.getPropertyValue(e)||r[e]}"function"==typeof SuppressedError&&SuppressedError;const u=96,c=25.4;function a(t){return t?o(t,"fontSize")||a(t.parentElement):o(window.document.documentElement,"fontSize")}function l(t,e){var n,r;const i=null!==(r=null===(n=null==e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView)&&void 0!==r?r:window,o=i.document.documentElement||i.document.body,[s,f]=function(t){var e;const n=t||"0",r=Number.parseFloat(n),i=n.match(/[\d-.]+(\w+)$/);return[r,(null!==(e=null==i?void 0:i[1])&&void 0!==e?e:"").toLowerCase()]}(t);switch(f){case"rem":return s*l(a(window.document.documentElement));case"em":return s*l(a(e),null==e?void 0:e.parentElement);case"in":return s*u;case"q":return s*u/c/4;case"mm":return s*u/c;case"cm":return s*u*10/c;case"pt":return s*u/72;case"pc":return s*u/6;case"vh":return(s*i.innerHeight||o.clientWidth)/100;case"vw":return(s*i.innerWidth||o.clientHeight)/100;case"vmin":return s*Math.min(i.innerWidth||o.clientWidth,i.innerHeight||o.clientHeight)/100;case"vmax":return s*Math.max(i.innerWidth||o.clientWidth,i.innerHeight||o.clientHeight)/100;default:return s}}var s="littlefoot__tooltip";function f(t){var e=Number.parseFloat(o(t,"marginLeft")),n=t.offsetWidth-e;return(t.getBoundingClientRect().left+n/2)/window.innerWidth}function d(t,e,i){var u=function(t,e){var n=Number.parseInt(o(e,"marginTop"),10),r=2*n+e.offsetHeight,i=t.getBoundingClientRect().top+t.offsetHeight/2,u=window.innerHeight-i;return u>=r||u>=i?["below",u-n-15]:["above",i-n-15]}(e,t),c=u[0],a=u[1];if(i!==c){r(t,"is-"+i),n(t,"is-"+c);var l=100*f(e)+"%",s="above"===c?"100%":"0";t.style.transformOrigin=l+" "+s}return[c,a]}var v="is-active",m="is-changing",p="is-scrollable";function h(t){var e=t.id,u=t.button,c=t.content,a=t.host,h=t.popover,g=t.wrapper,y=0,b="above",w=function(){return document.body.contains(h)};return{id:e,activate:function(t){var e;u.setAttribute("aria-expanded","true"),n(u,m),n(u,v),u.insertAdjacentElement("afterend",h),h.style.maxWidth=document.body.clientWidth+"px",e=c,y=Math.round(l(o(e,"maxHeight"),e)),null==t||t(h,u)},dismiss:function(t){u.setAttribute("aria-expanded","false"),n(u,m),r(u,v),r(h,v),null==t||t(h,u)},isActive:function(){return i(u,v)},isReady:function(){return!i(u,m)},ready:function(){n(h,v),r(u,m)},remove:function(){h.remove(),r(u,m)},reposition:function(){if(w()){var t=d(h,u,b),e=t[0],i=t[1];b=e,c.style.maxHeight=Math.min(y,i)+"px",h.offsetHeight<c.scrollHeight?(n(h,p),c.setAttribute("tabindex","0")):(r(h,p),c.removeAttribute("tabindex"))}},resize:function(){w()&&(h.style.left=function(t,e){var n=t.offsetWidth;return-f(e)*n+Number.parseInt(o(e,"marginLeft"),10)+e.offsetWidth/2}(c,u)+"px",g.style.maxWidth=c.offsetWidth+"px",function(t,e){var n=t.querySelector("."+s);n&&(n.style.left=100*f(e)+"%")}(h,u))},destroy:function(){return a.remove()}}}var g="is-fully-scrolled";function y(t,e){t.addEventListener("wheel",function(t,e=0){let n,r=0;return Object.assign(((...i)=>{const o=Math.max(0,r+e-Date.now());o?(clearTimeout(n),n=setTimeout((()=>{r=Date.now(),t(...i)}),o)):(r=Date.now(),t(...i))}),{cancel:()=>{r=0,clearTimeout(n)}})}(function(t){return function(e){var i=e.currentTarget,o=-e.deltaY;o>0&&r(t,g),i&&o<=0&&o<i.clientHeight+i.scrollTop-i.scrollHeight&&n(t,g)}}(e),16))}var b="littlefoot__content",w="littlefoot__wrapper",E="littlefoot--print",D=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.forEach((function(t){return n(t,E)}))};function H(t,e){return Array.from(t.querySelectorAll(e))}function x(t,e){return t.querySelector("."+e)||t.firstElementChild||t}function S(t){var e=document.createElement("div");e.innerHTML=t;var n=e.firstElementChild;return n.remove(),n}function A(t){return void 0!==t}function T(t){var e=t.parentElement,n=H(e,":scope > :not(."+E+")"),r=n.filter((function(t){return"HR"===t.tagName}));n.length===r.length&&(D.apply(void 0,r.concat(e)),T(e))}function W(t,e){var n=t.parentElement;t.remove(),n&&n!==e&&!n.innerHTML.replace(/(\[\]|&nbsp;|\s)/g,"")&&W(n,e)}function M(t,e){var n=t[0],r=t[1],i=t[2],o=S(i.outerHTML);H(o,'[href$="#'+n+'"]').forEach((function(t){return W(t,o)}));var u=o.innerHTML.trim();return[r,i,{id:String(e+1),number:e+1,reference:"lf-"+n,content:u.startsWith("<")?u:"<p>"+u+"</p>"}]}function O(t){return function(e){return t.replace(/<%=?\s*(\w+?)\s*%>/g,(function(t,n){var r;return String(null!==(r=e[n])&&void 0!==r?r:"")}))}}function _(t){var n,i,o,u=t.allowDuplicates,c=t.anchorParentSelector,a=t.anchorPattern,l=t.buttonTemplate,s=t.contentTemplate,f=t.footnoteSelector,d=t.numberResetSelector,v=t.scope,m=function(t,e,n){return H(t,n+' a[href*="#"]').filter((function(t){return(t.href+t.rel).match(e)}))}(document,a,v).map(function(t,e,n,r){var i=[];return function(o){var u,c=o.href.split("#")[1];if(c){var a=null===(u=H(t,"#"+window.CSS.escape(c)).find((function(t){return e||!i.includes(t)})))||void 0===u?void 0:u.closest(r);if(a){i.push(a);var l=o.closest(n)||o;return[l.id||o.id,l,a]}}}}(document,u,c,f)).filter(A).map(M).map(d?(n=d,i=0,o=null,function(t){var r=t[0],u=t[1],c=t[2],a=r.closest(n);return i=o===a?i+1:1,o=a,[r,u,e(e({},c),{number:i})]}):function(t){return t}).map((function(t){var e=t[0],n=t[1],r=t[2];return D(e,n),T(n),[e,r]})).map(function(t,e){var n=O(t),r=O(e);return function(t){var e=t[0],i=t[1],o=i.id,u=S('<span class="littlefoot">'+n(i)+"</span>"),c=u.firstElementChild;c.setAttribute("aria-expanded","false"),c.dataset.footnoteButton="",c.dataset.footnoteId=o;var a=S(r(i));a.dataset.footnotePopover="",a.dataset.footnoteId=o;var l=x(a,w),s=x(a,b);return y(s,a),e.insertAdjacentElement("beforebegin",u),{id:o,button:c,host:u,popover:a,content:s,wrapper:l}}}(l,s)).map(h);return{footnotes:m,unmount:function(){m.forEach((function(t){return t.destroy()})),H(document,"."+E).forEach((function(t){return r(t,E)}))}}}var C="[data-footnote-id]",L=function(t,e){return t.target.closest(e)},R=function(t){return null==t?void 0:t.dataset.footnoteId},P=function(t){return function(e){e.preventDefault();var n=L(e,C),r=R(n);r&&t(r)}},k=document.addEventListener,j=function(t,e,n,r){return k(t,(function(t){var r=t.target;(null==r?void 0:r.closest(e))&&n.call(r,t)}),r)};var z={activateDelay:100,activateOnHover:!1,allowDuplicates:!0,allowMultiple:!1,anchorParentSelector:"sup",anchorPattern:/(fn|footnote|note)[:\-_\d]/gi,dismissDelay:100,dismissOnUnhover:!1,dismissOnDocumentTouch:!0,footnoteSelector:"li",hoverDelay:250,numberResetSelector:"",scope:"",contentTemplate:'<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="'.concat(w,'"><div class="').concat(b,'"><% content %></div></div><div class="').concat(s,'"></div></aside>'),buttonTemplate:'<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'};function I(t){void 0===t&&(t={});var n=e(e({},z),t),r=function(t,e){var n,r=t.footnotes,i=t.unmount,o=function(t){return function(n){n.isReady()&&(n.dismiss(e.dismissCallback),setTimeout(n.remove,t))}},u=function(t){return function(n){e.allowMultiple||r.filter((function(t){return t.id!==n.id})).forEach(o(e.dismissDelay)),n.isReady()&&(n.activate(e.activateCallback),n.reposition(),n.resize(),setTimeout(n.ready,t))}},c=function(t){return function(e){var n=r.find((function(t){return t.id===e}));n&&t(n)}},a=function(){return r.forEach(o(e.dismissDelay))};return{activate:function(t,e){return c(u(e))(t)},dismiss:function(t,e){return c(o(e))(t)},dismissAll:a,touchOutside:function(){e.dismissOnDocumentTouch&&a()},repositionAll:function(){return r.forEach((function(t){return t.reposition()}))},resizeAll:function(){return r.forEach((function(t){return t.resize()}))},toggle:c((function(t){return t.isActive()?o(e.dismissDelay)(t):u(e.activateDelay)(t)})),hover:c((function(t){n=t.id,e.activateOnHover&&!t.isActive()&&u(e.hoverDelay)(t)})),unhover:c((function(t){t.id===n&&(n=null),e.dismissOnUnhover&&setTimeout((function(){return r.filter((function(t){return t.id!==n})).forEach(o(e.dismissDelay))}),e.hoverDelay)})),unmount:i}}(_(n),n),i=function(t){var e=function(e){var n=L(e,"[data-footnote-button]"),r=R(n);r?(e.preventDefault(),t.toggle(r)):L(e,"[data-footnote-popover]")||t.touchOutside()},n=P(t.hover),r=P(t.unhover),i=new AbortController,o={signal:i.signal};return k("touchend",e,o),k("click",e,o),k("keyup",(function(e){27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||t.dismissAll()}),o),j("mouseover",C,n,o),j("mouseout",C,r,o),function(){i.abort()}}(r);return{activate:function(t,e){void 0===e&&(e=n.activateDelay),r.activate(t,e)},dismiss:function(t,e){void 0===e&&(e=n.dismissDelay),void 0===t?r.dismissAll():r.dismiss(t,e)},unmount:function(){i(),r.unmount()},getSetting:function(t){return n[t]},updateSetting:function(t,e){n[t]=e}}}return t.default=I,t.littlefoot=I,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
