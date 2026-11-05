
(function(){var q=document.getElementById('q'),r=document.getElementById('results'),b=document.getElementById('mnav'),sel=-1;
if(b)b.onclick=function(){document.getElementById('links').classList.toggle('open')};
function hits(s){s=s.toLowerCase().trim();if(s.length<2)return[];var w=s.split(/\s+/),out=[];
for(var i=0;i<SEARCH.length;i++){var e=SEARCH[i],t=e.t.toLowerCase(),h=(t+' '+e.d).toLowerCase(),ok=true,n=0;
for(var j=0;j<w.length;j++){var p=h.indexOf(w[j]);if(p<0){ok=false;break}n+=t.indexOf(w[j])>=0?(t.indexOf(w[j])==0?0:1):3}
if(ok)out.push([n,t.length,e])}out.sort(function(a,b){return a[0]-b[0]||a[1]-b[1]});return out.slice(0,25).map(function(x){return x[2]})}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
q.oninput=function(){var h=hits(q.value);sel=-1;r.innerHTML=h.map(function(e){return'<a href="'+e.u+'">'+esc(e.t)+'<small>'+esc(e.k)+'</small></a>'}).join('');r.style.display=h.length?'block':'none'};
q.onkeydown=function(e){var a=r.querySelectorAll('a');if(!a.length)return;if(e.key=='ArrowDown'||e.key=='ArrowUp'){e.preventDefault();if(sel>=0)a[sel].classList.remove('sel');sel=(sel+(e.key=='ArrowDown'?1:a.length-1))%a.length;a[sel].classList.add('sel');a[sel].scrollIntoView({block:'nearest'})}else if(e.key=='Enter'){location.href=a[Math.max(sel,0)].getAttribute('href')}else if(e.key=='Escape'){r.style.display='none'}};
document.addEventListener('click',function(e){if(e.target!==q)r.style.display='none'});
})();
