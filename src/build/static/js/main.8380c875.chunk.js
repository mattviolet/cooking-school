(this["webpackJsonpmatts-cooking-school"]=this["webpackJsonpmatts-cooking-school"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/school_cover_picture_1.6198c1a1.jpg"},27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),o=(a(32),a(5)),s=a(6),i=a(8),m=a(7),u=(a(33),a(23)),d=a.n(u),v=(a(34),function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"bg-image"},c.a.createElement("img",{id:"cover-image",src:d.a})),c.a.createElement("div",{className:"bg-text"},c.a.createElement("h1",null,"Killian Street Cooking School"))))}),h=(a(35),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"hours"},c.a.createElement("div",{className:"hours-container"},c.a.createElement("h1",null,"School Hours"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Monday"),c.a.createElement("div",{className:"col"},"9AM - 7PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Tuesday"),c.a.createElement("div",{className:"col"},"9AM - 7PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Wednesday"),c.a.createElement("div",{className:"col"},"9AM - 7PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Thursday"),c.a.createElement("div",{className:"col"},"9AM - 7PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Friday"),c.a.createElement("div",{className:"col"},"9AM - 7PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Saturday"),c.a.createElement("div",{className:"col"},"9AM - 9PM")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Sunday"),c.a.createElement("div",{className:"col"},"9AM - 9PM"))))}}]),a}(n.Component)),E=(a(36),a(51)),p=a(52),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"reviews"},c.a.createElement("div",{className:"reviews-container"},c.a.createElement("h1",null,"Reviews"),c.a.createElement(E.a,null,c.a.createElement(p.a,null,"I had the best time ever at Matt's! I will definitely be back!"),c.a.createElement(p.a,null,"My wife and I never cook. Matt made it easy for us to learn and have fun, not to mention it tasted great!"))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,"Copy Right 2020 Killian Street Cooking School")}}]),a}(n.Component),N=(a(37),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Home"},c.a.createElement(v,null),c.a.createElement("button",{onClick:function(){e.props.history.push("/courses")}},"Click to see classes!"),c.a.createElement(h,null),c.a.createElement(f,null),c.a.createElement(b,null))}}]),a}(n.Component)),j=(a(38),a(17)),O=a.n(j),y=a(24),k=(a(40),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"course-container"},c.a.createElement("div",{className:"title-section"},c.a.createElement("h3",null,this.props.name),c.a.createElement("p",null,"$",this.props.price)),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,this.props.description)),c.a.createElement("div",{className:"other-info"},c.a.createElement("div",null,this.props.location),c.a.createElement("div",null,this.props.seatsLeft," seats left"),c.a.createElement("div",null,this.props.date)))}}]),a}(n.Component)),w=(a(41),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={courses:[],visible:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/courses",e.next=3,fetch("http://localhost:5000/courses");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({courses:a}),console.log(a);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"courses-container"},c.a.createElement("h1",null,"Current Classes"),c.a.createElement("div",{className:"courses"},this.state.courses.map((function(e,t){return c.a.createElement(k,{key:e.id,name:e.name,price:e.price,location:e.location,description:e.description,seatsLeft:e.seats_left,date:e.date})}))),c.a.createElement("button",{onClick:function(){e.props.history.push("/")}},"Click here to go back home"))}}]),a}(n.Component)),M=a(16),g=a(2),C=a(26),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={apiResponse:""},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(M.a,null,c.a.createElement(C.a,null,c.a.createElement(g.a,{path:"/",exact:!0,component:N}),c.a.createElement(g.a,{path:"/courses",exact:!0,component:w})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8380c875.chunk.js.map