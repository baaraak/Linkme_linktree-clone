(this["webpackJsonplinktree-clone"]=this["webpackJsonplinktree-clone"]||[]).push([[10],{292:function(e,n,t){},293:function(e,n,t){},294:function(e,n,t){},453:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return z}));var c=t(24),a=t(61),i=t(4),s=t.n(i),l=t(8),r=t(0),o=t.n(r),j=t(101),d=t(9);var u=t(438),b=t(80),h=t(431),O=t(441),x=t(442),p=t(413),f=t(289),m=(t(292),t(1)),k=function(){var e=Object(f.a)(),n=e.getCollapseProps,t=e.getToggleProps,a=e.isExpanded;return Object(m.jsxs)("div",{className:"analytics",children:[Object(m.jsxs)("div",Object(c.a)(Object(c.a)({className:"analytics__toggle"},t()),{},{children:[Object(m.jsx)(u.a,{size:400,color:"black",marginRight:20,children:"Lifetime Analytics:"}),Object(m.jsx)(b.a,{size:500,color:"black",marginRight:30,children:"Views: 3012"}),Object(m.jsx)(b.a,{size:500,color:"black",marginRight:30,children:"Clicks: 25"}),Object(m.jsx)("div",{className:"icon-help",children:Object(m.jsx)(h.a,{})}),Object(m.jsx)("div",{className:"icon-chevron",children:a?Object(m.jsx)(O.a,{size:20}):Object(m.jsx)(x.a,{size:20})})]})),Object(m.jsx)("section",Object(c.a)(Object(c.a)({className:"analytics__collapse"},n()),{},{children:Object(m.jsx)(p.a,{children:"GO PROP"})}))]})},v=t(25),g=t(16),N=t(443),_=t(461),C=t(444),w=t(445),y=t(446),T=(t(293),t(121)),D=(t(294),function(e){var n=e.defaultValue,t=e.onChange,a=e.placeholder,i=Object(T.a)(e,["defaultValue","onChange","placeholder"]),s=Object(r.useState)(),l=Object(g.a)(s,2),o=l[0],j=l[1],d=Object(r.useState)(n),u=Object(g.a)(d,2),b=u[0],h=u[1],O=Object(r.useRef)();Object(r.useEffect)((function(){j(Math.max(O.current.getBoundingClientRect().width,20)+10)}),[O,b]);return Object(m.jsxs)("div",{className:"resizable-input",children:[Object(m.jsx)("input",Object(c.a)(Object(c.a)({},i),{},{style:{width:o},onChange:function(e){h(e.target.value),null===t||void 0===t||t(e.target.value)},value:b,placeholder:a})),Object(m.jsx)("span",{ref:O,children:b||a})]})}),A=function(e){var n=e.onClose,t=e.onDelete,c=e._id;return Object(m.jsxs)("div",{className:"delete-component",children:[Object(m.jsx)(b.a,{color:"black",children:"Are you sure you want to delete this link? This action cannot be undone."}),Object(m.jsxs)("div",{className:"actions",children:[Object(m.jsx)(a.a,{fullWidth:!0,height:40,onClick:n,children:"Cancel"}),Object(m.jsx)(a.a,{fullWidth:!0,height:40,appearance:"primary",intent:"danger",onClick:function(){return t(c)},children:"Delete"})]})]})},E=function(e){var n=e.clicks;return Object(m.jsxs)(b.a,{color:"black",children:["This link has been clicked ",Object(m.jsx)(u.a,{children:n})," times."]})},L=function(e){e.onThumbnail;return Object(m.jsx)("div",{children:'"ThumbnailComponent"'})},R={DELETE:{id:"delete",title:"Delete Link",component:Object(m.jsx)(A,{})},ANALYTIC:{id:"analytic",title:"Link Analytics",component:Object(m.jsx)(E,{})},THUMBNAIL:{id:"thumbnail",title:"Add Thumbnail",component:Object(m.jsx)(L,{})}},I=function(e){var n=e.title,t=e.href,a=(e.active,e.provided),i=e.isDragging,s=e.clicks,l=e.onDelete,j=e.onThumbnail,d=e.onUpdate,b=e._id,h=Object(r.useState)(),O=Object(g.a)(h,2),x=O[0],p=O[1],f=function(e){d(b,Object(v.a)({},e.target.name,e.target.value))};return Object(m.jsxs)("div",Object(c.a)(Object(c.a)({className:"link-container ".concat(i?"shadow-2xl":"shadow")},a.draggableProps),{},{ref:a.innerRef,children:[Object(m.jsxs)("div",{className:"link",children:[Object(m.jsx)("div",Object(c.a)(Object(c.a)({className:"link__handle"},a.dragHandleProps),{},{children:Object(m.jsx)("svg",{width:"4",height:"16",viewBox:"0 0 4 16",children:Object(m.jsx)("path",{d:"M0 2C0 .897.897 0 2 0s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2"})})})),Object(m.jsxs)("div",{className:"link__content",children:[Object(m.jsxs)("div",{className:"input link__title",children:[Object(m.jsx)(D,{onBlur:f,name:"title",defaultValue:n,placeholder:"Enter title"}),Object(m.jsx)(N.a,{})]}),Object(m.jsxs)("div",{className:"input link__href",children:[Object(m.jsx)(D,{onBlur:f,placeholder:"http://url",defaultValue:t,name:"href"}),Object(m.jsx)(N.a,{})]}),Object(m.jsxs)("div",{className:"link__actions",children:[Object(m.jsx)("div",{className:"thumbnails",onClick:function(){return p(R.THUMBNAIL)},children:Object(m.jsx)(_.a,{content:"Add Thumbnail",children:Object(m.jsx)(C.a,{})})}),Object(m.jsx)("div",{className:"analytic",onClick:function(){return p(R.ANALYTIC)},children:Object(m.jsx)(_.a,{content:"Analytics",children:Object(m.jsx)(w.a,{})})}),Object(m.jsx)("div",{className:"trash",onClick:function(){return p(R.DELETE)},children:Object(m.jsx)(_.a,{content:"Delete",children:Object(m.jsx)(y.a,{})})})]})]})]}),x&&Object(m.jsxs)("div",{className:"link__message",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)(u.a,{color:"black",children:x.title}),Object(m.jsx)("div",{className:"close",onClick:function(){return p(null)},children:"x"})]}),Object(m.jsx)("div",{className:"message",children:o.a.cloneElement(x.component,{onClose:function(){return p(null)},clicks:s,_id:b,onDelete:l,onThumbnail:j})})]})]}))},M=t(81),P=t(408);function z(){var e=function(){var e=Object(j.b)(),n=e.data.links,t=e.updateLinks,c=Object(r.useCallback)(Object(l.a)(s.a.mark((function e(){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.link.create();case 2:n=e.sent,c=n.links,t(c);case 5:case"end":return e.stop()}}),e)}))),[t]),a=Object(r.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(n){var c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.link.delete(n);case 2:c=e.sent,a=c.links,t(a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t]),i=Object(r.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(n.links),e.next=3,d.a.link.reOrder(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t]),o=Object(r.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(n,c){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.link.update(n,c);case 2:a=e.sent,i=a.links,t(i);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[t]);return Object(r.useMemo)((function(){return n.sort((function(e,n){return e.index-n.index}))}),[n]),{links:n,create:c,onDelete:a,reOrder:i,update:o}}(),n=e.links,t=e.create,i=e.onDelete,o=e.reOrder,u=e.update;return console.log({links:n}),Object(m.jsxs)("div",{className:"settings",children:[Object(m.jsx)(k,{}),Object(m.jsxs)("div",{className:"page__container",children:[Object(m.jsx)(a.a,{fullWidth:!0,onClick:t,appearance:"primary",height:45,marginTop:50,children:"Add New Link"}),Object(m.jsx)("div",{className:"links",children:n.length>0?Object(m.jsx)(P.a,{onDragEnd:function(e){var t=e.draggableId,c=e.destination,a=e.source;if(t&&c&&a){var i=Object(M.c)(n,n[a.index].index,n[c.index].index);o({links:i})}},children:Object(m.jsx)(P.c,{droppableId:"droppable",children:function(e,t){return Object(m.jsxs)("div",Object(c.a)(Object(c.a)({},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,n){return Object(m.jsx)(P.b,{draggableId:e._id,index:n,children:function(n,t){return Object(m.jsx)(I,Object(c.a)(Object(c.a)({},e),{},{provided:n,onDelete:i,onUpdate:u,isDragging:t.isDragging}),e._id)}},e._id)})),e.placeholder]}))}})}):Object(m.jsxs)("div",{className:"link__empty",children:["You don't have any links to display.",Object(m.jsx)("br",{}),"Click the button above to add one."]})})]})]})}}}]);
//# sourceMappingURL=10.83c5a081.chunk.js.map