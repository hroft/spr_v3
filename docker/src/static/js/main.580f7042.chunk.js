(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),s=(a(14),a(3)),i=a(4),l=a(6),m=a(5),p=a(7);a(16),a(18);function u(t){return r.a.createElement(r.a.Fragment,null,t.data.filter(function(e){return e.type===t.ptype}).map(function(t){return r.a.createElement("div",{className:"card",key:t.id},r.a.createElement("img",{className:"card-img-top",src:"/static/images/card/"+t.foto}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("div",{className:"card-text text-left"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-map-marker"})," ",t.location),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-info-circle"}),t.contact),r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-clock"}),t.time)),r.a.createElement("a",{href:"https://levencovka.ru/?p="+t.more,className:t.more?"btn btn-success active":"btn btn-success disabled"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")))}))}var d=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={data:[],ptype:""},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("/data/data.json").then(function(t){return t.json()}).then(function(e){return t.setState({data:e})}),this.setState({ptype:localStorage.getItem("spr_ptype")})}},{key:"componentDidUpdate",value:function(t,e){localStorage.setItem("spr_ptype",this.state.ptype)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("div",{className:"button_wraper"},r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"torg"})}},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b, \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0446\u0435\u043d\u0442\u0440\u044b"),r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"apt"})}},"\u0410\u043f\u0442\u0435\u043a\u0438, \u0437\u0434\u0440\u0430\u0432\u043e\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435"),r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"rem"})}},"\u0420\u0435\u043c\u043e\u043d\u0442\u043d\u044b\u0435 \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0435, \u043f\u0440\u043e\u0447\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"),r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"obr"})}},"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430"),r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"kr"})}},"\u0421\u0430\u043b\u043e\u043d\u044b \u043a\u0440\u0430\u0441\u043e\u0442\u044b, \u043f\u0440\u043e\u0447\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"),r.a.createElement("button",{id:"torg",className:"btn btn-primary",onClick:function(){return t.setState({ptype:"gkh"})}},"\u0416\u041a\u0425"))),r.a.createElement("div",{className:" wraper"},r.a.createElement(u,{data:this.state.data,ptype:this.state.ptype})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.580f7042.chunk.js.map