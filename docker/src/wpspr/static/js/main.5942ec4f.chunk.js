(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,a,e){},17:function(t,a,e){},19:function(t,a,e){},21:function(t,a,e){"use strict";e.r(a);var o=e(0),c=e.n(o),i=e(2),n=e.n(i),m=(e(15),e(3)),r=e(4),s=e(7),p=e(5),d=e(8);e(17),e(19);function l(t){return c.a.createElement(c.a.Fragment,null,t.data.filter(function(a){return a.type===t.ptype}).map(function(t){return c.a.createElement("div",{className:"card",key:t.id},c.a.createElement("a",{href:t.foto},c.a.createElement("img",{className:"card-img-top",src:t.foto,alt:""})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.name),c.a.createElement("div",{className:"card-text text-left"},c.a.createElement("p",null,t.location),c.a.createElement("p",null,t.contact),c.a.createElement("p",null,t.time))))}))}var g=e(6),f=function(t){function a(t){var e;return Object(m.a)(this,a),(e=Object(s.a)(this,Object(p.a)(a).call(this,t))).sstatet=function(){e.setState({ptype:"torg"})},e.sstatea=function(){e.setState({ptype:"apt"})},e.state={data:g,ptype:""},e}return Object(d.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement("button",{className:"btn btn-primary",onClick:this.sstatet},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b"),c.a.createElement("button",{className:"btn btn-primary",onClick:this.sstatea},"\u0410\u043f\u0442\u0435\u043a\u0438")),c.a.createElement("div",{className:" wraper"},c.a.createElement(l,{data:this.state.data,ptype:this.state.ptype})))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t){t.exports=[{id:"1",name:'"\u0410\u043f\u0435\u043a\u0441+" \u043d\u0430 \u0421\u043e\u043b\u0436\u0435\u043d\u0438\u0446\u044b\u043d\u0430',location:"\u0443\u043b. \u0421\u043e\u043b\u0436\u0435\u043d\u0438\u0446\u044b\u043d\u0430, 24/23",contact:"8 (863) 229-43-10",time:"8.00 - 23.45",foto:"/static/images/card/",type:"torg"},{id:"2",name:'"\u0410\u0441\u0441\u043e\u0440\u0442\u0438" \u043d\u0430 \u0416\u0443\u043a\u043e\u0432\u0430',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 36",contact:"",time:"\u041a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u043e",foto:"/static/images/card/2.jpg",type:"torg"},{id:"3",name:'"\u0410\u043f\u0435\u043a\u0441" \u043d\u0430 \u0416\u0434\u0430\u043d\u043e\u0432\u0430',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 11",contact:"",time:"7.00 - 23.45",foto:"/static/images/card/3.jpg",type:"torg"},{id:"4",name:'"\u0412\u0430\u0440\u043d\u0438\u0446\u0430" \u043d\u0430 \u0416\u0434\u0430\u043d\u043e\u0432\u0430',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 9",contact:"",time:"11.00 - 22.00",foto:"/static/images/card/4.jpg",type:"torg"},{id:"5",name:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d-\u0431\u0430\u0440 "\u0411\u0443\u0445\u0430\u0440\u0435\u0441\u0442"',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 36",contact:"8 951 494-17-77",time:"11.00 - 23.00",foto:"/static/images/card/5.jpg",type:"torg"},{id:"6",name:'\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0444\u0435\u0440\u043c\u0435\u0440\u0441\u043a\u0438\u0445 \n\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u042e\u0433\u0430"',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 13",contact:"",time:"8.00 - 20.00",foto:"/static/images/card/6.jpg",type:"torg"},{id:"7",name:'\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d "\u042e\u0436\u043d\u0430\u044f \u0437\u0430\u0440\u044f"',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430 30/95",contact:"",time:"10.00 - 22.00",foto:"/static/images/card/7.jpg",type:"torg"},{id:"8",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \n\u043d\u0430 \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"9",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\n\u043d\u0430 \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"10",name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\n\u043d\u0430 \u0415\u043b\u044f\u043d\u0430",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"11",name:'\u0413\u0438\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442 "\u041b\u0435\u043d\u0442\u0430"',location:"\u0443\u043b. \u0414\u043e\u0432\u0430\u0442\u043e\u0440\u0430, 267",contact:"8 800 700-41-11",time:"\u041a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u043e",foto:"/static/images/card/11.jpg",type:"torg"},{id:"12",name:'\u0413\u0438\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442 "\u041c\u0430\u0433\u043d\u0438\u0442"',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 18",contact:"8 800 200\u201190-02",time:"7.00 - 24.00",foto:"/static/images/card/12.jpg",type:"torg"},{id:"13",name:'\u0422\u0426 "\u041b\u0435\u0432\u0435\u043d\u0446\u043e\u0432\u0441\u043a\u0438\u0439',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 2/7",contact:"8 863 210-51-79\nleventsovsky.ru",time:"10.00 - 22.00",foto:"/static/images/card/13.jpg",type:"torg"},{id:"14",name:'\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u0445 \u0448\u0430\u0440\u043e\u0432 "\u041b\u0443\u0442\u0442\u0438"\n',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430 30/95",contact:"8 863 270\u201137-37\nlutti.ru",time:"10.00 - 20.00",foto:"/static/images/card/14.jpg",type:"torg"},{id:"15",name:"\u0426\u0432\u0435\u0442\u043e\u0447\u043d\u043e-\u0438\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\n",location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 36",contact:"8 989 701\u201190-45",time:"8.00 - 21.00",foto:"/static/images/card/15.jpg",type:"torg"},{id:"16",name:"\u0425\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\n\u043d\u0430 \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"17",name:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043d\u0446\u0435\u043b\u044f\u0440\u0438\u0438 \n1000 \u043c\u0435\u043b\u043e\u0447\u0435\u0439 \u043d\u0430 \u0415\u043b\u044f\u043d\u0430",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"18",name:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043d\u0430 \u0421\u043e\u043b\u0436\u0435\u043d\u0438\u0446\u044b\u043d\u0430",location:"",contact:"",time:"",foto:"/static/images/card/",type:"torg"},{id:"19",name:"\u0410\u0410\u0410-\u043c\u043e\u0442\u043e\u0440\u0441, \u043f\u0440\u043e\u0434\u0430\u0436\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439",location:"\u0443\u043b. \u0414\u043e\u0432\u0430\u0442\u043e\u0440\u0430, 259",contact:"8 863 306\u201100-10",time:"",foto:"/static/images/card/19.jpg",type:"torg"},{id:"20",name:"\u0410\u043f\u0442\u0435\u043a\u0430 \u2116 25",location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 30/95",contact:"8 863 229\u201196-07",time:"",foto:"/static/images/card/20.jpg",type:"apt"},{id:"21",name:'\u0410\u043f\u0442\u0435\u043a\u0430 "\u041f\u0447\u0435\u043b\u043a\u0430"',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 36/5",contact:"8 863 280\u201190-60",time:"",foto:"/static/images/card/21.jpg",type:"apt"},{id:"22",name:"\u0410\u043f\u0442\u0435\u043a\u0430 \u043d\u0430 \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e 101",location:"\u0443\u043b. \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e, 101",contact:"",time:"",foto:"/static/images/card/",type:"apt"},{id:"23",name:"\u0410\u043f\u0442\u0435\u043a\u0430 \u043d\u0430 \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e 94",location:"\u0443\u043b. \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e, 94",contact:"",time:"",foto:"/static/images/card/",type:"apt"},{id:"24",name:'\u0410\u043f\u0442\u0435\u043a\u0430 "\u0420\u0430\u0434\u0443\u0433\u0430"',location:"\u0443\u043b. \u0416\u0434\u0430\u043d\u043e\u0432\u0430, 18",contact:"",time:"",foto:"/static/images/card/",type:"apt"},{id:"25",name:'\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f "\u0410\u0444\u0438\u043d\u0430"',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 36/5",contact:"",time:"",foto:"/static/images/card/",type:"apt"},{id:"26",name:"\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0430 \xab\u0414\u043e\u043a\u0442\u043e\u0440 \u0416\u0443\u043a\u043e\u0432\xbb",location:"\u0443\u043b \u0416\u0443\u043a\u043e\u0432\u0430, 30/95",contact:"8 800 333\u201139-25\n8 863 294\u201160-08",time:"9.00 - 20.00",foto:"/static/images/card/",type:"apt"},{id:"27",name:'\u0412\u0435\u0442\u0435\u0440\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0430 "\u0414\u043e\u043a\u0442\u043e\u0440 \u0410\u0439\u0431\u043e\u043b\u0438\u0442"',location:"\u0443\u043b. \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e, 101",contact:"8 863 221-62-21",time:"9.00 - 21.00",foto:"/static/images/card/",type:"apt"},{id:"28",name:"\u041c\u0411\u0423\u0417 \u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f\n \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u2116 45, \u0444\u0438\u043b\u0438\u0430\u043b",location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 32",contact:"8 863 310\u201177-67, \n8 863 280\u201191-97\ndgp45.ru",time:"7.00 - 20.00 (\u0431\u0443\u0434\u043d\u0438)",foto:"/static/images/card/",type:"apt"},{id:"29",name:'\u041f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 "\u0410\u0432\u0435\u043d\u044e"',location:"\u0443\u043b. \u0416\u0443\u043a\u043e\u0432\u0430, 23",contact:"8 863 320-03-81",time:"9.00 - 20.00 (\u0431\u0443\u0434\u043d\u0438)",foto:"/static/images/card/",type:"apt"},{id:"30",name:"\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u043a\u043b\u0438\u043d\u0438\u043a\u0430 \u211642",location:"\u0443\u043b. \u0415\u0440\u0435\u043c\u0435\u043d\u043a\u043e, 60/5",contact:"8 863 225-06-76 (\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430)",time:"",foto:"/static/images/card/",type:"apt"}]},9:function(t,a,e){t.exports=e(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.5942ec4f.chunk.js.map