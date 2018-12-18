(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(14),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),p=function(e){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("p",{className:"brand-logo"},e.title))))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).cityRef=r.a.createRef(),a.countryRef=r.a.createRef(),a.answerSearch=function(e){e.preventDefault();var t={city:a.cityRef.current.value,country:a.countryRef.current.value};a.props.dataSearch(t),e.currentTarget.reset()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.answerSearch},r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("input",{ref:this.cityRef,id:"city",type:"text"}),r.a.createElement("label",{htmlFor:"city"},"City:")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("select",{ref:this.countryRef},r.a.createElement("option",{value:"",defaultValue:!0},"Choose a country:"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estado Unidos"),r.a.createElement("option",{value:"MX"},"M\xe9xico"),r.a.createElement("option",{value:"PE"},"Per\xfa")),r.a.createElement("label",{htmlFor:"country"},"Country:")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-2"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn-large yellow-accent-4",value:"Search..."}))))))}}]),t}(n.Component),h=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card-panel red darken-4 error"},e.message))))},d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).showResult=function(){var e=a.props.result,t=e.name,n=e.weather,c=e.main;if(!t||!n||!c)return null;var l="https://openweathermap.org/img/w/".concat(n[0].icon,".png"),o="".concat(t," Weather");return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"resultado col s12 m8 l6 offset-m2 offset-l3"},r.a.createElement("div",{className:"card-panel light-blue align-center"},r.a.createElement("span",{className:"white-text"},r.a.createElement("h2",null," Weather in ",t),r.a.createElement("p",{className:"temperatura"},"Now: ",(c.temp-273.15).toFixed(1),"\xb0C",r.a.createElement("img",{src:l,alt:o})),r.a.createElement("p",null,"Max. ",(c.temp_max-273.15).toFixed(1),"\xb0C"),r.a.createElement("p",null,"Min. ",(c.temp_min-273.15).toFixed(1),"\xb0C")))))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.result),r.a.createElement("div",{className:"container"},this.showResult())}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",request:{},result:{}},a.checkApi=function(){var e=a.state.request,t=e.city,n=e.country;if(!t||!n)return null;var r="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(n,"&appid=").concat("279fc114b5423b73a51f6eee4069e4bb");fetch(r).then(function(e){return e.json()}).then(function(e){a.setState({result:e})}).catch(function(e){console.log(e)})},a.dataSearch=function(e){""===e.city||""===e.country?a.setState({error:!0}):a.setState({request:e,error:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.request!==this.state.request&&this.checkApi()}},{key:"componentDidMount",value:function(){this.setState({error:!1})}},{key:"render",value:function(){var e,t=this.state.error,a=this.state.result.cod;return e=t?r.a.createElement(h,{message:"The fields can't be empty"}):"404"===a?r.a.createElement(h,{message:"City not found"}):r.a.createElement(d,{result:this.state.result}),r.a.createElement("div",{className:"app"},r.a.createElement(p,{title:"React weather"}),r.a.createElement(f,{dataSearch:this.dataSearch}),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.a0c1b54e.chunk.js.map