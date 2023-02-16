/*! For license information please see 446.f22a6b16.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[446],{9446:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ae}});var n,a=t(5861),c=t(9439),o=t(4687),s=t.n(o),i=t(168),u=t(6444).ZP.div(n||(n=(0,i.Z)([""]))),f=t(8912),l=t(2791),d=t(1087),p=t(9142);function v(e,r,t){return(r=(0,p.Z)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=t(1694),y=t.n(h),g=t(184),j=["xxl","xl","lg","md","sm","xs"],P=l.createContext({prefixes:{},breakpoints:j,minBreakpoint:"xs"});P.Consumer,P.Provider;function w(e,r){var t=(0,l.useContext)(P).prefixes;return e||t[r]||r}function N(){return(0,l.useContext)(P).breakpoints}function O(){return(0,l.useContext)(P).minBreakpoint}var C=["bsPrefix","className","as"],k=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,o=x(e,C),s=w(t,"row"),i=N(),u=O(),f="".concat(s,"-cols"),l=[];return i.forEach((function(e){var r,t=o[e];delete o[e],r=null!=t&&"object"===typeof t?t.cols:t;var n=e!==u?"-".concat(e):"";null!=r&&l.push("".concat(f).concat(n,"-").concat(r))})),(0,g.jsx)(c,b(b({ref:r},o),{},{className:y().apply(void 0,[n,s].concat(l))}))}));k.displayName="Row";var _=k,S=["as","bsPrefix","className"],Z=["className"];var R=l.forwardRef((function(e,r){var t=function(e){var r=e.as,t=e.bsPrefix,n=e.className,a=x(e,S);t=w(t,"col");var c=N(),o=O(),s=[],i=[];return c.forEach((function(e){var r,n,c,u=a[e];delete a[e],"object"===typeof u&&null!=u?(r=u.span,n=u.offset,c=u.order):r=u;var f=e!==o?"-".concat(e):"";r&&s.push(!0===r?"".concat(t).concat(f):"".concat(t).concat(f,"-").concat(r)),null!=c&&i.push("order".concat(f,"-").concat(c)),null!=n&&i.push("offset".concat(f,"-").concat(n))})),[b(b({},a),{},{className:y().apply(void 0,[n].concat(s,i))}),{as:r,bsPrefix:t,spans:s}]}(e),n=(0,c.Z)(t,2),a=n[0],o=a.className,s=x(a,Z),i=n[1],u=i.as,f=void 0===u?"div":u,l=i.bsPrefix,d=i.spans;return(0,g.jsx)(f,b(b({},s),{},{ref:r,className:y()(o,!d.length&&l)}))}));R.displayName="Col";var E=R,H=/-(.)/g;var I=["className","bsPrefix","as"],B=function(e){return e[0].toUpperCase()+(r=e,r.replace(H,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function T(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.displayName,n=void 0===t?B(e):t,a=r.Component,c=r.defaultProps,o=l.forwardRef((function(r,t){var n=r.className,c=r.bsPrefix,o=r.as,s=void 0===o?a||"div":o,i=x(r,I),u=w(c,e);return(0,g.jsx)(s,b({ref:t,className:y()(n,u)},i))}));return o.defaultProps=c,o.displayName=n,o}var U=function(e){return l.forwardRef((function(r,t){return(0,g.jsx)("div",b(b({},r),{},{ref:t,className:y()(r.className,e)}))}))},D=["bsPrefix","className","variant","as"],F=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.variant,c=e.as,o=void 0===c?"img":c,s=x(e,D),i=w(t,"card-img");return(0,g.jsx)(o,b({ref:r,className:y()(a?"".concat(i,"-").concat(a):i,n)},s))}));F.displayName="CardImg";var q=F,A=l.createContext(null);A.displayName="CardHeaderContext";var L=A,V=["bsPrefix","className","as"],M=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,o=x(e,V),s=w(t,"card-header"),i=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,g.jsx)(L.Provider,{value:i,children:(0,g.jsx)(c,b(b({ref:r},o),{},{className:y()(n,s)}))})}));M.displayName="CardHeader";var z=M,G=["bsPrefix","className","bg","text","border","body","children","as"],J=U("h5"),K=U("h6"),Q=T("card-body"),W=T("card-title",{Component:J}),X=T("card-subtitle",{Component:K}),Y=T("card-link",{Component:"a"}),$=T("card-text",{Component:"p"}),ee=T("card-footer"),re=T("card-img-overlay"),te=l.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,a=e.bg,c=e.text,o=e.border,s=e.body,i=e.children,u=e.as,f=void 0===u?"div":u,l=x(e,G),d=w(t,"card");return(0,g.jsx)(f,b(b({ref:r},l),{},{className:y()(n,d,a&&"bg-".concat(a),c&&"text-".concat(c),o&&"border-".concat(o)),children:s?(0,g.jsx)(Q,{children:i}):i}))}));te.displayName="Card",te.defaultProps={body:!1};var ne=Object.assign(te,{Img:q,Title:W,Subtitle:X,Body:Q,Link:Y,Text:$,Header:z,Footer:ee,ImgOverlay:re});function ae(){var e=(0,l.useState)(),r=(0,c.Z)(e,2),t=r[0],n=r[1];if((0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.Hg)().then();case 2:return r=e.sent,e.abrupt("return",n(r.results));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),t)return(0,g.jsxs)(u,{children:[(0,g.jsx)("h1",{children:"Trending todey"}),(0,g.jsx)(_,{xs:1,sm:2,md:3,lg:4,className:"g-4",children:t.map((function(e){return(0,g.jsx)(E,{children:(0,g.jsx)(ne,{children:(0,g.jsxs)(d.rU,{to:"/movies/".concat(e.id),children:[(0,g.jsx)(ne.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),(0,g.jsxs)(ne.Body,{children:[(0,g.jsx)(ne.Title,{children:e.title}),(0,g.jsx)(ne.Text,{children:(0,g.jsxs)(g.Fragment,{children:["User Score : ",e.vote_average.toFixed(1)]})})]})]})})},e.id)}))})]})}},8912:function(e,r,t){"use strict";t.d(r,{Hg:function(){return u},V0:function(){return f},dV:function(){return l}});var n=t(5861),a=t(4687),c=t.n(a),o=t(3263),s="9e8b55203cd36bc26921f9fe565ad09d",i=o.Z.create({baseURL:"https://api.themoviedb.org/3"}),u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day",{params:{api_key:s}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.query,n=void 0===t?"":t,e.next=3,i.get("/search/movie",{params:{api_key:s,query:n}});case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.movieId,n=r.detail,a=void 0===n?"":n,e.next=3,i.get("/movie/".concat(t).concat(a),{params:{api_key:s}});case 3:return o=e.sent,u=o.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},1694:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)n.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=446.f22a6b16.chunk.js.map