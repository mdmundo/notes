(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{97:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),i=a.n(c),r=a(13),o=a.n(r),s=a(71),l=a(156),d=a(16),j=a(141),b=a(161),u=a(155),m=a(154),p=a(70),h=a.n(p),O=a(153),x=a(43),g=a(21),f=a(137),y=a(144),v=a(158),k=a(40);a(87),a(91);k.a.initializeApp({apiKey:"AIzaSyDr8Zix9phP7yKXnd47btENUXyXQvA3Eec",authDomain:"mdmundonotes.firebaseapp.com",projectId:"mdmundonotes",storageBucket:"mdmundonotes.appspot.com",messagingSenderId:"1019982159986",appId:"1:1019982159986:web:c7098cc516c4fa26faa2eb"});var N=k.a.database(),S=new k.a.auth.GoogleAuthProvider;S.addScope("profile"),S.addScope("email");var T=function(){return Object(n.jsx)(f.a,{fullWidth:!0,variant:"text",color:"secondary",onClick:function(){k.a.auth().signOut()},children:"Log out"})},C=Object(j.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),D=function(){var e=Object(g.a)(k.a.auth()),t=Object(d.a)(e,3),a=t[0],i=(t[1],t[2],Object(c.useState)("")),r=Object(d.a)(i,2),o=r[0],s=r[1],l=Object(c.useState)(""),j=Object(d.a)(l,2),b=j[0],u=j[1],m=Object(c.useState)(""),p=Object(d.a)(m,2),h=p[0],O=p[1],x=Object(c.useState)(""),S=Object(d.a)(x,2),D=S[0],w=S[1],I=Object(c.useState)(!1),A=Object(d.a)(I,2),B=A[0],F=A[1],W=Object(c.useState)(!1),P=Object(d.a)(W,2),L=P[0],E=P[1],z=C();return Object(n.jsxs)("form",{className:z.form,onSubmit:function(e){e.preventDefault(),F(!o),E(!b),O(o?"":"Title can not be empty."),w(b?"":"Body can not be empty."),o&&b&&(N.ref("users/".concat(null===a||void 0===a?void 0:a.uid,"/notes")).push({title:o,body:b,createdAt:k.a.database.ServerValue.TIMESTAMP}),s(""),u(""))},noValidate:!0,children:[Object(n.jsx)(v.a,{value:o,onChange:function(e){return s(e.target.value)},error:B,helperText:h,variant:"outlined",margin:"normal",fullWidth:!0,id:"title",label:"Title",name:"title",autoComplete:"off",autoFocus:!0}),Object(n.jsx)(v.a,{value:b,onChange:function(e){return u(e.target.value)},error:L,helperText:D,variant:"outlined",margin:"normal",fullWidth:!0,name:"body",label:"Body",type:"body",id:"body",autoComplete:"off",multiline:!0}),Object(n.jsxs)(y.a,{container:!0,spacing:1,className:z.submit,children:[Object(n.jsx)(y.a,{item:!0,xs:9,children:Object(n.jsx)(f.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",children:"Add Note"})}),Object(n.jsx)(y.a,{item:!0,xs:3,children:Object(n.jsx)(T,{})})]})]})},w=a(72),I=a(143),A=a(98),B=a(64),F=a(157),W=a(68),P=a.n(W),L=a(69),E=a.n(L),z=a(67),M=a.n(z),U=a(149),X=a(145),J=a(146),K=a(148),V=a(147),G=a(160),H=a(65),Q=a.n(H),Z=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(1.5),padding:e.spacing(.5),display:"flex",overflow:"auto",flexDirection:"column"},italic:{fontStyle:"italic",fontSize:e.spacing(1)}}})),q=function(e){var t=e.note,a=Object(g.a)(k.a.auth()),c=Object(d.a)(a,3),i=c[0],r=(c[1],c[2],Z());return Object(n.jsx)(A.a,{className:r.paper,children:Object(n.jsxs)(X.a,{children:[Object(n.jsx)(J.a,{children:Object(n.jsx)(Q.a,{})}),Object(n.jsx)(V.a,{disableTypography:!0,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"body1",children:t.title}),t.body.split("\n").map((function(e,t){return Object(n.jsx)(x.a,{color:"textSecondary",variant:"body1",children:e||"\xa0"},t)})),Object(n.jsx)(x.a,{color:"textSecondary",variant:"caption",className:r.italic,children:Object(F.a)(t.createdAt,new Date)})]})}),Object(n.jsx)(K.a,{children:Object(n.jsxs)(y.a,{container:!0,spacing:1,children:[Object(n.jsx)(y.a,{item:!0,xs:6,children:Object(n.jsx)(G.a,{title:"Delete",placement:"bottom-end",children:Object(n.jsx)(U.a,{edge:"end",onClick:function(){return N.ref("users/".concat(i.uid,"/notes/").concat(t.key)).remove()},children:Object(n.jsx)(M.a,{})})})}),Object(n.jsx)(y.a,{item:!0,xs:6,children:Object(n.jsx)(G.a,{title:t.checked?"Uncheck":"Check",placement:"bottom-start",children:Object(n.jsx)(U.a,{edge:"end",onClick:function(e){return N.ref("users/".concat(i.uid,"/notes/").concat(t.key)).update({checked:!t.checked})},children:t.checked?Object(n.jsx)(P.a,{}):Object(n.jsx)(E.a,{})})})})]})})]})})},R=a(152),Y=a(150),$=a(151),_=Object(j.a)((function(e){return{progress:{display:"block",margin:"auto"},card:{marginTop:e.spacing(6)},title:{marginBottom:e.spacing(3)}}})),ee=function(e){var t=_();return Object(n.jsx)(Y.a,{className:t.card,children:Object(n.jsxs)($.a,{children:[Object(n.jsx)(x.a,{className:t.title,variant:"subtitle2",display:"block",align:"center",gutterBottom:!0,children:e.text}),Object(n.jsx)(R.a,{className:t.progress,variant:"indeterminate",size:"2.2rem"})]})})},te=Object(j.a)((function(e){return{list:{width:"100%"},paper:{marginTop:e.spacing(1.5),padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},grid:{paddingTop:e.spacing(2)}}})),ae=function(){var e=Object(g.a)(k.a.auth()),t=Object(d.a)(e,3),a=t[0],c=(t[1],t[2],Object(B.a)(N.ref("users/".concat(a.uid,"/notes")))),i=Object(d.a)(c,3),r=i[0],o=i[1],s=(i[2],te());return Object(n.jsx)(n.Fragment,{children:o?Object(n.jsx)(ee,{text:"Loading Notes"}):0===r.length?Object(n.jsx)(y.a,{item:!0,className:s.grid,children:Object(n.jsx)(I.a,{className:s.list,children:Object(n.jsx)(A.a,{className:s.paper,children:Object(n.jsx)(x.a,{variant:"body2",display:"block",color:"textSecondary",children:"There is no note here."})})})}):Object(n.jsx)(y.a,{item:!0,className:s.grid,children:Object(n.jsx)(I.a,{className:s.list,children:r.map((function(e){return Object(n.jsx)(q,{note:Object(w.a)({key:e.key},e.val())},e.key)}))})})})},ne=Object(j.a)((function(e){return{login:{marginTop:e.spacing(7)}}})),ce=function(){var e=ne();return Object(n.jsx)(f.a,{className:e.login,fullWidth:!0,variant:"contained",color:"primary",onClick:function(){k.a.auth().signInWithPopup(S)},children:"Log in"})},ie=function(){return Object(n.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Created by ",Object(n.jsx)(O.a,{color:"inherit",href:"https://github.com/mdmundo",children:"Edmundo Paulino"}),"."]})},re=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},upper:{display:"flex",flexDirection:"column",alignItems:"center"},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}})),oe=function(){var e=Object(g.a)(k.a.auth()),t=Object(d.a)(e,3),a=t[0],c=t[1],i=(t[2],re());return Object(n.jsxs)("div",{className:i.root,children:[Object(n.jsx)(m.a,{}),Object(n.jsxs)(u.a,{component:"main",className:i.main,maxWidth:"xs",children:[Object(n.jsxs)("div",{className:i.upper,children:[Object(n.jsx)(b.a,{className:i.avatar,children:Object(n.jsx)(h.a,{})}),Object(n.jsx)(x.a,{component:"h1",variant:"h3",children:"Notes"})]}),a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(D,{}),Object(n.jsx)(ae,{})]}):c?Object(n.jsx)(ee,{text:"Loading User"}):Object(n.jsx)(ce,{})]}),Object(n.jsx)("footer",{className:i.footer,children:Object(n.jsx)(u.a,{maxWidth:"sm",children:Object(n.jsx)(ie,{})})})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},le=Object(s.a)({palette:{primary:{dark:"rgb(17, 82, 147)",light:"rgb(71, 145, 219)",main:"#1976d2"},secondary:{dark:"rgb(154, 0, 54)",light:"rgb(227, 51, 113)",main:"rgb(220, 0, 78)"}}});o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l.a,{theme:le,children:Object(n.jsx)(oe,{})})}),document.getElementById("root")),se()}},[[97,1,2]]]);
//# sourceMappingURL=main.7540f34f.chunk.js.map