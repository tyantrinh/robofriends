(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),s=(n(36),n(38),n(13)),l=n(14),i=n(17),h=n(15),u=n(18),d=(n(40),function(e){e.robots;throw new Error("Error found")}),f=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=(n(212),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Error found"):this.props.children}}]),t}(r.Component),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.robots,r=(t.searchfield,n.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return n.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(f,{searchChange:this.onSearchChange}),a.a.createElement(b,null,a.a.createElement(m,null,a.a.createElement(d,{robots:r})))):a.a.createElement("h1",null,"Loading")}}]),t}(r.Component);c.a.render(a.a.createElement(p,null),document.getElementById("root"))},29:function(e,t,n){e.exports=n(214)},36:function(e,t,n){}},[[29,2,1]]]);
//# sourceMappingURL=main.bf36abc6.chunk.js.map