(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(65)},28:function(e,a,t){},32:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),i=(t(28),t(30),t(32),t(2)),o=t(6),s=t.n(o);t(56);function d(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.date.getDay()],t=e.date.getHours();t<10&&(t="0".concat(t));var n=e.date.getMinutes();return n<10&&(n="0".concat(n)),c.a.createElement("div",null,a," ",t,":",n)}var m=t(19),u=t.n(m);function E(e){return c.a.createElement(u.a,{icon:{"01d":"CLEAR_DAY","01n":"CLEAR_NIGHT","02d":"PARTLY_CLOUDY_DAY","02n":"PARTLY_CLOUDY_NIGHT","03d":"PARTLY_CLOUDY_DAY","03n":"PARTLY_CLOUDY_NIGHT","04d":"CLOUDY","04n":"CLOUDY","09d":"RAIN","09n":"RAIN","10d":"RAIN","10n":"RAIN","11d":"CLEAR_NIGHT","11n":"CLEAR_NIGHT","13d":"SNOW","13n":"SNOW","50d":"FOG","50n":"FOG"}[e.code],color:"#1e1e1e",size:e.size,animate:!0})}function p(e){var a=Object(n.useState)("celsuis"),t=Object(i.a)(a,2),r=t[0],l=t[1];return"celsuis"===r?c.a.createElement("div",{className:"WeatherTemperature"},c.a.createElement("span",{className:"temperature"},Math.round(e.celsuis)),c.a.createElement("span",{className:"unit"},"\xb0C|",c.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),l("fahrenheit")}},"\xb0F"))):c.a.createElement("div",{className:"WeatherTemperature"},c.a.createElement("span",{className:"temperature"},Math.round(function(){return 9*e.celsuis/5+32})),c.a.createElement("span",{className:"unit"},c.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),l("celsuis")}},"\xb0C"),"","|\xb0F"))}function f(e){return c.a.createElement("div",{className:"WeatherInfo"},c.a.createElement("h1",null,e.data.city),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d,{date:e.data.date})),c.a.createElement("li",{className:"text-capitalize"},e.data.description)),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"float-left"},c.a.createElement(E,{code:e.data.icon,size:52})),c.a.createElement("div",{className:"float-left"},c.a.createElement(p,{celsuis:e.data.temperature})))),c.a.createElement("div",{className:"col-6"},c.a.createElement("ul",null,c.a.createElement("li",null,"Humidity: ",e.data.humidity,"%"),c.a.createElement("li",null,"Wind: ",e.data.wind,"km/h")))))}t(63);function h(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"WeatherForecast-day"},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e.data.dt).getDay()]),c.a.createElement(E,{code:e.data.weather[0].icon,size:36}),c.a.createElement("div",{className:"WeatherForecast-temperatures"},c.a.createElement("span",{className:"WeatherForecat-temperature-max"},function(){var a=Math.round(e.data.temp.max);return"".concat(a,"\xb0")}()),c.a.createElement("span",{className:"WeatherForecat-temperature-min"},function(){var a=Math.round(e.data.temp.min);return"".concat(a,"\xb0")}())))}function v(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),m=d[0],u=d[1];if(Object(n.useEffect)(function(){l(!1)},[e.coordinates]),r)return console.log(m),c.a.createElement("div",{className:"WeatherForecast"},c.a.createElement("div",{className:"row"},m.map(function(e,a){return a<6?c.a.createElement("div",{className:"col",key:a},c.a.createElement(h,{data:e})):null})));var E=e.coordinates.lon,p=e.coordinates.lat,f="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(p,"&lon=").concat(E,"&appid=").concat("0f8c88146a435b8db9d6af1cacbbc02a","&units=metric");return s.a.get(f).then(function(e){u(e.data.daily),l(!0)}),null}function N(e){var a=Object(n.useState)(e.defaultCity),t=Object(i.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)({ready:!1}),d=Object(i.a)(o,2),m=d[0],u=d[1];function E(e){u({ready:!0,coordinates:e.data.coord,temperature:e.data.main.temp,humidity:e.data.main.humidity,date:new Date(1e3*e.data.dt),description:e.data.weather[0].description,icon:e.data.weather[0].icon,wind:e.data.wind.speed,city:e.data.name})}function p(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=").concat("0f8c88146a435b8db9d6af1cacbbc02a","&units=metric");s.a.get(e).then(E)}return m.ready?c.a.createElement("div",{className:"Weather"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p()}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("input",{type:"search",placeholder:"Enter a city...",className:"form-control",autoFocus:"on",onChange:function(e){l(e.target.value)}})),c.a.createElement("div",{className:"col-3"},c.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary w-100"})))),c.a.createElement(f,{data:m}),c.a.createElement(v,{coordinates:m.coordinates})):(p(),"Loading...")}function b(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{class:"container"},c.a.createElement(N,{defaultCity:"Lagos"}),c.a.createElement("footer",null,"This project was coded by Benita Anawonah and is "," ",c.a.createElement("a",{href:"https://github.com/benitaanawonah/react-weather-app",target:"_blank",rel:"noopener noreferrer"},"open-sourced on Github"))))}var y=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,66)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null))),y()}},[[20,3,2]]]);
//# sourceMappingURL=main.e2ead269.chunk.js.map