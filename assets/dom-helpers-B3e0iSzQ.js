function l(t){return t&&t.ownerDocument||document}function p(t){var r=l(t);return r&&r.defaultView||window}function w(t,r){return p(t).getComputedStyle(t,r)}var y=/([A-Z])/g;function L(t){return t.replace(y,"-$1").toLowerCase()}var g=/^ms-/;function i(t){return L(t).replace(g,"-ms-")}var b=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function _(t){return!!(t&&b.test(t))}function C(t,r){var e="",s="";if(typeof r=="string")return t.style.getPropertyValue(i(r))||w(t).getPropertyValue(i(r));Object.keys(r).forEach(function(n){var a=r[n];!a&&a!==0?t.style.removeProperty(i(n)):_(n)?s+=n+"("+a+") ":e+=i(n)+": "+a+";"}),s&&(e+="transform: "+s+";"),t.style.cssText+=";"+e}const D=!!(typeof window<"u"&&window.document&&window.document.createElement);var o=!1,f=!1;try{var u={get passive(){return o=!0},get once(){return f=o=!0}};D&&(window.addEventListener("test",u,u),window.removeEventListener("test",u,!0))}catch{}function T(t,r,e,s){if(s&&typeof s!="boolean"&&!f){var n=s.once,a=s.capture,c=e;!f&&n&&(c=e.__once||function E(d){this.removeEventListener(r,E,a),e.call(this,d)},e.__once=c),t.addEventListener(r,c,o?s:a)}t.addEventListener(r,e,s)}function P(t,r,e,s){var n=s&&typeof s!="boolean"?s.capture:s;t.removeEventListener(r,e,n),e.__once&&t.removeEventListener(r,e.__once,n)}function m(t,r,e,s){return T(t,r,e,s),function(){P(t,r,e,s)}}function S(t,r,e,s){if(s===void 0&&(s=!0),t){var n=document.createEvent("HTMLEvents");n.initEvent(r,e,s),t.dispatchEvent(n)}}function V(t){var r=C(t,"transitionDuration")||"",e=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*e}function h(t,r,e){e===void 0&&(e=5);var s=!1,n=setTimeout(function(){s||S(t,"transitionend",!0)},r+e),a=m(t,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(n),a()}}function $(t,r,e,s){e==null&&(e=V(t)||0);var n=h(t,e,s),a=m(t,"transitionend",r);return function(){n(),a()}}var A=Function.prototype.bind.call(Function.prototype.call,[].slice);function O(t,r){return A(t.querySelectorAll(r))}function q(t,r){if(t.contains)return t.contains(r);if(t.compareDocumentPosition)return t===r||!!(t.compareDocumentPosition(r)&16)}function F(t){t===void 0&&(t=l());try{var r=t.activeElement;return!r||!r.nodeName?null:r}catch{return t.body}}function N(t,r){return t.classList?t.classList.contains(r):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" ")!==-1}function x(t,r){t.classList?t.classList.add(r):N(t,r)||(typeof t.className=="string"?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r))}function v(t,r){return t.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function M(t,r){t.classList?t.classList.remove(r):typeof t.className=="string"?t.className=v(t.className,r):t.setAttribute("class",v(t.className&&t.className.baseVal||"",r))}export{D as a,T as b,q as c,F as d,x as e,m as l,l as o,O as q,M as r,C as s,$ as t};
