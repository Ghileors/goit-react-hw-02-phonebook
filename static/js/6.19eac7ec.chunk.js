(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[6],{99:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(30),r=a(31),o=a(33),i=a(32),s=a(0),c=a.n(s),m=a(8),u=a(7),p=a(34),h=a.n(p),d={container:{minHeight:"calc(100vh - 50px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#000"},form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,l=a.name,r=a.value;e.setState(Object(n.a)({},l,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return c.a.createElement("div",{style:d.container},c.a.createElement("h1",null,"Login page"),c.a.createElement("form",{onSubmit:this.handleSubmit,style:d.form,autoComplete:"off"},c.a.createElement("label",{style:d.label},"Email",c.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleChange,placeholder:"Enter your email",autoFocus:!0})),c.a.createElement("label",{style:d.label},"Password",c.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange,placeholder:"Enter your password"})),c.a.createElement("button",{className:h.a.LoginBtn,type:"submit"},"Login")))}}]),a}(s.Component),f={onLogin:u.a.logIn};t.default=Object(m.b)(null,f)(b)}}]);
//# sourceMappingURL=6.19eac7ec.chunk.js.map