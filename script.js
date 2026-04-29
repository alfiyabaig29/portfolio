// cursor
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function l(){rx+=(mx-rx)*.11;ry+=(my-ry)*.11;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(l)})();

// nav show
const nav=document.getElementById('nav');
const land=document.getElementById('landing');
const nls=document.querySelectorAll('.nav-ul a');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('show',window.scrollY>land.offsetHeight*.55);
  let c='';
  document.querySelectorAll('[id]').forEach(s=>{if(window.scrollY>=s.offsetTop-160)c=s.id});
  nls.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+c));
});

// reveal
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));