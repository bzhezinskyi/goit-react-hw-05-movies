"use strict";(self.webpackChunkmovie_pet=self.webpackChunkmovie_pet||[]).push([[190],{2190:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),i=t(2791),s=t(7689),o=t(8912),p=t(184);function f(){var e=(0,s.UO)().movieId,n=(0,i.useState)(null),t=(0,a.Z)(n,2),u=t[0],f=t[1];if((0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.dV)({movieId:e,detail:"/reviews"}).then(f);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),u)return(0,p.jsx)("div",{children:0===u.results.length?(0,p.jsx)("h3",{children:"We don't have any reviews for this movie"}):(0,p.jsx)("ul",{children:u.results.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:t})]},r)}))})})}},8912:function(e,n,t){t.d(n,{Hg:function(){return o},V0:function(){return p},dV:function(){return f}});var r=t(5861),a=t(4687),u=t.n(a),c=t(3263),i="9e8b55203cd36bc26921f9fe565ad09d",s=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.mediaType,r=n.timeWindow,e.next=3,s.get("/trending/".concat(t,"/").concat(r),{params:{api_key:i,language:"uk"}});case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=void 0===t?"":t,e.next=3,s.get("/search/movie",{params:{api_key:i,query:r,language:"uk"}});case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,c,o,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,r=n.mediaType,a=n.detail,c=void 0===a?"":a,e.next=3,s.get("/".concat(r,"/").concat(t).concat(c),{params:{api_key:i,language:"uk"}});case 3:return o=e.sent,p=o.data,e.abrupt("return",p);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=190.fb5502c1.chunk.js.map