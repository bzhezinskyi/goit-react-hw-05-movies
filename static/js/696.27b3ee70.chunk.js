"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[696],{6696:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(5861),u=t(9439),a=t(4687),c=t.n(a),i=t(2316),s=t(2791),o=t(184);function f(e){var r=e.onSubmitForm,t=e.searchParams,n=(0,s.useState)(""),a=(0,u.Z)(n,2),c=a[0],i=a[1];(0,s.useEffect)((function(){i(t)}),[t]);return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c&&r(c)},children:[(0,o.jsx)("input",{type:"text",value:c,onChange:function(e){i(e.target.value)}}),(0,o.jsx)("button",{disabled:""===c,children:"Search"})]})}var p=t(1087),v=t(7689),d=t(8912);function h(){var e,r=(0,p.lr)(),t=(0,u.Z)(r,2),a=t[0],h=t[1],l=(0,s.useState)(""),m=(0,u.Z)(l,2),x=m[0],y=m[1],b=(0,v.TH)();(0,s.useEffect)((function(){if(a.get("query")){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.V0)({query:a.get("query")}).then();case 2:return r=e.sent,e.abrupt("return",y(r.results));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[a]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.x,{children:(0,o.jsx)(f,{onSubmitForm:function(e){h({query:e})},searchParams:null!==(e=a.get("query"))&&void 0!==e?e:""})}),""!==x&&(0,o.jsx)("ul",{children:x.map((function(e){var r=e.title,t=e.id;return(0,o.jsx)("li",{children:(0,o.jsx)(p.rU,{to:"/movies/".concat(t),state:{from:b},children:r})},t)}))})]})}},8912:function(e,r,t){t.d(r,{Hg:function(){return o},V0:function(){return f},dV:function(){return p}});var n=t(5861),u=t(4687),a=t.n(u),c=t(3263),i="9e8b55203cd36bc26921f9fe565ad09d",s=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var e=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day",{params:{api_key:i}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n,u,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.query,n=void 0===t?"":t,e.next=3,s.get("/search/movie",{params:{api_key:i,query:n}});case 3:return u=e.sent,c=u.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n,u,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.movieId,n=r.detail,u=void 0===n?"":n,e.next=3,s.get("/movie/".concat(t).concat(u),{params:{api_key:i}});case 3:return c=e.sent,o=c.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=696.27b3ee70.chunk.js.map