(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),s=a.n(l),i=(a(20),a(12)),r=a(9),c=a(10),m=a(2),u=a(14),d=a(13),p=(a(21),a(22),a(7)),h=a(11);var v=function(e){var t=new Date,a=" - "+(t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()),n=e.items.map((function(t){return o.a.createElement("div",{className:"list",key:t.key},o.a.createElement("p",null,o.a.createElement(p.a,{className:"faIcons-calendar",icon:"calendar-alt"}),o.a.createElement("input",{type:"text",id:t.key,value:t.text,onChange:function(a){e.setUpdate(a.target.value,t.key)}}),o.a.createElement("span",null,o.a.createElement("p",{className:"date"},a)),o.a.createElement("span",null,o.a.createElement(p.a,{className:"faIcons",onClick:function(){e.deleteToDoItem(t.key)},icon:"times"}))))}));return o.a.createElement("div",null,o.a.createElement(h.a,{staggerDelayBy:150,appearAnimation:"accordionVertical",enterAnimation:"fade",leaveAnimation:"fade"},n))},f=a(4),b=a(5);f.b.add(b.b,b.a);var y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},n.addTodoItem=n.addTodoItem.bind(Object(m.a)(n)),n.toDohandleInput=n.toDohandleInput.bind(Object(m.a)(n)),n.deleteToDoItem=n.deleteToDoItem.bind(Object(m.a)(n)),n.setUpdate=n.setUpdate.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"addTodoItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var a=[].concat(Object(i.a)(this.state.items),[t]);this.setState({items:a,currentItem:{text:"",key:""}})}}},{key:"toDohandleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"deleteToDoItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){console.log("items:"+this.state.items);var a=this.state.items;a.map((function(a){a.key===t&&(console.log(a.key+"    "+t),a.text=e)})),this.setState({items:a})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("div",{className:"todotext"},"Write your",o.a.createElement("br",null),o.a.createElement("span",null,"To do list")),o.a.createElement("form",{id:"form-to-do",onSubmit:this.addTodoItem},o.a.createElement("input",{type:"text",placeholder:"Enter your task",value:this.state.currentItem.text,onChange:this.toDohandleInput}),o.a.createElement("button",{className:"submit-button",type:"submit"},"Add"),o.a.createElement("button",{className:"clear-button",type:"submit",onClick:this.deleteToDoItem},"Clear"))),o.a.createElement("div",{className:"bottom"},o.a.createElement("p",null,this.state.items.text),o.a.createElement(v,{items:this.state.items,deleteToDoItem:this.deleteToDoItem,setUpdate:this.setUpdate})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.9ee5ffc5.chunk.js.map