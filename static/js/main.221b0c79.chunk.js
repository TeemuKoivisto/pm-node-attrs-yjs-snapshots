(this["webpackJsonppm-node-attrs-yjs-snapshots"]=this["webpackJsonppm-node-attrs-yjs-snapshots"]||[]).push([[0],{298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r,i,o,a,s,c=n(0),l=n(77),u=n(96),d=n(29),h=n(23),f=n(133),p=n(32),v=n(24),g=n(9),m=function(e){var t=e.className;return Object(g.jsx)(b,{className:t,children:Object(g.jsx)(y,{children:Object(g.jsx)(j,{to:"/",exact:!0,activeClassName:"current",children:"Front page"})})})},b=v.a.div(r||(r=Object(h.a)(["\n  background: var(--color-primary);\n  box-shadow: 0 0 2px 2px rgba(0,0,0,0.18);\n  padding: 1rem;\n"]))),y=v.a.nav(i||(i=Object(h.a)(["\n  align-items: center;\n  color: #fff;\n  display: flex;\n"]))),j=Object(v.a)(u.b)(o||(o=Object(h.a)(["\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  transition: 0.2s hover;\n  &:hover {\n    text-decoration: underline;\n  }\n  &.current {\n    font-weight: 600;\n  }\n"]))),w=["component"],O=function(e){var t,n=e.component,r=Object(f.a)(e,w);return Object(g.jsx)(d.b,Object(p.a)(Object(p.a)({},r),{},{render:(t=n,function(e){return Object(g.jsxs)(_,{children:[Object(g.jsx)(m,Object(p.a)({},e)),Object(g.jsx)(x,{children:Object(g.jsx)(t,Object(p.a)({},e))})]})})}))},_=v.a.div(a||(a=Object(h.a)(["\n  min-height: 100vh;\n"]))),x=v.a.main(s||(s=Object(h.a)(["\n  margin: 40px auto 0 auto;\n  max-width: 800px;\n  padding-bottom: 20px;\n  @media only screen and (max-width: 720px) {\n    margin: 40px 20px 0 20px;\n    padding-bottom: 20px;\n  }\n"]))),k=n(172),S=n(87),M=n(1),D=n(3),A=n(4),E=function(){function e(){Object(M.a)(this,e),this._view=void 0}return Object(D.a)(e,[{key:"init",value:function(e){this._view=e}},{key:"view",get:function(){if(!this._view)throw Error("EditorViewProvider view accessed without EditorView instance");return this._view}},{key:"execCommand",value:function(e){e(this.view.state,this.view.dispatch),this.focus()}},{key:"focus",value:function(){return!(!this._view||this._view.hasFocus())&&(this._view.focus(),this._view.dispatch(this._view.state.tr.scrollIntoView()),!0)}},{key:"stateToJSON",value:function(){var e=this.view.state.toJSON();return Object(p.a)(Object(p.a)({},e),{},{plugins:[]})}},{key:"hydrateStateFromJSON",value:function(e){var t=A.b.fromJSON({schema:this.view.state.schema,plugins:this.view.state.plugins},e);this.view.updateState(t),this.view.dispatch(this.view.state.tr)}},{key:"replaceState",value:function(e){this.view.updateState(e),this.view.dispatch(this.view.state.tr)}}]),e}(),V=n(7),C=n(14),P=new C.d("y-sync"),N=new C.d("y-undo"),T=new C.d("yjs-cursor"),F=function(){function e(){Object(M.a)(this,e),this._observers=new Map}return Object(D.a)(e,[{key:"on",value:function(e,t){var n=this._observers.get(e);n?this._observers.set(e,new Set(n.add(t))):this._observers.set(e,new Set([t]))}},{key:"off",value:function(e,t){var n=this._observers.get(e);n&&(n.delete(t),0===n.size&&this._observers.delete(e))}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Array.from((this._observers.get(e)||new Set).values()).forEach((function(e){return e.apply(void 0,n)}))}},{key:"destroy",value:function(){this._observers=new Map}}]),e}();var I,U,z,R,L=function(){function e(t,n){var r=this;Object(M.a)(this,e),this._observable=new F,this.viewProvider=void 0,this.yjsProvider=void 0,this.snapshots=new V.a,this.selectedSnapshot=null,this.viewProvider=t,this.yjsProvider=n,n.onInit((function(){var e=r;n.ydoc.getArray("pm-doc-versions").observe((function t(){e.updateVersions(),n.ydoc.getArray("pm-doc-versions").unobserve(t)}))}))}return Object(D.a)(e,[{key:"state",get:function(){return{snapshots:this.snapshots,selectedSnapshot:this.selectedSnapshot}}},{key:"updateVersions",value:function(){var e=this.yjsProvider.ydoc.getArray("pm-doc-versions");this.snapshots=e,this._observable.emit("update",this.state)}},{key:"createSnapshot",value:function(){var e=this.yjsProvider.ydoc,t=e.getArray("pm-doc-versions"),n=0===t.length?null:t.get(t.length-1);console.info(n);var r,i,o=null===n?V.x:V.w(n.snapshot),a=V.G(e);if(console.info("created snapshot",a),null!=n){var s=o.sv.get(n.clientID);if(!s)throw Error("Yjs prevVersionID was undefined!");o.sv.set(n.clientID,s+1)}V.B(o,a)||(t.push([(r=a,i=e.clientID,{date:(new Date).getTime(),snapshot:V.y(r),clientID:i})]),this.updateVersions())}},{key:"inspectSnapshot",value:function(e){var t;if(console.log("snap",e),!e||(null===(t=this.selectedSnapshot)||void 0===t?void 0:t.date)===e.date)return this.resumeEditing();var n=this.yjsProvider.ydoc.getArray("pm-doc-versions"),r=V.w(e.snapshot);console.log("inspect snapshot",r);var i=V.x,o=!1;n.forEach((function(t){t.date===e.date?o=!0:o||(i=V.w(t.snapshot))}));var a=P.getState(this.viewProvider.view.state).binding;a&&a.renderSnapshot(r,i),this.selectedSnapshot=e,this._observable.emit("update",this.state)}},{key:"deleteSnapshot",value:function(e){var t=this,n=this.yjsProvider.ydoc.getArray("pm-doc-versions");n.forEach((function(r,i){r.date===e.date&&(n.delete(i),t._observable.emit("update",t.state))}))}},{key:"resumeEditing",value:function(){var e=P.getState(this.viewProvider.view.state).binding;e&&e.unrenderSnapshot(),this.selectedSnapshot=null,this._observable.emit("update",this.state)}},{key:"onUpdate",value:function(e){this._observable.on("update",e)}},{key:"offUpdate",value:function(e){this._observable.off("update",e)}}]),e}(),B=n(163),X=[{username:"Alice",color:"#ecd444",lightColor:"#ecd44433"},{username:"Bob",color:"#ee6352",lightColor:"#ee635233"},{username:"Max",color:"#6eeb83",lightColor:"#6eeb8333"}],q=function(){function e(t){Object(M.a)(this,e),this._observable=new F,this.viewProvider=void 0,this._ydoc=void 0,this._permanentUserData=void 0,this._provider=void 0,this._yXmlFragment=void 0,this.viewProvider=t}return Object(D.a)(e,[{key:"ydoc",get:function(){if(!this._ydoc)throw Error("YjsProvider ydoc accessed without initialization!");return this._ydoc}},{key:"provider",get:function(){if(!this._provider)throw Error("YjsProvider provider accessed without initialization!");return this._provider}},{key:"yXmlFragment",get:function(){return this._yXmlFragment||Error("YjsProvider yXmlFragment accessed without initialization!"),this._yXmlFragment}},{key:"permanentUserData",get:function(){return this._permanentUserData||Error("YjsProvider permanentUserData accessed without initialization!"),this._permanentUserData}},{key:"init",value:function(){this._ydoc=new V.e,this._permanentUserData=new V.g(this._ydoc);var e=X[Math.floor(3*Math.random())];this._permanentUserData.setUserMapping(this._ydoc,this._ydoc.clientID,e.username),this._ydoc.gc=!1,this._provider=new B.a("wss://demos.yjs.dev","prosemirror-versions-demo",this._ydoc),this._yXmlFragment=this._ydoc.getXmlFragment("pm-doc"),this._observable.emit("init")}},{key:"onInit",value:function(e){this._observable.on("init",e)}},{key:"offInit",value:function(e){this._observable.off("init",e)}}]),e}(),J=function(){var e=new E,t=new q(e);return{viewProvider:e,snapshotProvider:new L(e,t),yjsProvider:t}},Y=Object(c.createContext)(J()),H=function(){return Object(c.useContext)(Y)},W=[{title:"update-attribute",icon:Object(g.jsx)(S.a,{size:16})}];function G(e){var t=e.className,n=H().viewProvider;return Object(g.jsx)(K,{className:t,children:Object(g.jsx)(Q,{children:W.map((function(e){return Object(g.jsx)(Z,{children:Object(g.jsx)(ee,{onClick:function(){return function(e){switch(e){case"update-attribute":return void n.execCommand((function(e,t){var n,r=e.selection.head,i=e.doc.resolve(r).start(1)-1,o=e.doc.nodeAt(i);return n=(null===o||void 0===o?void 0:o.attrs.makeMeRed)?e.tr.setNodeMarkup(i,void 0,{makeMeRed:!1}):e.tr.setNodeMarkup(i,void 0,{makeMeRed:!0}),!!t&&(t(n),!0)}))}}(e.title)},children:e.icon})},e.title)}))})})}var $,K=v.a.div(I||(I=Object(h.a)(["\n  background: var(--color-primary-lighter);\n  padding: 1rem;\n"]))),Q=v.a.div(U||(U=Object(h.a)(["\n  align-items: center;\n  color: #fff;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Z=v.a.li(z||(z=Object(h.a)(["\n  & + & {\n    margin-left: 1rem;\n  }\n"]))),ee=v.a.button(R||(R=Object(h.a)(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  padding: 0.25rem;\n  &:hover {\n    background: rgba(255, 255, 255, 0.7);\n    opacity: 0.7;\n  }\n  &.active {\n    background: rgb(215 227 255);\n    box-shadow: 0 0 2px 2px rgb(0 0 0 / 18%);\n  }\n"])));function te(e){var t=e.className,n=H().snapshotProvider;return Object(g.jsx)(ce,{className:t,children:Object(g.jsx)("button",{onClick:function(){n.createSnapshot()},children:"Snapshot"})})}var ne,re,ie,oe,ae,se,ce=v.a.div($||($=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  button {\n    margin: 0.05rem;\n  }\n"]))),le=n(18);function ue(e){var t=e.className,n=Object(c.useState)(!0),r=Object(le.a)(n,2),i=r[0],o=r[1],a=H().snapshotProvider,s=function(){var e=H().snapshotProvider,t=Object(c.useState)(e.state),n=Object(le.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){var t=function(e){i(e)};return i(e.state),e.onUpdate(t),function(){e.offUpdate(t)}}),[e]),r}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(he,{children:[Object(g.jsxs)("button",{onClick:function(){return o(!i)},className:"header-btn",children:[Object(g.jsx)("span",{children:i?Object(g.jsx)(S.b,{size:16}):Object(g.jsx)(S.c,{size:16})}),Object(g.jsx)(fe,{children:"Snapshots"})]}),Object(g.jsx)("button",{className:"inspect-btn ".concat(s.selectedSnapshot?"":"hidden"),onClick:function(){a.resumeEditing()},children:"Stop inspecting"})]}),Object(g.jsx)(pe,{className:"".concat(t," ").concat(i?"":"hidden"),children:null===s||void 0===s?void 0:s.snapshots.map((function(e,t){return Object(g.jsxs)(ve,{children:[Object(g.jsxs)(ge,{children:[Object(g.jsxs)("h4",{children:["Snapshot ",t+1]}),Object(g.jsxs)(me,{children:[Object(g.jsx)("button",{onClick:function(){return function(e){a.inspectSnapshot(e)}(e)},children:"Inspect"}),Object(g.jsx)("button",{onClick:function(){return function(e){a.deleteSnapshot(e)}(e)},children:"Delete"})]})]}),Object(g.jsx)("small",{children:new Date(e.date).toLocaleString()})]},"".concat(e.date,"-").concat(t))}))})]})}var de,he=v.a.div(ne||(ne=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  margin: 1rem 0 0.5rem 0;\n  & > .header-btn {\n    align-items: center;\n    background: transparent;\n    border: 0;\n    cursor: pointer;\n    display: flex;\n    margin: 0;\n    padding: 0;\n  }\n  & > .inspect-btn {\n    margin-left: 1rem;\n  }\n  .hidden {\n    visibility: hidden;\n  }\n"]))),fe=v.a.h3(re||(re=Object(h.a)(["\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0 0 0 0.5rem;\n  text-transform: uppercase;\n"]))),pe=v.a.ul(ie||(ie=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 0;\n  max-height: 300px;\n  overflow-y: scroll;\n  padding: 0;\n  &.hidden {\n    display: none;\n    visibility: hidden;\n  }\n  & > li:nth-child(odd) {\n    background: #f3f3f3;\n  }\n"]))),ve=v.a.li(oe||(oe=Object(h.a)(["\n  border-radius: 2px;\n  padding: 0.25rem;\n"]))),ge=v.a.div(ae||(ae=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  & > h4 {\n    margin: 0;\n    margin-right: 1rem;\n  }\n"]))),me=v.a.div(se||(se=Object(h.a)(["\n  display: flex;\n  margin: 0.25rem 0;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"])));function be(){return Object(g.jsxs)(ye,{children:[Object(g.jsx)(te,{className:"changes-controls"}),Object(g.jsx)(ue,{})]})}var ye=v.a.div(de||(de=Object(h.a)([""]))),je=n(82),we=n(26),Oe=new(n(2).i)({nodes:{doc:{content:"block+"},paragraph:{attrs:{makeMeRed:{default:null}},content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:function(e){return["p",{style:e.attrs.makeMeRed?"background: red;":void 0},0]}},blockquote:{attrs:{makeMeRed:{default:null}},content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:function(e){return["blockquote",{style:e.attrs.makeMeRed?"background: red;":void 0},0]}},horizontal_rule:{group:"block",parseDOM:[{tag:"hr"}],toDOM:function(){return["hr"]}},heading:{attrs:{level:{default:1}},content:"inline*",group:"block",defining:!0,parseDOM:[{tag:"h1",attrs:{level:1}},{tag:"h2",attrs:{level:2}},{tag:"h3",attrs:{level:3}},{tag:"h4",attrs:{level:4}},{tag:"h5",attrs:{level:5}},{tag:"h6",attrs:{level:6}}],toDOM:function(e){return["h"+e.attrs.level,0]}},code_block:{content:"text*",marks:"",group:"block",code:!0,defining:!0,parseDOM:[{tag:"pre",preserveWhitespace:"full"}],toDOM:function(){return["pre",["code",0]]}},text:{group:"inline"},image:{inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,parseDOM:[{tag:"img[src]",getAttrs:function(e){var t=e;return{src:t.getAttribute("src"),title:t.getAttribute("title"),alt:t.getAttribute("alt")}}}],toDOM:function(e){var t=e.attrs;return["img",{src:t.src,alt:t.alt,title:t.title}]}},hard_break:{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:function(){return["br"]}}},marks:{link:{attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(e){var t=e;return{href:t.getAttribute("href"),title:t.getAttribute("title")}}}],toDOM:function(e){var t=e.attrs;return["a",{href:t.href,title:t.title},0]}},italic:{parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style=italic"}],toDOM:function(){return["em",0]}},bold:{parseDOM:[{tag:"strong"},{tag:"b",getAttrs:function(e){return"normal"!=e.style.fontWeight&&null}},{style:"font-weight",getAttrs:function(e){return/^(bold(er)?|[5-9]\d{2,})$/.test(e)&&null}}],toDOM:function(){return["strong",0]}},code:{parseDOM:[{tag:"code"}],toDOM:function(){return["code",0]}},strikethrough:{parseDOM:[{tag:"s"},{tag:"strike"},{style:"text-decoration=line-through"},{style:"text-decoration-line=line-through"}],toDOM:function(){return["s"]}},ychange:{attrs:{user:{default:null},type:{default:null},color:{default:null}},inclusive:!1,parseDOM:[{tag:"ychange"}],toDOM:function(e){return["ychange",{ychange_user:e.attrs.user,ychange_type:e.attrs.type,style:_e(e.attrs),ychange_color:e.attrs.color.light}].concat(Object(we.a)(xe(e.attrs,[0])))}}}}),_e=function(e){switch(e.type){case"removed":return"color:".concat(e.color.dark);case"added":return"background-color:".concat(e.color.light);case null:return""}},xe=function(e,t){return null===e?t:[["span",{class:"ychange-hover",style:"background-color:".concat(e.color.dark)},e.user||"Unknown"],["span"].concat(Object(we.a)(t))]},ke=n(173),Se=n(58),Me=n(169),De=n(8),Ae=n(17),Ee=n(62),Ve=n(98),Ce=n(171),Pe=n(99),Ne=n(71),Te=n(38),Fe=n(168),Ie=null,Ue=function(){var e=Ie;Ie=null,e.forEach((function(e,t){var n=t.state.tr;e.forEach((function(e,t){n.setMeta(t,e)})),t.dispatch(n)}))},ze=function(e,t,n){Ie||(Ie=new Map,Fe.a(0,Ue)),Te.c(Ie,e,Te.a).set(t,n)},Re=function(e,t,n){if(0===e)return V.u(t,0);for(var r=null===t._first?null:t._first.content.type;null!==r&&t!==r;){if(r instanceof V.n){if(r._length>=e)return V.u(r,e);if(e-=r._length,null!==r._item&&null!==r._item.next)r=r._item.next.content.type;else{do{r=null===r._item?null:r._item.parent,e--}while(r!==t&&null!==r&&null!==r._item&&null===r._item.next);null!==r&&r!==t&&(r=null===r._item?null:r._item.next.content.type)}}else{var i=(n.get(r)||{nodeSize:0}).nodeSize;if(null!==r._first&&e<i)r=r._first.content.type,e--;else{if(1===e&&0===r._length&&i>1)return new V.h(null===r._item?null:r._item.id,null===r._item?V.C(r):null,null);if(e-=i,null!==r._item&&null!==r._item.next)r=r._item.next.content.type;else{if(0===e)return r=null===r._item?r:r._item.parent,new V.h(null===r._item?null:r._item.id,null===r._item?V.C(r):null,null);do{r=r._item.parent,e--}while(r!==t&&null===r._item.next);r!==t&&(r=r._item.next.content.type)}}}if(null===r)throw Pe.b();if(0===e&&r.constructor!==V.n&&r!==t)return Le(r._item.parent,r._item)}return V.u(t,t._length)},Le=function(e,t){var n=null,r=null;return null===e._item?r=V.C(e):n=V.s(e._item.id.client,e._item.id.clock),new V.h(n,r,t.id)},Be=function(e,t,n,r){var i=V.q(n,e);if(null===i||i.type!==t&&!V.E(t,i.type._item))return null;var o=i.type,a=0;if(o.constructor===V.n)a=i.index;else if(null===o._item||!o._item.deleted){for(var s=o._first,c=0;c<o._length&&c<i.index&&null!==s;){if(!s.deleted){var l=s.content.type;c++,l instanceof V.n?a+=l._length:a+=r.get(l).nodeSize}s=s.right}a+=1}for(;o!==t&&null!==o._item;){var u=o._item.parent;if(null===u._item||!u._item.deleted){a+=1;for(var d=u._first;null!==d;){var h=d.content.type;if(h===o)break;d.deleted||(h instanceof V.n?a+=h._length:a+=r.get(h).nodeSize),d=d.right}}o=u}return a-1};var Xe,qe,Je=n(167),Ye=n(83),He=n(174),We=function(e,t){return void 0===t?!e.deleted:t.sv.has(e.id.client)&&t.sv.get(e.id.client)>e.id.clock&&!V.D(t.ds,e.id)},Ge=[{light:"#ecd44433",dark:"#ecd444"}],$e=function(e,t,n){if(!e.has(n)){if(e.size<t.length){var r=Ve.a();e.forEach((function(e){return r.add(e)})),t=t.filter((function(e){return!r.has(e)}))}e.set(n,Je.a(t))}return e.get(n)},Ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.colors,r=void 0===n?Ge:n,i=t.colorMapping,o=void 0===i?new Map:i,a=t.permanentUserData,s=void 0===a?null:a,c=!1,l=new C.c({props:{editable:function(e){var t=P.getState(e);return null==t.snapshot&&null==t.prevSnapshot}},key:P,state:{init:function(t,n){return{type:e,doc:e.doc,binding:null,snapshot:null,prevSnapshot:null,isChangeOrigin:!1,colors:r,colorMapping:o,permanentUserData:s}},apply:function(e,t){var n=e.getMeta(P);if(void 0!==n)for(var r in t=Object.assign({},t),n)t[r]=n[r];return t.isChangeOrigin=void 0!==n&&!!n.isChangeOrigin,null!==t.binding&&(void 0===n||null==n.snapshot&&null==n.prevSnapshot||setTimeout((function(){null==n.restore?t.binding._renderSnapshot(n.snapshot,n.prevSnapshot,t):(t.binding._renderSnapshot(n.snapshot,n.snapshot,t),delete t.restore,delete t.snapshot,delete t.prevSnapshot,t.binding._prosemirrorChanged(t.binding.prosemirrorView.state.doc))}),0)),t}},view:function(t){var n=new Ze(e,t);return setTimeout((function(){n._forceRerender(),t.dispatch(t.state.tr.setMeta(P,{binding:n}))}),0),{update:function(){var e=l.getState(t.state);null==e.snapshot&&null==e.prevSnapshot&&(c||null!==t.state.doc.content.findDiffStart(t.state.doc.type.createAndFill().content))&&(c=!0,n._prosemirrorChanged(t.state.doc))},destroy:function(){n.destroy()}}}});return l},Qe=function(e,t){return{anchor:Re(t.selection.anchor,e.type,e.mapping),head:Re(t.selection.head,e.type,e.mapping)}},Ze=function(){function e(t,n){var r=this;Object(M.a)(this,e),this.type=t,this.prosemirrorView=n,this.mux=Object(Me.a)(),this.mapping=new Map,this._observeFunction=this._typeChanged.bind(this),this.doc=t.doc,this.beforeTransactionSelection=null,this.beforeAllTransactions=function(){null===r.beforeTransactionSelection&&(r.beforeTransactionSelection=Qe(r,n.state))},this.afterAllTransactions=function(){r.beforeTransactionSelection=null},this.doc.on("beforeAllTransactions",this.beforeAllTransactions),this.doc.on("afterAllTransactions",this.afterAllTransactions),t.observeDeep(this._observeFunction),this._domSelectionInView=null}return Object(D.a)(e,[{key:"_isLocalCursorInView",value:function(){var e=this;return!!this.prosemirrorView.hasFocus()&&(Ye.a&&null===this._domSelectionInView&&(setTimeout((function(){e._domSelectionInView=null}),0),this._domSelectionInView=this._isDomSelectionInView()),this._domSelectionInView)}},{key:"_isDomSelectionInView",value:function(){var e=this.prosemirrorView._root.getSelection(),t=this.prosemirrorView._root.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset),0===t.getClientRects().length&&t.startContainer&&t.collapsed&&t.selectNodeContents(t.startContainer);var n=t.getBoundingClientRect(),r=He.a.documentElement;return n.bottom>=0&&n.right>=0&&n.left<=(window.innerWidth||r.clientWidth||0)&&n.top<=(window.innerHeight||r.clientHeight||0)}},{key:"renderSnapshot",value:function(e,t){t||(t=V.v(V.r(),new Map)),this.prosemirrorView.dispatch(this.prosemirrorView.state.tr.setMeta(P,{snapshot:e,prevSnapshot:t}))}},{key:"unrenderSnapshot",value:function(){var e=this;this.mapping=new Map,this.mux((function(){var t=e.type.toArray().map((function(t){return tt(t,e.prosemirrorView.state.schema,e.mapping)})).filter((function(e){return null!==e})),n=e.prosemirrorView.state.tr.replace(0,e.prosemirrorView.state.doc.content.size,new De.f(new De.a(t),0,0));n.setMeta(P,{snapshot:null,prevSnapshot:null}),e.prosemirrorView.dispatch(n)}))}},{key:"_forceRerender",value:function(){var e=this;this.mapping=new Map,this.mux((function(){var t=e.type.toArray().map((function(t){return tt(t,e.prosemirrorView.state.schema,e.mapping)})).filter((function(e){return null!==e})),n=e.prosemirrorView.state.tr.replace(0,e.prosemirrorView.state.doc.content.size,new De.f(new De.a(t),0,0));e.prosemirrorView.dispatch(n.setMeta(P,{isChangeOrigin:!0}))}))}},{key:"_renderSnapshot",value:function(e,t,n){var r=this;e||(e=V.G(this.doc)),this.mapping=new Map,this.mux((function(){r.doc.transact((function(i){var o=n.permanentUserData;o&&o.dss.forEach((function(e){V.F(i,e,(function(e){}))}));var a=function(e,t){var r="added"===e?o.getUserByClientId(t.client):o.getUserByDeletedId(t);return{user:r,type:e,color:$e(n.colorMapping,n.colors,r)}},s=V.H(r.type,new V.i(t.ds,e.sv)).map((function(n){return!n._item.deleted||We(n._item,e)||We(n._item,t)?tt(n,r.prosemirrorView.state.schema,new Map,e,t,a):null})).filter((function(e){return null!==e})),c=r.prosemirrorView.state.tr.replace(0,r.prosemirrorView.state.doc.content.size,new De.f(new De.a(s),0,0));r.prosemirrorView.dispatch(c.setMeta(P,{isChangeOrigin:!0}))}),P)}))}},{key:"_typeChanged",value:function(e,t){var n=this,r=P.getState(this.prosemirrorView.state);0!==e.length&&null==r.snapshot&&null==r.prevSnapshot?this.mux((function(){var e=function(e,t){return n.mapping.delete(t)};V.F(t,t.deleteSet,(function(e){return e.constructor===V.f&&n.mapping.delete(e.content.type)})),t.changed.forEach(e),t.changedParentTypes.forEach(e);var r=n.type.toArray().map((function(e){return et(e,n.prosemirrorView.state.schema,n.mapping)})).filter((function(e){return null!==e})),i=n.prosemirrorView.state.tr.replace(0,n.prosemirrorView.state.doc.content.size,new De.f(new De.a(r),0,0));!function(e,t,n){if(null!==t&&null!==t.anchor&&null!==t.head){var r=Be(n.doc,n.type,t.anchor,n.mapping),i=Be(n.doc,n.type,t.head,n.mapping);null!==r&&null!==i&&(e=e.setSelection(C.f.create(e.doc,r,i)))}}(i,n.beforeTransactionSelection,n),i=i.setMeta(P,{isChangeOrigin:!0}),null!==n.beforeTransactionSelection&&n._isLocalCursorInView()&&i.scrollIntoView(),n.prosemirrorView.dispatch(i)})):this.renderSnapshot(r.snapshot,r.prevSnapshot)}},{key:"_prosemirrorChanged",value:function(e){var t=this;this.mux((function(){t.doc.transact((function(){pt(t.doc,t.type,e,t.mapping),t.beforeTransactionSelection=Qe(t,t.prosemirrorView.state)}),P)}))}},{key:"destroy",value:function(){this.type.unobserveDeep(this._observeFunction),this.doc.off("beforeAllTransactions",this.beforeAllTransactions),this.doc.off("afterAllTransactions",this.afterAllTransactions)}}]),e}(),et=function(e,t,n,r,i,o){var a=n.get(e);if(void 0===a){if(e instanceof V.l)return tt(e,t,n,r,i,o);throw Pe.a()}return a},tt=function(e,t,n,r,i,o){var a=[],s=function(e){if(e.constructor===V.l){var s=et(e,t,n,r,i,o);null!==s&&a.push(s)}else{var c=nt(e,t,n,r,i,o);null!==c&&c.forEach((function(e){null!==e&&a.push(e)}))}};void 0===r||void 0===i?e.toArray().forEach(s):V.H(e,new V.i(i.ds,r.sv)).forEach(s);try{var c=e.getAttributes(r);void 0!==r&&(We(e._item,r)?We(e._item,i)||(c.ychange=o?o("added",e._item.id):{type:"added"}):c.ychange=o?o("removed",e._item.id):{type:"removed"});var l=t.node(e.nodeName,c,a);return n.set(e,l),l}catch(u){return e.doc.transact((function(t){e._item.delete(t)}),P),n.delete(e),null}},nt=function(e,t,n,r,i,o){var a=[],s=e.toDelta(r,i,o);try{for(var c=0;c<s.length;c++){var l=s[c],u=[];for(var d in l.attributes)u.push(t.mark(d,l.attributes[d]));a.push(t.text(l.insert,u))}}catch(h){return e.doc.transact((function(t){e._item.delete(t)}),P),null}return a},rt=function(e,t){var n=new V.l(e.type.name);for(var r in e.attrs){var i=e.attrs[r];null!==i&&"ychange"!==r&&n.setAttribute(r,i)}return n.insert(0,st(e).map((function(e){return it(e,t)}))),t.set(n,e),n},it=function(e,t){return e instanceof Array?function(e,t){var n=new V.n,r=e.map((function(e){return{insert:e.text,attributes:ft(e.marks)}}));return n.applyDelta(r),t.set(n,e),n}(e,t):rt(e,t)},ot=function(e){return"object"===typeof e&&null!==e},at=function e(t,n){for(var r=Object.keys(t).filter((function(e){return null!==t[e]})),i=r.length===Object.keys(n).filter((function(e){return null!==n[e]})).length,o=0;o<r.length&&i;o++){var a=r[o],s=t[a],c=n[a];i="ychange"===a||s===c||ot(s)&&ot(c)&&e(s,c)}return i},st=function(e){for(var t=e.content.content,n=[],r=0;r<t.length;r++){var i=t[r];if(i.isText){for(var o=[],a=t[r];r<t.length&&a.isText;a=t[++r])o.push(a);r--,n.push(o)}else n.push(i)}return n},ct=function(e,t){var n=e.toDelta();return n.length===t.length&&n.every((function(e,n){return e.insert===t[n].text&&Ee.c(e.attributes||{}).length===t[n].marks.length&&t[n].marks.every((function(t){return at(e.attributes[t.type.name]||{},t.attrs)}))}))},lt=function e(t,n){if(t instanceof V.l&&!(n instanceof Array)&&vt(t,n)){var r=st(n);return t._length===r.length&&at(t.getAttributes(),n.attrs)&&t.toArray().every((function(t,n){return e(t,r[n])}))}return t instanceof V.n&&n instanceof Array&&ct(t,n)},ut=function(e,t){return e===t||e instanceof Array&&t instanceof Array&&e.length===t.length&&e.every((function(e,n){return t[n]===e}))},dt=function(e,t,n){for(var r=e.toArray(),i=st(t),o=i.length,a=r.length,s=Ae.f(a,o),c=0,l=0,u=!1;c<s;c++){var d=r[c],h=i[c];if(ut(n.get(d),h))u=!0;else if(!lt(d,h))break}for(;c+l<s;l++){var f=r[a-l-1],p=i[o-l-1];if(ut(n.get(f),p))u=!0;else if(!lt(f,p))break}return{equalityFactor:c+l,foundMappedChild:u}},ht=function(e,t,n){n.set(e,t);var r=function(e){for(var t="",n=e._start,r={};null!==n;)n.deleted||(n.countable&&n.content instanceof V.c?t+=n.content.str:n.content instanceof V.b&&(r[n.content.key]=null)),n=n.right;return{str:t,nAttrs:r}}(e),i=r.nAttrs,o=r.str,a=t.map((function(e){return{insert:e.text,attributes:Object.assign({},i,ft(e.marks))}})),s=Object(Ce.a)(o,a.map((function(e){return e.insert})).join("")),c=s.insert,l=s.remove,u=s.index;e.delete(u,l),e.insert(u,c),e.applyDelta(a.map((function(e){return{retain:e.insert.length,attributes:e.attributes}})))},ft=function(e){var t={};return e.forEach((function(e){"ychange"!==e.type.name&&(t[e.type.name]=e.attrs)})),t},pt=function e(t,n,r,i){if(n instanceof V.l&&n.nodeName!==r.type.name)throw new Error("node name mismatch!");if(i.set(n,r),n instanceof V.l){var o=n.getAttributes(),a=r.attrs;for(var s in a)null!==a[s]?o[s]!==a[s]&&"ychange"!==s&&n.setAttribute(s,a[s]):n.removeAttribute(s);for(var c in o)void 0===a[c]&&n.removeAttribute(c)}for(var l=st(r),u=l.length,d=n.toArray(),h=d.length,f=Ae.f(u,h),p=0,v=0;p<f;p++){var g=d[p],m=l[p];if(!ut(i.get(g),m)){if(!lt(g,m))break;i.set(g,m)}}for(;v+p+1<f;v++){var b=d[h-v-1],y=l[u-v-1];if(!ut(i.get(b),y)){if(!lt(b,y))break;i.set(b,y)}}t.transact((function(){for(;h-p-v>0&&u-p-v>0;){var r=d[p],o=l[p],a=d[h-v-1],s=l[u-v-1];if(r instanceof V.n&&o instanceof Array)ct(r,o)||ht(r,o,i),p+=1;else{var c=r instanceof V.l&&vt(r,o),f=a instanceof V.l&&vt(a,s);if(c&&f){var g=dt(r,o,i),m=dt(a,s,i);g.foundMappedChild&&!m.foundMappedChild?f=!1:!g.foundMappedChild&&m.foundMappedChild||g.equalityFactor<m.equalityFactor?c=!1:f=!1}c?(e(t,r,o,i),p+=1):f?(e(t,a,s,i),v+=1):(n.delete(p,1),n.insert(p,[it(o,i)]),p+=1)}}var b=h-p-v;if(b>0&&n.delete(p,b),p+v<u){for(var y=[],j=p;j<u-v;j++)y.push(it(l[j],i));n.insert(p,y)}}),P)},vt=function(e,t){return!(t instanceof Array)&&e.nodeName===t.type.name},gt=(n(304),function(e){var t=document.createElement("span");t.classList.add("ProseMirror-yjs-cursor"),t.setAttribute("style","border-color: ".concat(e.color));var n=document.createElement("div");return n.setAttribute("style","background-color: ".concat(e.color)),n.insertBefore(document.createTextNode(e.name),null),t.insertBefore(n,null),t}),mt=/^#[0-9a-fA-F]{6}$/,bt=function(e,t,n){var r=P.getState(e),i=r.doc,o=[];return null!=r.snapshot||null!=r.prevSnapshot||null===r.binding?Ne.b.create(e.doc,[]):(t.getStates().forEach((function(t,a){if(a!==i.clientID&&null!=t.cursor){var s=t.user||{};null==s.color?s.color="#ffa500":mt.test(s.color)||console.warn("A user uses an unsupported color format",s),null==s.name&&(s.name="User: ".concat(a));var c=Be(i,r.type,V.t(t.cursor.anchor),r.binding.mapping),l=Be(i,r.type,V.t(t.cursor.head),r.binding.mapping);if(null!==c&&null!==l){var u=Ae.e(e.doc.content.size-1,0);c=Ae.f(c,u),l=Ae.f(l,u),o.push(Ne.a.widget(l,(function(){return n(s)}),{key:a+"",side:10}));var d=Ae.f(c,l),h=Ae.e(c,l);o.push(Ne.a.inline(d,h,{style:"background-color: ".concat(s.color,"70")},{inclusiveEnd:!0,inclusiveStart:!1}))}}})),Ne.b.create(e.doc,o))},yt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.cursorBuilder,r=void 0===n?gt:n,i=t.getSelection,o=void 0===i?function(e){return e.selection}:i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"cursor";return new C.c({key:T,state:{init:function(t,n){return bt(n,e,r)},apply:function(t,n,i,o){var a=P.getState(o),s=t.getMeta(T);return a&&a.isChangeOrigin||s&&s.awarenessUpdated?bt(o,e,r):n.map(t.mapping,t.doc)}},props:{decorations:function(e){return T.getState(e)}},view:function(t){var n=function(){t.docView&&ze(t,T,{awarenessUpdated:!0})},r=function(){var n=P.getState(t.state),r=e.getLocalState()||{};if(t.hasFocus()&&null!==n.binding){var i=o(t.state),s=Re(i.anchor,n.type,n.binding.mapping),c=Re(i.head,n.type,n.binding.mapping);null!=r.cursor&&V.p(V.t(r.cursor.anchor),s)&&V.p(V.t(r.cursor.head),c)||e.setLocalStateField(a,{anchor:s,head:c})}else null!=r.cursor&&null!==Be(n.doc,n.type,V.t(r.cursor.anchor),n.binding.mapping)&&e.setLocalStateField(a,null)};return e.on("change",n),t.dom.addEventListener("focusin",r),t.dom.addEventListener("focusout",r),{update:r,destroy:function(){t.dom.removeEventListener("focusin",r),t.dom.removeEventListener("focusout",r),e.off("change",n),e.setLocalStateField(a,null)}}}})},jt=function(e){var t=N.getState(e).undoManager;if(null!=t)return t.undo(),!0},wt=function(e){var t=N.getState(e).undoManager;if(null!=t)return t.redo(),!0},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.protectedNodes,n=void 0===t?new Set(["paragraph"]):t,r=e.trackedOrigins,i=void 0===r?[]:r;return new C.c({key:N,state:{init:function(e,t){var r=P.getState(t),o=new V.k(r.type,{trackedOrigins:new Set([P].concat(i)),deleteFilter:function(e){return!(e instanceof V.f)||!(e.content instanceof V.d)||!(e.content.type instanceof V.j||e.content.type instanceof V.l&&n.has(e.content.type.nodeName))||0===e.content.type._length}});return{undoManager:o,prevSel:null,hasUndoOps:o.undoStack.length>0,hasRedoOps:o.redoStack.length>0}},apply:function(e,t,n,r){var i=P.getState(r).binding,o=t.undoManager,a=o.undoStack.length>0,s=o.redoStack.length>0;return i?{undoManager:o,prevSel:Qe(i,n),hasUndoOps:a,hasRedoOps:s}:a!==t.hasUndoOps||s!==t.hasRedoOps?Object.assign({},t,{hasUndoOps:o.undoStack.length>0,hasRedoOps:o.redoStack.length>0}):t}},view:function(e){var t=P.getState(e.state),n=N.getState(e.state).undoManager;return n.on("stack-item-added",(function(n){var r=n.stackItem,i=t.binding;i&&r.meta.set(i,N.getState(e.state).prevSel)})),n.on("stack-item-popped",(function(e){var n=e.stackItem,r=t.binding;r&&(r.beforeTransactionSelection=n.meta.get(r)||r.beforeTransactionSelection)})),{destroy:function(){n.destroy()}}}})},_t=function(e){return[Ke(e.yjsProvider.yXmlFragment,{permanentUserData:e.yjsProvider.permanentUserData,colors:[{light:"#ecd44433",dark:"#ecd444"},{light:"#ee635233",dark:"#ee6352"},{light:"#6eeb8333",dark:"#6eeb83"}]}),yt(e.yjsProvider.provider.awareness),Ot(),Object(Se.b)({"Mod-z":jt,"Mod-y":wt,"Mod-Shift-z":wt})].concat(Object(ke.a)({schema:Oe,history:!1}))};n(298),n(299),n(300),n(301);function xt(e){var t=e.className,n=void 0===t?"":t,r=Object(c.useRef)(null),i=Object(c.useRef)(null),o=H();function a(t){if(i.current){var n=i.current.state.apply(t);i.current.updateState(n),e.onEdit&&e.onEdit(n)}}return Object(c.useLayoutEffect)((function(){o.yjsProvider.init();var t=function(e){return A.b.create({schema:Oe,plugins:_t(e)})}(o),n=r.current;return n&&(i.current=function(e,t){var n=new je.c({mount:e},{state:t,dispatchTransaction:a});window&&(window.editorView=n);return n}(n,t),o.viewProvider.init(i.current),e.onEditorReady&&(null===e||void 0===e||e.onEditorReady(o))),function(){var e;null===(e=i.current)||void 0===e||e.destroy()}}),[]),Object(g.jsx)("div",{id:"example-editor",ref:r,className:n})}function kt(){var e=Object(c.useMemo)((function(){return J()}),[]);return Object(g.jsx)(Y.Provider,{value:e,children:Object(g.jsx)("div",{children:Object(g.jsxs)(Mt,{children:[Object(g.jsxs)(Dt,{children:[Object(g.jsx)(G,{className:"toolbar 'full-width"}),Object(g.jsx)("div",{className:"pm-editor full-width",children:Object(g.jsx)(xt,{onEditorReady:function(e){Object(k.a)(e.viewProvider.view)}})})]}),Object(g.jsx)(be,{})]})})})}var St,Mt=v.a.div(Xe||(Xe=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto auto;\n  margin-top: 1rem;\n"]))),Dt=v.a.div(qe||(qe=Object(h.a)(["\n  margin-right: 1rem;\n"])));function At(){return Object(g.jsxs)(Et,{children:[Object(g.jsxs)("header",{children:[Object(g.jsx)("h1",{children:Object(g.jsx)("a",{href:"https://teemukoivisto.github.io/pm-node-attrs-yjs-snapshots/",children:"ProseMirror node attributes persistence with Yjs snapshots"})}),Object(g.jsx)("p",{children:"Somehow I can't get them to work"}),Object(g.jsx)("p",{children:Object(g.jsx)("a",{href:"https://github.com/TeemuKoivisto/pm-node-attrs-yjs-snapshots",children:"Github repo"})})]}),Object(g.jsx)(kt,{})]})}var Et=v.a.div(St||(St=Object(h.a)([""]))),Vt=function(){return Object(g.jsx)(u.a,{basename:"/pm-node-attrs-yjs-snapshots",children:Object(g.jsxs)(d.d,{children:[Object(g.jsx)(O,{exact:!0,path:"/",component:At}),Object(g.jsx)(d.a,{to:"/"})]})})};n(302);Object(l.render)(Object(g.jsx)(Vt,{}),document.getElementById("root"))}},[[303,1,2]]]);
//# sourceMappingURL=main.221b0c79.chunk.js.map