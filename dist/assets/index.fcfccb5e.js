const e="@@wavesContext";function t(t,l){function n(e){const n=Object.assign({},l.value),o=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=o.ele;if(s){s.style.position="relative",s.style.overflow="hidden";const t=s.getBoundingClientRect();let l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(t.width,t.height)+"px",s.appendChild(l)),o.type){case"center":l.style.top=t.height/2-l.offsetHeight/2+"px",l.style.left=t.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(e.pageY-t.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(e.pageX-t.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=o.color,l.className="waves-ripple z-active",!1}}return t[e]?t[e].removeHandle=n:t[e]={removeHandle:n},n}var l={bind(e,l){e.addEventListener("click",t(e,l),!1)},update(l,n){l.removeEventListener("click",l[e].removeHandle,!1),l.addEventListener("click",t(l,n),!1)},unbind(t){t.removeEventListener("click",t[e].removeHandle,!1),t[e]=null,delete t[e]}};const n=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(n)),l.install=n;export{l as w};
