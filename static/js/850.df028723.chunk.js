"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[850],{7708:function(e,a,r){r.d(a,{Z:function(){return H}});var t=r(1413),n=r(5987),i=r(1694),c=r.n(i),s=r(2791),o=r(162),d=r(6543),u=r(184),l=function(e){return s.forwardRef((function(a,r){return(0,u.jsx)("div",(0,t.Z)((0,t.Z)({},a),{},{ref:r,className:c()(a.className,e)}))}))},f=["bsPrefix","className","variant","as"],m=s.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,s=e.variant,d=e.as,l=void 0===d?"img":d,m=(0,n.Z)(e,f),p=(0,o.vE)(r,"card-img");return(0,u.jsx)(l,(0,t.Z)({ref:a,className:c()(s?"".concat(p,"-").concat(s):p,i)},m))}));m.displayName="CardImg";var p=m,v=r(6040),x=["bsPrefix","className","as"],y=s.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,d=e.as,l=void 0===d?"div":d,f=(0,n.Z)(e,x),m=(0,o.vE)(r,"card-header"),p=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(v.Z.Provider,{value:p,children:(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:a},f),{},{className:c()(i,m)}))})}));y.displayName="CardHeader";var g=y,Z=["bsPrefix","className","bg","text","border","body","children","as"],h=l("h5"),b=l("h6"),w=(0,d.Z)("card-body"),N=(0,d.Z)("card-title",{Component:h}),j=(0,d.Z)("card-subtitle",{Component:b}),k=(0,d.Z)("card-link",{Component:"a"}),P=(0,d.Z)("card-text",{Component:"p"}),T=(0,d.Z)("card-footer"),_=(0,d.Z)("card-img-overlay"),C=s.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,s=e.bg,d=e.text,l=e.border,f=e.body,m=e.children,p=e.as,v=void 0===p?"div":p,x=(0,n.Z)(e,Z),y=(0,o.vE)(r,"card");return(0,u.jsx)(v,(0,t.Z)((0,t.Z)({ref:a},x),{},{className:c()(i,y,s&&"bg-".concat(s),d&&"text-".concat(d),l&&"border-".concat(l)),children:f?(0,u.jsx)(w,{children:m}):m}))}));C.displayName="Card",C.defaultProps={body:!1};var W=Object.assign(C,{Img:p,Title:N,Subtitle:j,Body:w,Link:k,Text:P,Header:g,Footer:T,ImgOverlay:_}),E=["bsPrefix","bg","pill","text","className","as"],R=s.forwardRef((function(e,a){var r=e.bsPrefix,i=e.bg,s=e.pill,d=e.text,l=e.className,f=e.as,m=void 0===f?"span":f,p=(0,n.Z)(e,E),v=(0,o.vE)(r,"badge");return(0,u.jsx)(m,(0,t.Z)((0,t.Z)({ref:a},p),{},{className:c()(l,v,s&&"rounded-pill",d&&"text-".concat(d),i&&"bg-".concat(i))}))}));R.displayName="Badge",R.defaultProps={bg:"primary",pill:!1};var F=R,z=r(1087),B=r(7689);function H(e){var a=e.movie,r=(0,B.TH)(),t=new Date(a.release_date?a.release_date:a.first_air_date),n="".concat(t.getDate(),".").concat(t.getDay(),".").concat(t.getFullYear());return(0,u.jsx)(W,{children:(0,u.jsxs)(z.rU,{state:{from:r},to:"/".concat(a.media_type,"/").concat(a.id),style:{textDecoration:"none",color:"inherit"},children:[(0,u.jsx)(W.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path)}),(0,u.jsxs)(W.Body,{style:{height:"8rem"},children:[(0,u.jsx)(W.Title,{children:a.title?a.title:a.name}),(0,u.jsx)(W.Text,{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(F,{className:"me-5",bg:a.vote_average.toFixed(1)>=7?"success":"warning",text:a.vote_average.toFixed(1)>=7?"":"dark",children:a.vote_average.toFixed(1)}),n]})})]})]})})}},6850:function(e,a,r){r.r(a),r.d(a,{default:function(){return N}});var t=r(5861),n=r(9439),i=r(4687),c=r.n(i),s=r(8912),o=r(2791),d=r(1413),u=r(5987),l=r(1694),f=r.n(l),m=r(162),p=r(184),v=["bsPrefix","size","vertical","className","as"],x=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,n=e.vertical,i=e.className,c=e.as,s=void 0===c?"div":c,o=(0,u.Z)(e,v),l=(0,m.vE)(r,"btn-group"),x=l;return n&&(x="".concat(l,"-vertical")),(0,p.jsx)(s,(0,d.Z)((0,d.Z)({},o),{},{ref:a,className:f()(i,x,t&&"".concat(l,"-").concat(t))}))}));x.displayName="ButtonGroup",x.defaultProps={vertical:!1,role:"group"};var y=x,g=r(3360),Z=r(9743),h=r(2677),b=r(7708),w=r(1087);function N(){var e=(0,o.useState)(),a=(0,n.Z)(e,2),r=a[0],i=a[1],d=(0,w.lr)({timeWindow:"day",mediaType:"movie"}),u=(0,n.Z)(d,2),l=u[0],f=u[1];(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Hg)({mediaType:l.get("mediaType"),timeWindow:l.get("timeWindow")}).then();case 2:return a=e.sent,e.abrupt("return",i(a.results));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]);var m=function(e){var a=e.type,r=e.value;switch(a){case"mediaType":f({timeWindow:l.get("timeWindow"),mediaType:r});break;case"timeWindow":f({mediaType:l.get("mediaType"),timeWindow:r})}};if(r)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"\u0423 \u0442\u0440\u0435\u043d\u0434\u0456"}),(0,p.jsxs)(y,{children:[(0,p.jsx)(g.Z,{variant:"day"===l.get("timeWindow")?"primary":"outline-primary",onClick:function(){return m({type:"timeWindow",value:"day"})},children:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456"}),(0,p.jsx)(g.Z,{variant:"week"===l.get("timeWindow")?"primary":"outline-primary",onClick:function(){return m({type:"timeWindow",value:"week"})},children:"\u0426\u044c\u043e\u0433\u043e \u0442\u0438\u0436\u043d\u044f"})]}),(0,p.jsxs)(y,{children:[(0,p.jsx)(g.Z,{variant:"movie"===l.get("mediaType")?"primary":"outline-primary",onClick:function(){return m({type:"mediaType",value:"movie"})},children:"\u0424\u0456\u043b\u044c\u043c\u0438"}),(0,p.jsx)(g.Z,{variant:"tv"===l.get("mediaType")?"primary":"outline-primary",onClick:function(){return m({type:"mediaType",value:"tv"})},children:"\u0421\u0443\u0440\u0456\u0430\u043b\u0438"}),(0,p.jsx)(g.Z,{variant:"all"===l.get("mediaType")?"primary":"outline-primary",onClick:function(){return m({type:"mediaType",value:"all"})},children:"\u0412\u0441\u0435"})]}),(0,p.jsx)(Z.Z,{xs:1,sm:2,md:3,lg:4,className:"g-4",children:r.map((function(e){return(0,p.jsx)(h.Z,{children:(0,p.jsx)(b.Z,{movie:e})},e.id)}))})]})}},8912:function(e,a,r){r.d(a,{Hg:function(){return d},V0:function(){return u},dV:function(){return l}});var t=r(5861),n=r(4687),i=r.n(n),c=r(3263),s="9e8b55203cd36bc26921f9fe565ad09d",o=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),d=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t,n,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.mediaType,t=a.timeWindow,e.next=3,o.get("/trending/".concat(r,"/").concat(t),{params:{api_key:s,language:"uk"}});case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t,n,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.query,t=void 0===r?"":r,e.next=3,o.get("/search/movie",{params:{api_key:s,query:t,language:"uk"}});case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t,n,c,d,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.movieId,t=a.mediaType,n=a.detail,c=void 0===n?"":n,e.next=3,o.get("/".concat(t,"/").concat(r).concat(c),{params:{api_key:s,language:"uk"}});case 3:return d=e.sent,u=d.data,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},3360:function(e,a,r){var t=r(1413),n=r(9439),i=r(5987),c=r(1694),s=r.n(c),o=r(2791),d=r(5341),u=r(162),l=r(184),f=["as","bsPrefix","variant","size","active","className"],m=o.forwardRef((function(e,a){var r=e.as,c=e.bsPrefix,o=e.variant,m=e.size,p=e.active,v=e.className,x=(0,i.Z)(e,f),y=(0,u.vE)(c,"btn"),g=(0,d.FT)((0,t.Z)({tagName:r},x)),Z=(0,n.Z)(g,2),h=Z[0],b=Z[1].tagName;return(0,l.jsx)(b,(0,t.Z)((0,t.Z)((0,t.Z)({},h),x),{},{ref:a,className:s()(v,y,p&&"active",o&&"".concat(y,"-").concat(o),m&&"".concat(y,"-").concat(m),x.href&&x.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},2677:function(e,a,r){var t=r(9439),n=r(1413),i=r(5987),c=r(1694),s=r.n(c),o=r(2791),d=r(162),u=r(184),l=["as","bsPrefix","className"],f=["className"];var m=o.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,c=(0,i.Z)(e,l);r=(0,d.vE)(r,"col");var o=(0,d.pi)(),u=(0,d.zG)(),f=[],m=[];return o.forEach((function(e){var a,t,n,i=c[e];delete c[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,n=i.order):a=i;var s=e!==u?"-".concat(e):"";a&&f.push(!0===a?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(a)),null!=n&&m.push("order".concat(s,"-").concat(n)),null!=t&&m.push("offset".concat(s,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},c),{},{className:s().apply(void 0,[t].concat(f,m))}),{as:a,bsPrefix:r,spans:f}]}(e),c=(0,t.Z)(r,2),o=c[0],m=o.className,p=(0,i.Z)(o,f),v=c[1],x=v.as,y=void 0===x?"div":x,g=v.bsPrefix,Z=v.spans;return(0,u.jsx)(y,(0,n.Z)((0,n.Z)({},p),{},{ref:a,className:s()(m,!Z.length&&g)}))}));m.displayName="Col",a.Z=m},9743:function(e,a,r){var t=r(1413),n=r(5987),i=r(1694),c=r.n(i),s=r(2791),o=r(162),d=r(184),u=["bsPrefix","className","as"],l=s.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,s=e.as,l=void 0===s?"div":s,f=(0,n.Z)(e,u),m=(0,o.vE)(r,"row"),p=(0,o.pi)(),v=(0,o.zG)(),x="".concat(m,"-cols"),y=[];return p.forEach((function(e){var a,r=f[e];delete f[e],a=null!=r&&"object"===typeof r?r.cols:r;var t=e!==v?"-".concat(e):"";null!=a&&y.push("".concat(x).concat(t,"-").concat(a))})),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({ref:a},f),{},{className:c().apply(void 0,[i,m].concat(y))}))}));l.displayName="Row",a.Z=l}}]);
//# sourceMappingURL=850.df028723.chunk.js.map