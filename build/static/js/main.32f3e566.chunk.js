(this["webpackJsonpreact-rmdb"]=this["webpackJsonpreact-rmdb"]||[]).push([[0],{33:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,u,b,l,j,h,p,x,m,f,g,v,O,w,y,k,S,_,T=t(1),I=t.n(T),M=t(18),z=t.n(M),G=t(10),N=t(4),B=t.p+"static/media/react-movie-logo.42955eb6.svg",E=t.p+"static/media/tmdb_logo.f15b6632.svg",J=t(2),R=t(3),W=R.b.div(r||(r=Object(J.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),C=R.b.div(a||(a=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n"]))),F=R.b.img(c||(c=Object(J.a)(["\n    width: 200px;\n\n    @media screen and (max-width: 500px){\n        width: 150px;\n    }\n"]))),U=R.b.img(i||(i=Object(J.a)(["\n    width: 100px;\n\n    @media screen and (max-width: 500px){\n        width: 80px;\n    }\n"]))),q=t(0),D=function(){return Object(q.jsx)(W,{children:Object(q.jsxs)(C,{children:[Object(q.jsx)(G.b,{to:"/",children:Object(q.jsx)(F,{src:B,alt:"rmdb-logo"})}),Object(q.jsx)(U,{src:E,alt:"tmdb-logo"})]})})},L="https://api.themoviedb.org/3/",A="0b7b5050774bc37ab633f2e09326102e",H="".concat(L,"search/movie?api_key=").concat(A,"&language=en-US&query="),P="".concat(L,"movie/popular?api_key=").concat(A,"&language=en-US"),K="".concat(L,"authentication/token/new?api_key=").concat(A),Q="".concat(L,"authentication/token/validate_with_login?api_key=").concat(A),V="".concat(L,"authentication/session/new?api_key=").concat(A),X="http://image.tmdb.org/t/p/",Y="w1280",Z="w780",$=R.b.div(o||(o=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 70px;\n    background: var(--medGrey);\n    color: var(--white);\n"]))),nn=R.b.div(s||(s=Object(J.a)(["\n    display: flex;\n    width: 100%;\n    max-width: var(--maxWidth);\n    padding: 0 20px;\n\n    span {\n        font-size: var(--fontMed);\n        color: var(--white);\n        padding-right: 10px;\n\n        @media screen and (max-width: 768px) {\n            font-size: var(--fontSmall);\n        }\n    }\n"]))),en=function(n){var e=n.movieTitle;return Object(q.jsx)($,{children:Object(q.jsxs)(nn,{children:[Object(q.jsx)(G.b,{to:"/",children:Object(q.jsx)("span",{children:"Home"})}),Object(q.jsx)("span",{children:"|"}),Object(q.jsx)("span",{children:e})]})})},tn=R.b.div(d||(d=Object(J.a)(["\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0 20px;\n\n    h1 {\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig);\n        }\n    }\n"]))),rn=R.b.div(u||(u=Object(J.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 2rem;\n"]))),an=function(n){var e=n.header,t=n.children;return Object(q.jsxs)(tn,{children:[Object(q.jsx)("h1",{children:e}),Object(q.jsx)(rn,{children:t})]})},cn=R.b.div(b||(b=Object(J.a)(["\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]))),on=R.b.img(l||(l=Object(J.a)(["\n    width: 100%;\n    max-width: 720px;\n    /* height: 333px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n    animation: animateThumb 0.5s;\n\n    &:hover {\n        opacity: 0.8;\n    }\n\n    @keyframes animateThumb {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"]))),sn=function(n){var e=n.image,t=n.movieId,r=n.clickable;return Object(q.jsx)("div",{children:r?Object(q.jsx)(G.b,{to:"/".concat(t),children:Object(q.jsx)(on,{src:e,alt:"movie-thumb"})}):Object(q.jsx)(on,{src:e,alt:"movie-thumb"})})},dn=t.p+"static/media/no_image.22d2aa4d.jpg",un=R.b.div(j||(j=Object(J.a)(["\n    background: ",";\n    background-size: cover;\n    background-position: center;\n    padding: 40px 20px;\n    animation: animateMovieInfo 1s;\n\n    @keyframes animateMovieInfo {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"])),(function(n){var e=n.backdrop;return e?"url('".concat(X).concat(Y).concat(e,"')"):"#000"})),bn=R.b.div(h||(h=Object(J.a)(["\n    display: flex;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    background: rgba(0, 0, 0, 0.7);\n    border-radius: 20px;\n\n    @media screen and(max-width: 768px){\n        display: block;\n        max-height: none;\n    }\n"]))),ln=R.b.div(p||(p=Object(J.a)(["\n    width: 100%;\n    padding: 20px 40px;\n    color: var(--white);\n    overflow: hidden;\n\n    .rating-directors {\n        display: flex;\n        justify-content: flex-start;\n\n    }\n\n    .score {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        color: #000;\n        font-weight: 800;\n        border-radius: 50%;\n        margin: 0;\n    }\n\n    .director {\n        margin: 0 0 0 40px;\n\n        p{\n            margin: 0;\n        }\n\n    }\n\n    h1 {\n        @media screen and(max-width: 768){\n            font-size: var(--fontBig);\n        }\n    }\n"]))),jn=function(n){var e,t,r=n.movie;return Object(q.jsx)(un,{backdrop:r.backdrop_path,children:Object(q.jsxs)(bn,{children:[Object(q.jsx)(sn,{image:r.poster_path?"".concat(X).concat(Z).concat(r.poster_path):dn,clickable:!1,alt:"movie-thumb"}),Object(q.jsxs)(ln,{children:[Object(q.jsx)("h1",{children:r.title}),Object(q.jsx)("h3",{children:"PLOT"}),Object(q.jsx)("p",{children:r.overview}),Object(q.jsxs)("div",{className:"rating-directors",children:[Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{children:"RATING"}),Object(q.jsx)("div",{className:"score",children:r.vote_average})]}),console.log(r.directors),Object(q.jsxs)("div",{className:"director",children:[Object(q.jsxs)("h3",{children:["DIRECTOR",(null===(e=r.directors)||void 0===e?void 0:e.length)>1?"S":""]}),null===(t=r.directors)||void 0===t?void 0:t.map((function(n){return Object(q.jsx)("p",{children:n.name},n.credit_id)}))]})]})]})]})})},hn=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},pn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},xn=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},mn=R.b.div(x||(x=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    min-height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),fn=R.b.div(m||(m=Object(J.a)(["\n    display: flex;\n    max-width: var(--maxWidth);\n    width: 100%;\n    margin: 0 auto;\n\n\n    .column {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--medGrey);\n        border-radius: 20px;\n        margin: 0 20px;\n        flex: 1%;\n\n        &:first-child {\n            margin-left: 0;\n        }\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n\n    @media screen and (max-width: 768px){\n        display: block;\n\n        .column{\n            margin: 20px 0;\n        }\n        \n    }\n"]))),gn=function(n){var e=n.time,t=n.budget,r=n.revenue;return Object(q.jsx)(mn,{children:Object(q.jsxs)(fn,{children:[Object(q.jsx)("div",{className:"column",children:Object(q.jsxs)("p",{children:["Running time: ",hn(e)]})}),Object(q.jsx)("div",{className:"column",children:Object(q.jsxs)("p",{children:["Budget: ",pn(t)]})}),Object(q.jsx)("div",{className:"column",children:Object(q.jsxs)("p",{children:["Ravenue: ",pn(r)]})})]})})},vn=R.b.div(f||(f=Object(J.a)(["\n    color: var(--white);\n    background: var(--darkGrey);\n    border-radius: 20px;\n    padding: 5px;\n    text-align: center;\n\n    h3{\n        margin: 10px 0 0 0;\n    }\n\n    p {\n        margin: 5px 0;\n    }\n"]))),On=R.b.img(g||(g=Object(J.a)(["\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n"]))),wn=function(n){var e=n.name,t=n.character,r=n.imageUrl;return Object(q.jsxs)(vn,{children:[Object(q.jsx)(On,{src:r,alt:"actor-thumb"}),Object(q.jsx)("h3",{children:e}),Object(q.jsx)("p",{children:t})]})},yn=t(5),kn=t.n(yn),Sn=t(6),_n=t(8),Tn=t(7),In={method:"POST",headers:{"Content-Type":"application/json"}},Mn={fetchMovies:function(){var n=Object(_n.a)(kn.a.mark((function n(e,t){var r;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(H).concat(e,"&page=").concat(t):"".concat(P,"&page=").concat(t),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(_n.a)(kn.a.mark((function n(e){var t;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(L,"movie/").concat(e,"?api_key=").concat(A),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(_n.a)(kn.a.mark((function n(e){var t;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(L,"movie/").concat(e,"/credits?api_key=").concat(A),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(_n.a)(kn.a.mark((function n(){var e;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(K);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(_n.a)(kn.a.mark((function n(e,t,r){var a,c;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(Q,Object(Sn.a)(Object(Sn.a)({},In),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(V,Object(Sn.a)(Object(Sn.a)({},In),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(_n.a)(kn.a.mark((function n(e,t,r){var a,c;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(L,"movie/").concat(t,"/rating?api_key=").concat(A,"&session_id=").concat(e),n.next=3,fetch(a,Object(Sn.a)(Object(Sn.a)({},In),{},{body:JSON.stringify({value:r})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},zn=function(){var n,e=function(n){var e=Object(T.useState)({}),t=Object(Tn.a)(e,2),r=t[0],a=t[1],c=Object(T.useState)(!0),i=Object(Tn.a)(c,2),o=i[0],s=i[1],d=Object(T.useState)(!1),u=Object(Tn.a)(d,2),b=u[0],l=u[1];return Object(T.useEffect)((function(){var e=function(){var e=Object(_n.a)(kn.a.mark((function e(){var t,r,c;return kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),s(!1),e.next=5,Mn.fetchMovie(n);case 5:return t=e.sent,e.next=8,Mn.fetchCredits(n);case 8:r=e.sent,c=r.crew.filter((function(n){return"Director"===n.job})),a(Object(Sn.a)(Object(Sn.a)({},t),{},{actors:r.cast,directors:c})),s(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),l(!0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=xn(n);if(t)return a(t),void s(!1);e()}),[n]),Object(T.useEffect)((function(){sessionStorage.setItem(n,JSON.stringify(r))}),[n,r]),{state:r,loading:o,error:b}}(Object(N.h)().movieId),t=e.state,r=e.loading,a=e.error;return r?Object(q.jsx)(cn,{}):a?Object(q.jsx)("div",{children:"Something went wrong..."}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(en,{movieTitle:t.original_title}),Object(q.jsx)(jn,{movie:t}),Object(q.jsx)(gn,{time:t.runtime,budget:t.budget,revenue:t.revenue}),Object(q.jsx)(an,{header:"Actors",children:null===(n=t.actors)||void 0===n?void 0:n.map((function(n){return Object(q.jsx)(wn,{name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(X).concat(Z).concat(n.profile_path):dn},n.credit_id)}))})]})},Gn=function(){return Object(q.jsx)("div",{children:"Not Found"})},Nn=Object(R.a)(v||(v=Object(J.a)(["\n    :root {\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGray: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }\n\n    *{\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n\n        h1 {\n            font-weight: 600;\n            color: var(--white);\n        }\n        h3 {\n            font-size: 1.1rem;\n            font-weight: 600;\n        }\n        p {\n            font-size: 1rem;\n            color: var(--white);\n        }\n    }\n\n\n\n"]))),Bn=R.b.div(O||(O=Object(J.a)(["\n    background: linear-gradient(\n        to bottom, rgba(0,0,0,0)\n        41%, rgba(0, 0, 0, 0.65)\n        100%\n    ),\n    url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"])),(function(n){return n.image})),En=R.b.div(w||(w=Object(J.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),Jn=R.b.div(y||(y=Object(J.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1{\n        font-size: var(--fontSuperBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontbig);\n            \n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px) {\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        max-width: 100%\n    }\n"]))),Rn=function(n){var e=n.image,t=n.title,r=n.text;return Object(q.jsx)(Bn,{image:e,children:Object(q.jsx)(En,{children:Object(q.jsxs)(Jn,{children:[Object(q.jsx)("h1",{children:t}),Object(q.jsx)("p",{children:r})]})})})},Wn=R.b.div(k||(k=Object(J.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n        opacity: 0.8;\n    }\n\n"]))),Cn=function(n){var e=n.text,t=n.callback;return Object(q.jsx)(Wn,{type:"button",onClick:t,children:e})},Fn=t.p+"static/media/search-icon.cd820f5a.svg",Un=R.b.div(S||(S=Object(J.a)(["\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),qn=R.b.div(_||(_=Object(J.a)(["\n    position: relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    margin: 0 auto;\n    border-radius: 40px;\n    color: var(--white);\n\n    img {\n        position: absolute;\n        left: 15px;\n        top: 14px;\n        width: 30px;\n    }\n\n    input {\n        font-size: var(--fontBig);\n        position: absolute;\n        left: 0;\n        margin: 8px 0;\n        padding: 0 0 0 60px;\n        border: 0;\n        width: 95%;\n        background: transparent;\n        height: 40px;\n        color: var(--white);\n\n        \n        &:focus {\n            outline: none;\n        }\n\n    }\n"]))),Dn=function(n){var e=n.setSearchTerm,t=n.searchTerm,r=Object(T.useState)(t),a=Object(Tn.a)(r,2),c=a[0],i=a[1],o=Object(T.useRef)(!0);return Object(T.useEffect)((function(){if(!o.current){var n=setTimeout((function(){e(c)}),800);return function(){return clearTimeout(n)}}o.current=!1}),[e,c]),Object(q.jsx)(Un,{children:Object(q.jsxs)(qn,{children:[Object(q.jsx)("img",{src:Fn,alt:"search-icon"}),Object(q.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return i(n.currentTarget.value)},value:c})]})})},Ln=t(13),An={page:0,results:[],total_pages:0,total_results:0},Hn=function(){var n=function(){var n=Object(T.useState)(""),e=Object(Tn.a)(n,2),t=e[0],r=e[1],a=Object(T.useState)(),c=Object(Tn.a)(a,2),i=c[0],o=c[1],s=Object(T.useState)(!1),d=Object(Tn.a)(s,2),u=d[0],b=d[1],l=Object(T.useState)(!1),j=Object(Tn.a)(l,2),h=j[0],p=j[1],x=Object(T.useState)(!1),m=Object(Tn.a)(x,2),f=m[0],g=m[1],v=function(){var n=Object(_n.a)(kn.a.mark((function n(e){var t,r,a=arguments;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,p(!1),b(!0),n.next=6,Mn.fetchMovies(t,e);case 6:r=n.sent,o((function(n){return Object(Sn.a)(Object(Sn.a)({},r),{},{results:e>1?[].concat(Object(Ln.a)(n.results),Object(Ln.a)(r.results)):Object(Ln.a)(r.results)})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),p(!0);case 13:b(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(T.useEffect)((function(){if(!t){var n=xn("homeState");if(n)return void o(n)}o(An),v(1,t)}),[t]),Object(T.useEffect)((function(){f&&(v(i.page+1,t),g(!1))})),Object(T.useEffect)((function(){t||sessionStorage.setItem("homeState",JSON.stringify(i))}),[t,i]),{state:i,loading:u,error:h,searchTerm:t,setSearchTerm:r,setIsLoadingMore:g}}(),e=n.state,t=n.loading,r=n.error,a=n.searchTerm,c=n.setSearchTerm,i=n.setIsLoadingMore;return console.log(e),r?Object(q.jsx)("div",{children:"Something went wrong ..."}):Object(q.jsx)(q.Fragment,{children:e&&e.results[0]?Object(q.jsxs)(q.Fragment,{children:[a?null:Object(q.jsx)(Rn,{image:"".concat(X).concat(Y).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}),Object(q.jsx)(Dn,{searchTerm:a,setSearchTerm:c}),Object(q.jsx)(an,{header:a?"Search Result":"Popular Movies",children:e.results.map((function(n){return Object(q.jsx)(sn,{clickable:!0,image:n.poster_path?X+Z+n.poster_path:dn,movieId:n.id},n.id)}))}),t&&Object(q.jsx)(cn,{}),e.page<e.total_pages&&!t&&Object(q.jsx)(Cn,{text:"Load More",callback:function(){return i(!0)}})]}):null})},Pn=function(){return Object(q.jsxs)(G.a,{children:[Object(q.jsx)(D,{}),Object(q.jsxs)(N.c,{children:[Object(q.jsx)(N.a,{path:"/",element:Object(q.jsx)(Hn,{})}),Object(q.jsx)(N.a,{path:"/:movieId",element:Object(q.jsx)(zn,{})}),Object(q.jsx)(N.a,{path:"/*",element:Object(q.jsx)(Gn,{})})]}),Object(q.jsx)(Nn,{})]})};z.a.render(Object(q.jsx)(I.a.StrictMode,{children:Object(q.jsx)(Pn,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.32f3e566.chunk.js.map