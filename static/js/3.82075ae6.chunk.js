(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[3],{100:function(t,e,a){"use strict";a.r(e);var n=a(30),c=a(31),o=a(33),i=a(32),r=a(0),s=a.n(r),l=a(8),m=a(29),u=a(3),p=a(101),_=a(86),C=a(87),f=a.n(C),d=function(){return s.a.createElement("div",{className:f.a.Wrp},s.a.createElement("div",{className:f.a.Popup},s.a.createElement("h3",{className:f.a.NotificationTitle},"Attention!"),s.a.createElement("p",{className:f.a.NotificationText},"This contact exist in list!")))},b=a(88),h=a.n(b),v=a(89),N=a.n(v),A=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:"",existingContact:!1,errorMessage:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(u.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,c=a.number;t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?t.showNotification("".concat(n," is already on the list!")):n&&c?t.props.onAddContact({name:n,number:c}):t.showNotification("You are trying to add an empty field!"),t.setState({name:"",number:""})},t.showNotification=function(){t.setState({existingContact:!0}),setTimeout((function(){return t.setState({existingContact:!1})}),2e3)},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number,n=t.existingContact;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{in:n,classNames:N.a,unmountOnExit:!0,timeout:250},s.a.createElement(d,null)),s.a.createElement("form",{className:h.a.ContactForm,onSubmit:this.handleSubmit},s.a.createElement("label",{className:h.a.ContactFormLabel},"Name",s.a.createElement("input",{className:h.a.ContactFormInput,onChange:this.handleChange,placeholder:"Enter name...",value:e,type:"text",name:"name",autoFocus:!0})),s.a.createElement("label",null,"Number",s.a.createElement(_.a,{className:h.a.ContactFormInput,format:"###-##-##",onChange:this.handleChange,placeholder:"Enter phone Number...",value:a,name:"number",mask:""})),s.a.createElement("button",{className:h.a.addButton,type:"submit"},"Add contact")))}}]),a}(r.Component),E={onAddContact:m.b.addContact},x=Object(l.b)((function(t){return{contacts:m.d.getContacts(t)}}),E)(A),g=a(102),y=a(90),F=a.n(y),S=Object(l.b)((function(t,e){return{contact:m.d.getContactById(t,e.id)}}),(function(t,e){return{onRemoveContact:function(){return t(m.b.deleteContact(e.id))}}}))((function(t){var e=t.contact,a=void 0===e?{}:e,n=t.onRemoveContact;return s.a.createElement("li",{className:F.a.ContactItem},a.name,": ",a.number,s.a.createElement("button",{className:F.a.ContactItemBtn,id:a.id,onClick:n},"\u2715"))})),L=a(91),O=a.n(L),j=a(92),I=a.n(j),T=Object(l.b)((function(t){return{contacts:m.d.getVisibleContacts(t)}}))((function(t){var e=t.contacts;return s.a.createElement("div",{className:I.a.ContactListWrp},s.a.createElement(g.a,{component:"ul",className:I.a.ContactList},e.length>0&&e.map((function(t){return s.a.createElement(p.a,{timeout:200,key:t.id,classNames:O.a},s.a.createElement(S,{key:t.id,id:t.id}))}))))})),B=a(93),k=a.n(B),w=a(94),W=a.n(w);function J(t){var e=t.title,a=t.children;return s.a.createElement("div",{className:k.a.AppWrapper},s.a.createElement(p.a,{in:!0,appear:!0,unmountOnExit:!0,classNames:W.a,timeout:2e3},s.a.createElement("h2",{ref:s.a.createRef()},e)),a)}var P=a(95),R=a.n(P),V=a(96),D=a.n(V),q={onChangeFilter:m.a.changeFilter},G=Object(l.b)((function(t){return{value:m.d.getFilter(t),contacts:m.d.getContacts(t)}}),q)((function(t){var e=t.contacts,a=t.value,n=t.onChangeFilter;return e.length>1&&s.a.createElement("label",{className:"label"},"Find contacts",s.a.createElement(p.a,{timeout:200,classNames:D.a},s.a.createElement("input",{className:R.a.Filter,type:"text",name:"filter",value:a,placeholder:"Search contact...",onChange:function(t){return n(t.target.value)}})))})),H=a(34),M=a.n(H),X=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return s.a.createElement("div",{className:M.a.AppWrapper},s.a.createElement("div",{className:M.a.AppContainer},s.a.createElement(J,{title:"Phonebook"},s.a.createElement(x,null)),s.a.createElement(J,{title:"Contacts"},s.a.createElement(G,null),this.props.isLoadingContact&&s.a.createElement("h1",{className:"loading-state"},"Loading..."),s.a.createElement(T,null))))}}]),a}(r.Component),Y={onFetchContacts:m.b.fetchContacts};e.default=Object(l.b)((function(t){return{isLoadingContact:m.d.getLoading(t)}}),Y)(X)},87:function(t,e,a){t.exports={Wrp:"Notification_Wrp__2pn13",Popup:"Notification_Popup__3LAaB",NotificationTitle:"Notification_NotificationTitle__6QARi",NotificationText:"Notification_NotificationText__1CTOV",NotificationBtn:"Notification_NotificationBtn__JV5VE"}},88:function(t,e,a){t.exports={ContactFormInput:"ContactForm_ContactFormInput__2LJJ4",ContactFormLabel:"ContactForm_ContactFormLabel__3cXqp",addButton:"ContactForm_addButton__2s9it"}},89:function(t,e,a){t.exports={enter:"AppearStyles_enter__3St1B",enterActive:"AppearStyles_enterActive__XWbbw",exit:"AppearStyles_exit__3NhCL",exitActive:"AppearStyles_exitActive__23iRZ"}},90:function(t,e,a){t.exports={ContactItem:"ContactItem_ContactItem__3xmB7",ContactItemBtn:"ContactItem_ContactItemBtn__2AeVb"}},91:function(t,e,a){t.exports={enter:"AppearStyles_enter__i69vI",enterActive:"AppearStyles_enterActive__2T6C4",exit:"AppearStyles_exit__1YG3j",exitActive:"AppearStyles_exitActive__3wwdC"}},92:function(t,e,a){t.exports={ContactListWrp:"ContactList_ContactListWrp__3ANpf",ContactList:"ContactList_ContactList__2IjUu",Text:"ContactList_Text__1qhi-"}},93:function(t,e,a){t.exports={AppWrapper:"Section_AppWrapper__1sba6"}},94:function(t,e,a){t.exports={appear:"AppearStyles_appear__Hij4D",appearActive:"AppearStyles_appearActive__2sloA"}},95:function(t,e,a){t.exports={Filter:"Filter_Filter__15v80"}},96:function(t,e,a){t.exports={enter:"AppearStyles_enter__EdICJ",enterActive:"AppearStyles_enterActive__1PDot",exit:"AppearStyles_exit__2THGk",exitActive:"AppearStyles_exitActive__2bOcp"}}}]);
//# sourceMappingURL=3.82075ae6.chunk.js.map