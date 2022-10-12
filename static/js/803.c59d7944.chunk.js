"use strict";(self.webpackChunktony_feng_github_io=self.webpackChunktony_feng_github_io||[]).push([[803],{4990:function(e,n,t){t.d(n,{Z:function(){return W}});var i=t(885),r=t(2791),o=t(4758),s=t(5953),c=t(7012),a=t(4360),l=t(1281),d=t(9434),x=t(1087),h=t(6418),u=t(6015),m=t(5810),p=t(3811),j=t(5341),f=t(2892),g=t(4666),v=t(8503),Z=t(7607),w=t(2381),b=t(8651),y=t(4109),k=t(8259),P=t(7762),C=function(e,n){var t,r=(0,P.Z)(n.entries());try{for(r.s();!(t=r.n()).done;){var o=(0,i.Z)(t.value,2),s=o[0];if(o[1].test(e))return s}}catch(c){r.e(c)}finally{r.f()}return 0},S=t(184),z=function(e){var n=(0,r.useMemo)((function(){return[/^(\/|)$/gi,/^(\/projects)(\/|)$|^(\/project\/)(\d+)(\/|)$/gi]}),[]),t=(0,r.useState)(!1),c=(0,i.Z)(t,2),a=c[0],l=c[1],P=(0,r.useState)(!1),z=(0,i.Z)(P,2),F=z[0],I=z[1],R=(0,r.useState)(C(window.location.pathname,n)),H=(0,i.Z)(R,2),L=H[0],T=H[1],E=(0,d.v9)((function(e){return e.isDarkRdc.isDark})),M=(0,d.v9)((function(e){return e.userInfoRdc.userInfo})),D=(0,d.I0)(),_=M.name,W=(0,r.useRef)(),A=e.handleHeaderHeight,B=(0,r.useCallback)((function(){var e=C(window.location.pathname,n);T(e)}),[n]),O=function(){I(!0)},N=function(){I(!1)},U=function(){return window.innerWidth<800?l(!0):l(!1)},q=(0,r.useCallback)((function(){A(W.current.clientHeight)}),[A,W]);return(0,r.useEffect)((function(){return B(),U(),window.addEventListener("resize",U),q(),window.addEventListener("resize",q),function(){window.removeEventListener("resize",U),window.removeEventListener("resize",q)}}),[q,B]),(0,S.jsxs)("div",{children:[(0,S.jsx)(o.ZP,{})," ",(0,S.jsx)(f.Z,{position:"static",sx:{bgcolor:E?"#121212":"#9CF",boxShadow:0,textOverflow:"ellipsis",overflow:"hidden"},ref:W,children:(0,S.jsx)(g.Z,{id:"back-to-top-anchor",children:(0,S.jsxs)(s.ZP,{container:!0,spacing:0,direction:"row",justifyContent:"space-between",alignItems:"center",wrap:"nowrap",children:[(0,S.jsx)(s.ZP,{item:!0,zeroMinWidth:!0,children:(0,S.jsx)(y.kS,{children:_})}),(0,S.jsx)(s.ZP,{item:!0,sx:{minHeight:"inherit"},zeroMinWidth:!0,children:(0,S.jsxs)(s.ZP,{container:!0,spacing:0,direction:"row",justifyContent:"space-between",alignItems:"center",wrap:"nowrap",children:[(0,S.jsx)(v.Z,{checked:E,icon:(0,S.jsx)(w.Z,{sx:{fontSize:20}}),checkedIcon:(0,S.jsx)(b.Z,{sx:{fontSize:20}}),size:"large",onChange:function(){return D((0,k.K4)())},value:"Dark Mode"}),a?(0,S.jsxs)(u.Z,{children:[(0,S.jsx)(m.Z,{title:"Menu",arrow:!0,children:(0,S.jsx)(p.Z,{edge:"start",color:"inherit","aria-label":"Menu","aria-haspopup":!0,onClick:O,children:(0,S.jsx)(Z.Z,{sx:{fontSize:40}})})}),(0,S.jsx)(j.ZP,{anchor:"right",open:F,onClose:N,PaperProps:{sx:{bgcolor:E?"#121212":"#9CF",boxShadow:0}},children:(0,S.jsxs)(h.Z,{value:L,variant:"scrollable",orientation:"vertical",TabIndicatorProps:{sx:{bgcolor:E?"#9CF":"#4DA6FF",height:"100%",width:"4%",borderRadius:"20px 0px 0px 20px"}},children:[(0,S.jsx)(y.iC,{label:"Home",component:x.rU,to:"/"},"Home"),(0,S.jsx)(y.iC,{label:"Projects",component:"a",href:"#project"},"Projects")]})})]}):(0,S.jsxs)(h.Z,{value:L,onChange:B,variant:"fullWidth",sx:{minHeight:"inherit"},TabIndicatorProps:{sx:{bgcolor:E?"#9CF":"#4DA6FF",height:"10%",width:"100%",borderRadius:"20px 20px 0px 0px"}},children:[(0,S.jsx)(y.iC,{label:"Home",component:x.rU,to:"/",sx:{mr:2}},"Home")," ",(0,S.jsx)(y.iC,{label:"Projects",component:"a",href:"#project"},"Projects")]})]})})]})})})]})},F=t(8575),I=t(69),R=t(5590),H=t(558),L=function(e){var n=e.threshold,t=(0,F.Z)({disableHysteresis:!0,threshold:n});return(0,S.jsx)(I.Z,{in:t,children:(0,S.jsx)(u.Z,{onClick:function(e){var n=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");n&&n.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:"6%",right:"6%",zIndex:1},children:(0,S.jsx)(R.Z,{size:"large","aria-label":"scroll back to top",sx:{bgcolor:"#9CF",color:"white",":hover":{bgcolor:"#9CF"}},children:(0,S.jsx)(H.Z,{})})})})};L.defaultProps={threshold:20};var T=function(e){var n=e.threshold;return(0,S.jsx)(L,{threshold:n})},E=t(4565),M=function(e){var n=(0,r.useState)((new Date).getFullYear()),t=(0,i.Z)(n,1)[0],o=(0,d.v9)((function(e){return e.isDarkRdc.isDark})),c=(0,r.useRef)(),a=e.handleFooterHeight,l=(0,r.useCallback)((function(){a(c.current.clientHeight)}),[a,c]);return(0,r.useEffect)((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),(0,S.jsx)("div",{children:(0,S.jsx)(f.Z,{position:"static",sx:{bgcolor:o?"#121212":"#9CF",boxShadow:0,py:2},ref:c,children:(0,S.jsx)(s.ZP,{container:!0,spacing:.1,direction:"column",justifyContent:"space-evenly",alignItems:"center",wrap:"nowrap",children:(0,S.jsxs)(s.ZP,{item:!0,zeroMinWidth:!0,xs:12,children:[(0,S.jsxs)(E.Z,{noWrap:!0,variant:"body1",component:"div",align:"center",sx:{width:"90vw",textOverflow:"ellipsis",overflow:"hidden"},children:["\xa9"," TF 2021 - ",t," ","\u2022"," Developed using React and Redux"]})," "]})})})})},D=t(59),_=t(5289),W=function(e){var n=e.children,t=(0,r.useState)(0),x=(0,i.Z)(t,2),h=x[0],u=x[1],m=(0,r.useState)(0),p=(0,i.Z)(m,2),j=p[0],f=p[1],g=(0,l.Z)("(prefers-color-scheme: dark)"),v=(0,d.v9)((function(e){return e.isDarkRdc.isDark})),Z=(0,d.v9)((function(e){return e.isFirstTimeRdc.isFirstTime})),w=(0,d.I0)();return(0,r.useEffect)((function(){Z&&(w((0,k.NZ)(g)),w((0,D.dX)(!1)))}),[g,w,Z]),(0,S.jsx)("div",{children:(0,S.jsxs)(c.Z,{theme:v?(0,a.Z)(_._):(0,a.Z)(_.R),children:[(0,S.jsx)(o.ZP,{}),(0,S.jsx)(z,{handleHeaderHeight:u}),(0,S.jsx)(T,{threshold:50}),(0,S.jsx)(s.ZP,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",sx:{minHeight:"calc(100vh - ".concat(Math.round(h+j),"px)")},children:(0,S.jsx)(s.ZP,{item:!0,xs:12,children:n})}),(0,S.jsx)(M,{handleFooterHeight:f})]})})}},442:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i=t(2791),r=t(1087),o=t(5953),s=t(3978),c=t(4565),a=t(4162),l=t(5810),d=t(3811),x=t(6650),h=t(6015),u=t(5209),m=t(7205),p=t(3200),j=t(2019),f=t(255),g=t(2821),v=t(9434),Z=t(4990),w=t(2760),b=t(885),y=t(8928),k=t(8487),P=t(199),C=t(2911),S=t(5942),z=t.n(S),F=(t(1811),t(4109)),I=JSON.parse('{"1":{"title":"My Portfolio","brief":"A portfolio page developed using React and Redux. It\'s based on one of my previous projects.","cover":"images/react-redux.png","link":"https://github.com/Tony-Feng/tony-feng.github.io","id":1},"2":{"title":"JAST Recognize You","brief":"A way to speed up event registration.","cover":"images/qhacks.png","link":"https://devpost.com/software/jast-recognize-you","id":2},"3":{"title":"Interactive Element Collection","brief":"A page to display my element collection interactively.","cover":"images/periodic-table.png","disabled":true,"id":3}}'),R={userAvatar:t.p+"static/media/flask.0ad710d3e217fd134ecf.jpg",1:t.p+"static/media/react-redux.eb530479b3457464b38a.png",2:t.p+"static/media/qhacks.dcc4aa3cd2308dc6aa98.png",3:t.p+"static/media/periodic-table.a90b117b8b3276014173.png"},H=t(184),L=function(e){var n=e.numToLoad,t=I,s=(0,i.useState)(window.innerWidth),c=(0,b.Z)(s,2),a=c[0],d=c[1],x=z()()(C.Z),h=function(){d(window.innerWidth)};return(0,i.useEffect)((function(){return h(),window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}}),[]),(0,H.jsx)("div",{children:(0,H.jsx)(o.ZP,{container:!0,spacing:0,direction:"row",justifyContent:"center",alignItems:"center",sx:{width:"100vw"},children:(0,H.jsx)(o.ZP,{item:!0,xs:10,container:!0,spacing:4,direction:"row",justifyContent:"center",alignItems:"center",children:t&&Object.entries(t).map((function(e){var t,i=(0,b.Z)(e,2),s=i[0],c=i[1];return n>=function(e){var n=parseInt(e,10);return isNaN(n)?0:n}(s)&&(0,H.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:6,children:(t=c,(0,H.jsx)(y.Z,{children:(0,H.jsx)(l.Z,{title:t.disabled?"Stay tuned":'Click to view more details about project "'.concat(t.title,'"'),arrow:!0,children:(0,H.jsx)("div",{children:(0,H.jsxs)(k.Z,{component:t.link?"a":r.rU,href:t.link?t.link:null,to:t.link?null:"/project/".concat(t.id),target:"_blank",rel:"noopener",disabled:t.disabled,children:[" ",(0,H.jsx)(o.ZP,{container:!0,spacing:0,direction:"row",justifyContent:"center",alignItems:"center",children:t.cover?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,H.jsx)(P.Z,{component:"img",image:R[t.id],alt:"img_".concat(t.id,"_").concat(t.title),title:t.title,sx:{objectFit:"contain"}})}),(0,H.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:6,children:[(0,H.jsx)(F.RB,{title:(0,H.jsx)(x,{id:t.id,text:t.title,maxLine:a<250?"1":"2",ellipsis:"...",basedOn:"letters"}),titleTypographyProps:{gutterBottom:!1,variant:"h4",component:"div",align:"center"},sx:{py:"5px"}})," ",(0,H.jsx)(F.e2,{children:(0,H.jsx)(x,{id:t.id,text:t.brief,maxLine:"5",ellipsis:"...",basedOn:"words"})})]})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(o.ZP,{item:!0,xs:12,sm:12,md:6,children:[(0,H.jsx)(F.RB,{title:(0,H.jsx)(x,{id:t.id,text:t.title,maxLine:a<250?"1":"2",ellipsis:"...",basedOn:"letters"}),titleTypographyProps:{gutterBottom:!1,variant:"h4",component:"div",align:"center"},sx:{py:"0px"}})," "]}),(0,H.jsx)(o.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,H.jsx)(F.e2,{children:(0,H.jsx)(x,{id:t.id,text:t.brief,maxLine:"5",ellipsis:"...",basedOn:"words"})})})]})})]})})})},t.id))},s)}))})})})};L.defaultProps={numToLoad:1/0};var T=L,E=function(){var e=(0,v.v9)((function(e){return e.userInfoRdc.userInfo})),n=e.name,t=e.email,b=e.linkedin,y=e.github,k=e.bio,P=e.tags,C=R.userAvatar;return(0,H.jsx)(Z.Z,{children:(0,H.jsxs)(o.ZP,{container:!0,spacing:0,direction:"column",justifyContent:"center",alignItems:"center",children:[(0,H.jsx)(o.ZP,{item:!0,xs:12,sx:{mt:5},children:(0,H.jsx)(s.Z,{alt:n,src:C,align:"center",sx:{bgcolor:"#9CF",width:"15vw",height:"15vw",fontSize:"4vw",objectFit:"contain"},children:n})}),(0,H.jsx)(o.ZP,{item:!0,xs:12,sx:{mt:3},children:(0,H.jsx)(c.Z,{variant:"h2",component:"div",align:"center",children:n})}),(0,H.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:2},children:(0,H.jsxs)(a.Z,{spacing:{xs:1,sm:3,md:3},direction:{xs:"column",sm:"row",md:"row"},justifyContent:"center",alignItems:"center",align:"center",children:[(0,H.jsx)(l.Z,{title:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(F.PM,{children:"Email"}),(0,H.jsx)(F.PM,{children:t})]}),arrow:!0,leaveDelay:500,children:(0,H.jsx)(d.Z,{edge:"start",color:"inherit","aria-label":"Email",variant:"div",target:"_blank",rel:"noopener noreferrer",href:"mailto:".concat(t),size:"small",children:(0,H.jsx)(p.Z,{sx:{fontSize:40}})})}),(0,H.jsx)(l.Z,{title:"LinkedIn",arrow:!0,children:(0,H.jsx)(d.Z,{edge:"start",color:"inherit","aria-label":"LinkedIn",variant:"div",target:"_blank",rel:"noopener noreferrer",href:b,size:"small",children:(0,H.jsx)(j.Z,{sx:{fontSize:40}})})}),(0,H.jsx)(l.Z,{title:"GitHub",arrow:!0,children:(0,H.jsx)(d.Z,{edge:"start",color:"inherit","aria-label":"GitHub",variant:"div",target:"_blank",rel:"noopener noreferrer",href:y,size:"small",children:(0,H.jsx)(f.Z,{sx:{fontSize:40}})})})]})}),(0,H.jsx)(o.ZP,{item:!0,xs:12,sx:{mx:2},children:(0,H.jsx)(c.Z,{variant:"h6",component:"div",gutterBottom:!0,align:"justify",sx:{width:"42vw",whiteSpace:"pre-line",objectFit:"contain"},children:k})}),(0,H.jsx)(o.ZP,{item:!0,xs:12,sx:{mx:2,my:3},children:(0,H.jsx)(x.Z,{component:"ul",elevation:8,sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",p:2,m:0,width:"42vw",objectFit:"contain"},children:(0,H.jsxs)(a.Z,{spacing:1,direction:"column",justifyContent:"center",alignItems:"center",children:[(0,H.jsx)(c.Z,{variant:"h4",component:"div",gutterBottom:!0,align:"center",children:"Skills"}),(0,H.jsx)(h.Z,{component:"div",sx:{textAlign:"center"},children:P.map((function(e,n){return(0,H.jsx)(u.Z,{label:(0,H.jsx)(c.Z,{style:{whiteSpace:"normal"},children:e}),component:"li",sx:{m:1}},n)}))})]})})}),(0,H.jsxs)(o.ZP,{item:!0,xs:12,sx:{mt:6,mb:8},children:[" ",(0,H.jsx)(c.Z,{variant:"h3",component:"div",id:"project",gutterBottom:!0,align:"center",sx:{mb:6},children:"Selected Projects"})," ",(0,H.jsx)(i.Suspense,{fallback:(0,H.jsx)(w.Z,{}),children:(0,H.jsx)(T,{numToLoad:3})}),(0,H.jsx)(a.Z,{spacing:0,direction:"column",justifyContent:"center",alignItems:"center",sx:{mx:2},children:(0,H.jsx)(m.Z,{variant:"outlined",size:"medium",endIcon:(0,H.jsx)(g.Z,{}),component:r.rU,to:"/projects",disabled:!0,sx:{mt:6,objectFit:"contain"},children:"Stay Tuned for More Projects"})})]})]})})}},4109:function(e,n,t){t.d(n,{PM:function(){return x},RB:function(){return h},e2:function(){return u},iC:function(){return l},kS:function(){return d}});var i=t(166),r=t(6015),o=t(4565),s=t(6398),c=t(5194),a=t(3457),l=(0,a.Z)(i.Z)({margin:"2%",color:"white",fontFamily:"Times New Roman",fontWeight:"bold",fontSize:24,"& .Mui-selected":{color:"white"}}),d=(0,a.Z)(r.Z)({fontFamily:"Times New Roman",fontWeight:"bold",fontSize:44,textOverflow:"ellipsis",overflow:"hidden"}),x=(0,a.Z)(o.Z)({m:0,p:0,fontSize:"inherit",textAlign:"center"}),h=(0,a.Z)(s.Z)({"& .MuiCardHeader-content":{width:"100%",overflow:"hidden",textOverflow:"ellipsis"}}),u=(0,a.Z)(c.Z)({paddingTop:"0px",paddingBottom:"0px","&:last-child":{paddingBottom:"0px"}})}}]);
//# sourceMappingURL=803.c59d7944.chunk.js.map