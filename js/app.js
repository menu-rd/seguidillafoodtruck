let adm=false;
const EMJ={"e_sand": "🥪", "e_batida": "🥤", "e_quesa": "🫓", "e_burrito": "🌯", "e_hotdog": "🌭", "e_salad": "🥗", "e_pierna": "🥩", "e_pollo": "🍗", "e_jugo": "🧃", "e_refresco": "🥤"};
for(const k in EMJ)IM[k]="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#241E0A"/><text x="100" y="128" font-size="96" text-anchor="middle">'+EMJ[k]+'</text></svg>');
function KS(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}
function PIMG(p){return IM["i_"+KS(p[0])]||IM[p[2]]||IM.ph}
const PROTM={n:"PROTEÍNA",min:1,max:1,o:[["Pollo",0],["Res",0]]};
const C=[
["Yaroa y Salchipapas", "Seguidilla Food Truck", [["Yaroa de Papas", 200, "yaroa_c", "Yaroa de papas. Elige el tamaño.", [{"n": "TAMAÑO", "min": 1, "max": 1, "o": [["Pequeña – RD$ 200", 0], ["Mediana – RD$ 250", 50], ["Grande – RD$ 400", 200]]}]], ["Yaroa de Plátano", 225, "yaroa_c", "Yaroa de plátano. Elige el tamaño.", [{"n": "TAMAÑO", "min": 1, "max": 1, "o": [["Pequeña – RD$ 225", 0], ["Mediana – RD$ 275", 50], ["Grande – RD$ 425", 200]]}]], ["Salchipapas", 175, "yaroa_c", "Papas fritas con salchichas. Elige el tamaño.", [{"n": "TAMAÑO", "min": 1, "max": 1, "o": [["Pequeña – RD$ 175", 0], ["Mediana – RD$ 225", 50], ["Grande – RD$ 325", 150]]}]]]],
["Chimis", "Seguidilla Food Truck", [["Chimi Normal Pan Redondo", 100, "chimi_c", "Chimi normal en pan redondo.", []], ["Chimi Vieja Escuela", 150, "chimi_c", "Pan de agua y repollo crudo.", []], ["Chimi Doble Carne y Queso", 150, "chimi_c", "Doble carne y queso.", []], ["Chimi con Papas", 175, "chimi_c", "Chimi con papas.", []], ["Chimi de Pierna", 200, "chimi_c", "Pan de agua y queso.", []], ["Pica Pierna en Plato", 350, "chimi_c", "Pierna desmechada con queso danés.", []]]],
["Hamburguesas", "Seguidilla Food Truck", [["Hamburguesa Clásica", 250, "burger_c", "Hamburguesa clásica.", []], ["Hamburguesa Suprema", 350, "burger_c", "Carne, bacon y queso.", []], ["Hamburguesa Suprema Doble", 450, "burger_c", "Doble carne, bacon y queso.", []], ["Hamburguesa Full Queso", 400, "burger_c", "Triple queso.", []]]],
["Variedades", "Seguidilla Food Truck", [["Quesadilla con Papas", 250, "e_quesa", "Quesadilla acompañada de papas.", []], ["Quesadilla con Papas Suprema", 400, "e_quesa", "Quesadilla suprema acompañada de papas.", []], ["Burrito Clásico", 300, "e_burrito", "Burrito clásico.", []], ["Burrito Supremo", 350, "e_burrito", "Burrito supremo.", []], ["Club Sándwich Clásico", 300, "e_sand", "Club sándwich clásico.", []], ["Club Sándwich Supremo", 350, "e_sand", "Club sándwich supremo.", []], ["Ensalada César", 350, "e_salad", "Ensalada César.", []], ["Hot Dog Original", 100, "e_hotdog", "Hot dog original.", []], ["Hot Dog con Papas", 150, "e_hotdog", "Hot dog con papas.", []], ["Hot Dog Supremo", 300, "e_hotdog", "Hot dog supremo.", []], ["Pica Pierna", 275, "e_pierna", "Pica pierna.", []], ["Pechuga a la Plancha", 400, "e_pollo", "Pechuga a la plancha.", []], ["Pechuga a la Crema", 350, "e_pollo", "Pechuga a la crema.", []], ["Alitas Picantes", 300, "e_pollo", "Alitas picantes. Elige el tamaño.", [{"n": "TAMAÑO", "min": 1, "max": 1, "o": [["Mediana – RD$ 300", 0], ["Grande – RD$ 450", 150]]}]]]],
["Mofongos", "Seguidilla Food Truck", [["Mofongo con Camarones a la Crema", 700, "mofongo_c", "Mofongo con camarones a la crema.", []], ["Mofongo con Pechuga a la Crema", 500, "mofongo_c", "Mofongo con pechuga a la crema.", []], ["Mofongo Mixto", 450, "mofongo_c", "Pierna, alita y embutidos.", []]]],
["Bebidas", "Seguidilla Food Truck", [["Batida de Fresa", 0, "e_batida", "Batida de fresa.", []], ["Batida de Mango", 0, "e_batida", "Batida de mango.", []], ["Batida de Lechoza", 0, "e_batida", "Batida de lechoza.", []], ["Batida de Guineo", 0, "e_batida", "Batida de guineo.", []], ["Batida de Zapote", 0, "e_batida", "Batida de zapote.", []], ["Jugos Naturales", 0, "e_jugo", "Jugos naturales. Consulta los sabores disponibles.", []], ["Refrescos", 0, "e_refresco", "Refrescos. Consulta los sabores disponibles.", []]]]
];
const $=s=>document.querySelector(s),f=n=>"RD$ "+n.toLocaleString("es-DO",{minimumFractionDigits:2}),cart=[];let cur=null,qty=1;
$("#lg").src=IM.logo;document.querySelectorAll("img.wai").forEach(i=>i.src=IM.wa);
const CK='<svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/></svg>';
const REC=["Hamburguesa Suprema Doble", "Mofongo con Camarones a la Crema", "Quesadilla con Papas Suprema", "Yaroa de Papas", "Chimi de Pierna", "Alitas Picantes", "Hot Dog Supremo", "Salchipapas"];
function list(){const q=$("#q").value.toLowerCase();let h="",n="";
if(!q){const rc=[];C.forEach((c,ci)=>c[2].forEach((p,pi)=>{if(REC.includes(p[0]))rc.push([REC.indexOf(p[0]),ci,pi,p])}));rc.sort((x,y)=>x[0]-y[0]);
n+='<a href="#" data-c="rec">Nuestra recomendación 😮</a>';
h+='<h2 id="rec">Nuestra recomendación 😮'+(adm?'<button class="recb" data-ad="rec">＋ Agregar</button>':'')+'</h2><div class="rw"><div class="rs">'+rc.map(([,ci,pi,p])=>`<div class="rc" data-p="${ci}.${pi}"><div class="ri"><img src="${PIMG(p)}" alt="${p[0]}"><span class="pl">+</span></div><b>${p[1]?f(p[1]):"Consultar"}</b><span>${p[0]}</span></div>`).join("")+'</div><button class="nx" aria-label="Siguiente"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M8.6 16.6L13.2 12 8.6 7.4 10 6l6 6-6 6z"/></svg></button></div>'}
C.forEach((c,ci)=>{const it=c[2].map((p,pi)=>[p,pi]).filter(([p])=>!q||(p[0]+p[3]+c[0]).toLowerCase().includes(q));if(!it.length&&!(adm&&!q))return;n+=`<a href="#" data-c="c${ci}">${c[0]}</a>`;h+=`<h2 id="c${ci}">${c[0]}<small>${c[1]}</small>${admTools(ci)}</h2><div class="grid">`+it.map(([p,pi])=>`<div class="row" data-p="${ci}.${pi}"><div class="t"><b>${p[0]}</b><p>${p[3]}</p><div class="pr">${p[1]?f(p[1]):"Consultar precio"}</div></div><div class="gi"><img src="${PIMG(p)}" alt="${p[0]}"><span class="pl">+</span></div></div>`).join("")+"</div>"});
$("#list").innerHTML=h||'<p style="color:var(--f80);margin-top:24px">No encontramos resultados.</p>';$("#nav").innerHTML=n;const nx=$(".nx");const rs=$(".rs");rs&&(rs.insertAdjacentHTML("beforeend",rs.innerHTML),auto(rs,nx));io();reveal()}
let raf;function auto(rs,nx){cancelAnimationFrame(raf);if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;let pos=rs.scrollLeft,hold=false,t;
const pause=ms=>{hold=true;clearTimeout(t);t=setTimeout(()=>{pos=rs.scrollLeft;hold=false},ms)};
["pointerdown","touchstart","wheel"].forEach(ev=>rs.addEventListener(ev,()=>pause(2500),{passive:true}));
rs.addEventListener("mouseenter",()=>{hold=true;clearTimeout(t)});rs.addEventListener("mouseleave",()=>pause(300));
rs.addEventListener("scroll",()=>{const h=rs.scrollWidth/2;if(rs.scrollLeft>=h)rs.scrollLeft-=h});
nx&&(nx.onclick=e=>{e.stopPropagation();pause(1500);rs.scrollBy({left:320,behavior:"smooth"})});
const step=()=>{if(!rs.isConnected)return;if(!hold&&!adm&&$("#home").classList.contains("on")){const h=rs.scrollWidth/2;pos+=.6;if(pos>=h)pos-=h;rs.scrollLeft=pos}raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step)}
let rvo;function reveal(){rvo&&rvo.disconnect();rvo=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");rvo.unobserve(x.target);setTimeout(()=>x.target.style.removeProperty("--d"),700)}}),{threshold:.05});document.querySelectorAll("#list h2,#list .row,#list .rw").forEach((el,i)=>{el.classList.add("rv");el.style.setProperty("--d",(i%4)*60+"ms");rvo.observe(el)})}
let ob;function io(){ob&&ob.disconnect();ob=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.dataset.c==x.target.id));const a=$("#nav a.on");a&&$("#nav").scrollTo({left:a.offsetLeft-30,behavior:"smooth"})}}),{rootMargin:"-70px 0px -80% 0px"});document.querySelectorAll("h2").forEach(h=>ob.observe(h))}
function show(v){document.querySelectorAll(".view").forEach(e=>e.classList.toggle("on",e.id==v));if(v=="prod")scrollTo({top:0,behavior:"instant"});bar()}
function open_(k){const[ci,pi]=k.split(".");cur=C[ci][2][pi];qty=1;$("#pim").src=PIMG(cur);$("#phn").textContent=$("#pt").textContent=cur[0];$("#pd").textContent=cur[3];$("#pp").textContent=cur[1]?f(cur[1]):"Consultar precio";$("#cmt").value="";
$("#mods").innerHTML=cur[4].map((m,i)=>`<div class="pn open" data-m="${i}"><button class="ph2" data-t><div><div class="ct">${m.n}</div><div class="va">${m.min?"Seleccione mínimo "+m.min+" opciones":"Seleccione hasta "+m.max+" opciones"}</div></div><span class="rt"><span class="chip">${m.min?"Obligatorio":"Opcional"}</span><span class="arr"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></span></span></button><div class="pb"><div><div class="og">${m.o.map((o,j)=>`<label class="opt"><input type="checkbox" data-i="${i}" data-j="${j}"><span class="bx">${CK}</span><span class="ol">${o[0]}${o[1]?`<b>+ ${f(o[1])}</b>`:""}</span></label>`).join("")}</div></div></div></div>`).join("");
window._y=scrollY;upd();show("prod");try{history.pushState({p:1},"")}catch(e){}}
function sel(){return cur[4].map((m,i)=>m.o.filter((o,j)=>document.querySelector(`input[data-i="${i}"][data-j="${j}"]`)?.checked))}
function unit(){return cur[1]+sel().flat().reduce((s,o)=>s+o[1],0)}
function upd(){$("#qn").textContent=qty;$("#mn").disabled=qty<=1;const s=sel();cur[4].forEach((m,i)=>{const c=document.querySelector(`.pn[data-m="${i}"] .chip`);c.classList.toggle("ok",s[i].length>=m.min&&m.min>0);if(s[i].length>=m.min)document.querySelector(`.pn[data-m="${i}"] .va`).classList.remove("err")});$("#ap").textContent=cur[1]?f(unit()*qty):"";$("#add").firstElementChild.textContent=cur[1]?"Agregar":"Consultar por WhatsApp"}
document.addEventListener("change",e=>{const t=e.target;if(t.dataset.i===undefined)return;const m=cur[4][t.dataset.i],ch=[...document.querySelectorAll(`input[data-i="${t.dataset.i}"]`)];if(t.checked&&ch.filter(c=>c.checked).length>m.max){if(m.max==1)ch.forEach(c=>c!==t&&(c.checked=false));else t.checked=false}upd()});
document.addEventListener("click",e=>{const t=e.target,r=t.closest("[data-p]");if(r)return open_(r.dataset.p);if(t.closest("[data-back]"))return back_();const h=t.closest("[data-t]");if(h)h.parentElement.classList.toggle("open");const a=t.closest("#nav a");if(a){e.preventDefault();$("#"+a.dataset.c).scrollIntoView()}
const b=t.closest(".add");if(b){const rc=b.getBoundingClientRect(),d=document.createElement("span");d.className="rip";const z=Math.max(rc.width,rc.height);d.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-rc.left-z/2}px;top:${e.clientY-rc.top-z/2}px`;b.appendChild(d);setTimeout(()=>d.remove(),600)}});
$("#mn").onclick=()=>{if(qty>1){qty--;upd();bmp($("#qn"))}};$("#pl").onclick=()=>{if(qty<99){qty++;upd();bmp($("#qn"))}};
$("#add").onclick=()=>{const s=sel();for(let i=0;i<cur[4].length;i++){if(s[i].length<cur[4][i].min){const p=document.querySelector(`.pn[data-m="${i}"]`);p.classList.add("open","shake");p.querySelector(".va").classList.add("err");setTimeout(()=>p.classList.remove("shake"),400);p.scrollIntoView({block:"center"});toast("Selecciona las opciones obligatorias");return}}
if(!cur[1]){go("https://wa.me/"+WAN+"?text="+encodeURIComponent("Hola, quiero consultar: "+cur[0]));return}
const it={n:cur[0],q:qty,u:unit(),o:s.flat().map(o=>o[0]).join(", "),c:$("#cmt").value.trim()},ex=cart.find(x=>x.n==it.n&&x.o==it.o&&x.c==it.c&&x.u==it.u);ex?ex.q+=it.q:cart.push(it);
toast("Agregado al pedido ✓");back_();setTimeout(()=>{const b=$("#bar");b.classList.remove("bp");void b.offsetWidth;b.classList.add("bp")},120)};
function tot(){return cart.reduce((s,e)=>s+e.q*e.u,0)}
function bar(){const b=$("#bar"),n=cart.reduce((s,e)=>s+e.q,0);b.style.display=n&&$("#home").classList.contains("on")?"flex":"none";b.innerHTML=`<span><span class="n">${n}</span>Ver pedido</span><span>${f(tot())}</span>`}
function cls(){$("#cls").innerHTML=cart.map((e,i)=>`<div class="cl"><div>${e.n}${e.o?`<small>${esc(e.o)}</small>`:""}${e.c?`<small>“${esc(e.c)}”</small>`:""}<button data-d="${i}">Quitar</button></div><div class="cr"><b>${f(e.q*e.u)}</b><div class="mq"><button data-q="${i}" data-s="-1">−</button><span>${e.q}</span><button data-q="${i}" data-s="1">+</button></div></div></div>`).join("")||'<p style="color:var(--f80)">Tu pedido está vacío.</p>';$("#ct").textContent=f(tot());bar()}
document.addEventListener("click",e=>{const d=e.target.dataset.d,q=e.target.dataset.q;if(d!==undefined){cart.splice(d,1);cls();if(!cart.length)shut($("#sh"))}if(q!==undefined){const it=cart[q];it.q+=+e.target.dataset.s;if(it.q<1)cart.splice(q,1);cls();if(!cart.length)shut($("#sh"))}});
$("#bar").onclick=()=>{cls();$("#sh").classList.add("on")};$("#cx").onclick=()=>shut($("#sh"));$("#sh").addEventListener("click",e=>{if(e.target.id=="sh")shut($("#sh"))});
$("#send").onclick=()=>{if(!cart.length)return;let m="Hola Seguidilla Food Truck 👋, quiero hacer este pedido:\n\n";cart.forEach(e=>{m+=`• ${e.q} × ${e.n} – ${f(e.q*e.u)}\n`+(e.o?`   ${e.o}\n`:"")+(e.c?`   Nota: ${e.c}\n`:"")});m+=`\nTotal: ${f(tot())}`;if($("#nm").value)m+=`\nNombre: ${$("#nm").value}`;if($("#ad").value)m+=`\nDirección/Notas: ${$("#ad").value}`;go("https://wa.me/"+WAN+"?text="+encodeURIComponent(m))};
addEventListener("popstate",()=>{show("home");scrollTo({top:window._y||0,behavior:"instant"})});$("#q").oninput=list;list();bar();

/* HORARIO: [texto, abre (min desde 00:00), cierra]. Domingo=0 ... Sábado=6. Edita aquí si cambian las horas. */
let AL=["6:00 PM - 12:00 AM",1080,1440],HR=[AL,AL,AL,AL,AL,AL,AL],TZ="America/Santo_Domingo",WAN="18099672393",MAP="https://maps.app.goo.gl/qeyVGsKjhTV5ceqp8",LINKS={ig:"https://www.instagram.com/seguidillafoodtruck_oficial/"},DIAS=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
function now(){const p=new Intl.DateTimeFormat("en-US",{timeZone:TZ,weekday:"short",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date()),g=t=>p.find(x=>x.type==t).value;return{d:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday")),m:(+g("hour")%24)*60+ +g("minute")}}
function isOpen(){const t=now(),h=HR[t.d],q=HR[(t.d+6)%7];return(t.m>=h[1]&&t.m<h[2])||t.m<q[2]-1440}
function abHTML(){const o=isOpen();return `<span class="ab${o?"":" off"}"><i></i>${o?"Abierto":"Cerrado"}</span>`}
function setAb(){const e=$("#ab");if(!e)return;const o=isOpen();e.className="ab"+(o?"":" off");e.innerHTML="<i></i>"+(o?"Abierto":"Cerrado")}
function go(u){window.open(u,"_blank")||(location.href=u)}
function back_(){if(history.state&&history.state.p)history.back();else{show("home");scrollTo({top:window._y||0,behavior:"instant"})}}
function shut(el){if(!el.classList.contains("on")||el.classList.contains("out"))return;if(el.id=="md")applyTheme();el.classList.add("out");setTimeout(()=>el.classList.remove("on","out","pv"),200)}
function bmp(el){el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump")}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
addEventListener("keydown",e=>{if(e.key=="Escape"){shut($("#md"));shut($("#sh"))}});
function toast(t){const e=$("#tt");e.textContent=t;e.classList.add("on");clearTimeout(window._t);window._t=setTimeout(()=>e.classList.remove("on"),2200)}
function modal(t,h){applyTheme();$("#md").classList.remove("pv");$("#mdt").textContent=t;$("#mdb").innerHTML=h;$("#md").classList.add("on")}
const SOC=`<div class="ic"><button data-act="wa" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.3 17.3 1.7 22.3 6.9 20.9A10.4 10.4 0 1 0 3.3 17.3Z"/><path d="M8 6.5h1.3l1.2 2.7-.8 1c.8 1.6 1.9 2.6 3.3 3.2l1-.9 2.8 1.3c.1 1.4-.9 2.5-2.5 2.6-4.1-.3-7.4-3.3-7.6-7.2-.1-1.5.7-2.6 1.3-2.7Z"/></svg></button><button data-act="ig"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg></button><button data-act="map" aria-label="Ubicación"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg></button><button data-act="share" style="border:0;background:none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/></svg></button></div>`;
document.addEventListener("click",e=>{const t=e.target;if(t.id=="md"||t.id=="mdx")return shut($("#md"));
const g=t.closest("[data-go]");if(g){shut($("#md"));if($("#q").value){$("#q").value="";$("#qw").classList.remove("on");list()}const el=document.getElementById(g.dataset.go);el&&el.scrollIntoView();return}
const b=t.closest("[data-act]");if(!b)return;const a=b.dataset.act;
if(a=="wa")go("https://wa.me/"+WAN+"?text="+encodeURIComponent("Hola Seguidilla Food Truck 👋"));
else if(a=="map")go(MAP);
else if(a=="ig")LINKS[a]?go(LINKS[a]):toast("Enlace no disponible por ahora");
else if(a=="srch"){const w=$("#qw"),on=w.classList.toggle("on");if(on)$("#q").focus();else if($("#q").value){$("#q").value="";list()}}
else if(a=="cats")modal("Categorías",C.map((c,i)=>`<button class="cat" data-go="c${i}">${c[0]}</button>`).join(""));
else if(a=="share"){const u=location.href;navigator.share?navigator.share({title:"Seguidilla Food Truck",url:u}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(u),toast("Enlace copiado"))}
else if(a=="inf"){const h=now().d;modal("Información",`${abHTML()}<div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px"><b style="font-size:20px">${esc(NAME)}</b><img src="${IM.logo}" width="40" height="40" style="border-radius:8px;object-fit:cover"></div>${SOC}<hr><h4>Tipos de servicio</h4><div class="sv"><b>A domicilio</b></div><div class="sv"><b>Para llevar</b></div><div class="sv"><b>En el local</b></div><h4>Métodos de pago</h4><div class="sv"><b>Efectivo</b></div><div class="sv"><b>Transferencia</b></div><h4>Horarios de atención</h4>${DIAS.map((d,i)=>`<div class="dy${i==h?" hoy":""}"><span>${d}</span><span>${HR[i][0]}</span></div>`).join("")}`)}
});

/* ===== ADMIN ===== */
const PW="",MODS={none:[],prot:[PROTM]},IMc={},SAVED=null;/*SVEND*/
IM.ph="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#eee"/><text x="100" y="118" font-size="60" text-anchor="middle">🍔</text></svg>');
let NAME="SEGUIDILLA FOOD TRUCK",BANNER="SABOR QUE\nSE SIGUE",SUB="Food Truck · Yaroa · Chimis · Hamburguesas · Mofongos",pend=null;
/* ===== PALETA DE COLORES ===== */
const DEF_TH={primary:"#F7B500",p2:"#D99500",bg:"#0D0D0D",text:"#FFFFFF",bnt:"#000000",onp:"#000000"};
const PRESETS=[["Original Seguidilla","#F7B500","#D99500","#0D0D0D","#000000","#000000"],["Rojo oscuro","#E0141C","#B00F16","#0D0D0D","#FFFFFF","#FFFFFF"],["Claro amarillo","#FFC100","#FFB300","#FFFFFF","#000000","#000000"],["Oscuro naranja","#E27D2D","#CF6A1B","#161212","#F5F1EE","#161212"],["Verde","#2BB673","#1A8F57","#FFFFFF","#10201A","#FFFFFF"],["Azul","#1E88E5","#1565C0","#FFFFFF","#0D1B2A","#FFFFFF"],["Morado","#8E44AD","#6C3483","#FFFFFF","#1E1226","#FFFFFF"],["Oscuro rojo","#FF5252","#D32F2F","#15161A","#F2F2F2","#FFFFFF"]];
let TH=Object.assign({},DEF_TH);
const hx=h=>{h=String(h||"").replace("#","");return/^[0-9a-f]{6}$/i.test(h)?h.toUpperCase():null},rgb=h=>[0,2,4].map(i=>parseInt((hx(h)||"000000").substr(i,2),16)),toHex=a=>"#"+a.map(v=>Math.round(Math.max(0,Math.min(255,v))).toString(16).padStart(2,"0")).join("").toUpperCase(),mixc=(a,b,t)=>{const x=rgb(a),y=rgb(b);return toHex(x.map((v,i)=>v+(y[i]-v)*t))},lum=h=>{const c=rgb(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]},autoOnp=p=>lum(p)>.22?"#000000":"#FFFFFF";
function applyTheme(t){t=t||TH;const g=(k,d)=>hx(t[k])?"#"+hx(t[k]):d,p=g("primary",DEF_TH.primary),p2=g("p2",DEF_TH.p2),bg=g("bg",DEF_TH.bg),tx=g("text",DEF_TH.text),bnt=g("bnt",DEF_TH.bnt),onp=t.onp&&t.onp!="auto"&&hx(t.onp)?"#"+hx(t.onp):autoOnp(p),sf=lum(bg)<.4?mixc(bg,"#FFFFFF",.07):"#FFFFFF",s=document.documentElement.style,set=(k,v)=>s.setProperty(k,v);
set("--primary",p);set("--p2",p2);set("--p12",p+"1F");set("--p32",p+"52");set("--p60",p+"99");set("--pd",mixc(p,"#000000",.22));set("--bg",bg);set("--sf",sf);
set("--f",tx);set("--f80",tx+"CC");set("--f50",tx+"80");set("--f24",tx+"3D");set("--f12",tx+"1F");set("--f8",tx+"14");set("--f4",tx+"0A");set("--bnt",bnt);set("--onp",onp);
const m=document.querySelector('meta[name="theme-color"]');m&&m.setAttribute("content",p)}
function editTheme(){const T=Object.assign({},TH),F=[["primary","Color principal (botones y acentos)"],["p2","Banner: segundo color del degradado"],["bg","Fondo de la página"],["text","Color del texto"],["bnt","Texto del banner"],["onp","Texto sobre el color principal"]];
modal("🎨 Paleta de colores",`<p style="margin:0 0 8px;font-size:13px;color:var(--f80)">Elige una paleta o ajusta cada color. Se ve en vivo en la página.</p><div class="tp">${PRESETS.map((p,i)=>`<button class="pst" data-ps="${i}"><span class="sw"><i style="background:${p[1]}"></i><i style="background:${p[2]}"></i><i style="background:${p[3]}"></i><i style="background:${p[4]}"></i></span>${p[0]}</button>`).join("")}</div>
${F.map(([k,l])=>`<div class="cr2"><label>${l}</label><input type="color" data-ck="${k}"><input class="af" data-ch="${k}" maxlength="7"></div>`).join("")}
<label class="chk"><input type="checkbox" id="tha"> Texto sobre el color principal: automático</label>
<button class="wab" id="ths" style="background:#FFC400;margin-top:4px">Guardar colores</button><div class="ar"><button id="thr">Volver a los colores originales</button></div>`);
$("#md").classList.add("pv");
const Q=s=>document.querySelector(s),rf=()=>{F.forEach(([k])=>{const v=k=="onp"&&T.onp=="auto"?autoOnp(T.primary):T[k];Q(`[data-ck="${k}"]`).value=v.toLowerCase();Q(`[data-ch="${k}"]`).value=v.toUpperCase()});Q("#tha").checked=T.onp=="auto";applyTheme(T)};
document.querySelectorAll("[data-ck]").forEach(i=>i.oninput=()=>{T[i.dataset.ck]=i.value.toUpperCase();rf()});
document.querySelectorAll("[data-ch]").forEach(i=>i.oninput=()=>{if(/^#?[0-9a-f]{6}$/i.test(i.value)){T[i.dataset.ch]="#"+hx(i.value);rf()}});
document.querySelectorAll("[data-ps]").forEach(b=>b.onclick=()=>{const p=PRESETS[+b.dataset.ps];T.primary=p[1];T.p2=p[2];T.bg=p[3];T.text=p[4];T.bnt=p[5];T.onp="auto";rf()});
Q("#tha").onchange=e=>{T.onp=e.target.checked?"auto":autoOnp(T.primary);rf()};
Q("#thr").onclick=()=>{Object.assign(T,DEF_TH);rf()};
Q("#ths").onclick=()=>{TH=Object.assign({},T);shut($("#md"));save();toast("Colores guardados ✓")};
rf()}
const pad=n=>String(n).padStart(2,"0"),tm=m=>pad(Math.floor(m%1440/60))+":"+pad(m%60),mm=v=>{if(!v)return 0;const a=v.split(":");return +a[0]*60+ +a[1]},fmt=m=>{const h=Math.floor(m/60),i=m%60;return(h%12||12)+":"+pad(i)+" "+(h<12?"AM":"PM")};
function DATA(){const u=new Set(["logo"]);C.forEach(c=>c[2].forEach(p=>u.add(p[2])));const im={};for(const k in IMc)if(u.has(k))im[k]=IMc[k];return{t:Date.now(),C,REC,HR,WAN,MAP,IG:LINKS.ig,NAME,BANNER,SUB,TH,IM:im}}
function applyData(d){if(!d)return;C.splice(0,C.length,...d.C);REC.splice(0,REC.length,...d.REC);HR.splice(0,HR.length,...d.HR);WAN=d.WAN;MAP=d.MAP;LINKS.ig=d.IG;NAME=d.NAME;BANNER=d.BANNER;SUB=d.SUB;Object.assign(IM,d.IM);Object.assign(IMc,d.IM);if(d.TH)TH=Object.assign({},DEF_TH,d.TH)}
function applyUI(){applyTheme();$("#sn").textContent=NAME;$("#bm").innerHTML=esc(BANNER).replace(/\n/g,"<br>");$("#ssub").textContent=SUB;$("#lg").src=IM.logo;document.querySelectorAll("#mdb img[data-logo]").forEach(i=>i.src=IM.logo);setAb()}
function redraw(){const y=scrollY;list();scrollTo(0,y)}
/* ===== ALMACENAMIENTO PERSISTENTE: IndexedDB (principal, gran capacidad) + localStorage (respaldo) ===== */
const IDBN="seguidillafoodtruck_menu_db",IDBS="kv";
function idb(){return new Promise((res,rej)=>{try{const r=indexedDB.open(IDBN,1);r.onupgradeneeded=()=>r.result.createObjectStore(IDBS);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);r.onblocked=()=>rej(new Error("blocked"))}catch(e){rej(e)}})}
function idbGet(){return idb().then(db=>new Promise((res,rej)=>{const q=db.transaction(IDBS).objectStore(IDBS).get("data");q.onsuccess=()=>{db.close();res(q.result||null)};q.onerror=()=>{db.close();rej(q.error)}}))}
function idbPut(js){return idb().then(db=>new Promise((res,rej)=>{const t=db.transaction(IDBS,"readwrite");t.objectStore(IDBS).put(js,"data");t.oncomplete=()=>{db.close();res()};t.onerror=t.onabort=()=>{db.close();rej(t.error)}}))}
function idbDel(){return idb().then(db=>new Promise(res=>{const t=db.transaction(IDBS,"readwrite");t.objectStore(IDBS).delete("data");t.oncomplete=t.onerror=t.onabort=()=>{db.close();res()}}))}
let _sv=Promise.resolve();
/* Caché local (IndexedDB + localStorage): arranque rápido y respaldo sin conexión */
function persist(d){d=d||DATA();const js=JSON.stringify(d);
try{localStorage.setItem("seguidillafoodtruck_menu",js)}catch(e){try{localStorage.setItem("seguidillafoodtruck_menu",JSON.stringify(Object.assign({},d,{IM:{},slim:1})))}catch(e2){}}
_sv=_sv.then(()=>idbPut(js)).catch(()=>{})}
/* ===== SUPABASE: base de datos compartida (una fila por menú) ===== */
const SB_URL="https://buhwedhkeoilptktskgx.supabase.co",SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aHdlZGhrZW9pbHB0a3Rza2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MDQxMjUsImV4cCI6MjEwODE4MDEyNX0.8Y_d9kXYi4JoOKUB4HhmkHVJHPTcTvZdaLprkkbQELE",MENU_ID="seguidillafoodtruck",ADMIN_EMAIL="seguidillafoodtruck@menu.com",BUCKET="menu-images";
let SB=null;try{if(window.supabase)SB=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,storageKey:"sb-seguidillafoodtruck-auth"}})}catch(e){}
let LOCALT=0,RT=0,_sub=false,_rs=Promise.resolve();
async function upImgs(){for(const k in IMc){const v=IMc[k];if(typeof v==="string"&&v.indexOf("data:")===0){const blob=await(await fetch(v)).blob(),path=MENU_ID+"/"+k+".jpg";
const r=await SB.storage.from(BUCKET).upload(path,blob,{upsert:true,contentType:"image/jpeg"});if(r.error)throw r.error;
const u=SB.storage.from(BUCKET).getPublicUrl(path).data.publicUrl+"?v="+Date.now();IM[k]=IMc[k]=u}}}
function pushRemote(){if(!SB)return Promise.resolve();
_rs=_rs.then(async()=>{try{await upImgs();const d=DATA();
const r=await SB.from("menus").upsert({id:MENU_ID,data:d},{onConflict:"id"}).select("id");
if(r.error)throw r.error;
if(!r.data||!r.data.length)throw new Error("tu sesión de administrador venció o no tienes permiso: sal y vuelve a entrar");
RT=d.t;persist(d);toast("☁ Guardado para todos ✓")}
catch(e){toast("⚠ No se pudo guardar en la nube: "+((e&&e.message)||e)+". Los cambios quedan en este dispositivo")}});return _rs}
function applyRemote(d){applyData(d);RT=d.t||0;persist(d);applyUI();redraw()}
async function syncRemote(){if(!SB)return;try{
if(adm){const s=await SB.auth.getSession();if(!(s.data&&s.data.session)){adm=false;try{sessionStorage.removeItem("seguidillafoodtruck_adm")}catch(e){}admUI()}}
const r=await SB.from("menus").select("data").eq("id",MENU_ID).maybeSingle();if(r.error)throw r.error;
const rd=r.data&&r.data.data;
if(rd&&rd.C&&(rd.t||0)>RT){if(adm&&LOCALT>(rd.t||0))pushRemote();else applyRemote(rd)}
if(!_sub){_sub=true;SB.channel("menu-"+MENU_ID).on("postgres_changes",{event:"UPDATE",schema:"public",table:"menus",filter:"id=eq."+MENU_ID},p=>{const d=p.new&&p.new.data;if(adm||!d||!d.C||(d.t||0)<=RT)return;applyRemote(d)}).subscribe()}
}catch(e){}}
async function seedIfEmpty(){try{const r=await SB.from("menus").select("data").eq("id",MENU_ID).maybeSingle();
if(!r.data||!(r.data.data&&r.data.data.C))pushRemote()}catch(e){}}
function save(){persist();applyUI();redraw();bar();pushRemote()}
function admTools(ci){return adm?`<span class="at"><button data-ac="up" data-ci="${ci}">▲</button><button data-ac="dn" data-ci="${ci}">▼</button><button data-ac="ed" data-ci="${ci}">✎ Editar categoría</button><button data-ac="add" data-ci="${ci}">+ Producto</button></span>`:""}
function admUI(){document.body.classList.toggle("adm",adm);$("#admbar").innerHTML=adm?'<b>🔧 Modo administrador</b><button data-ad="cfg">⚙ Ajustes</button><button data-ad="theme">🎨 Colores</button><button data-ad="cat">+ Categoría</button><button class="g" data-ad="out">Salir</button>':"";$("#alink").style.display=adm?"none":"";redraw()}
function readImg(file,max,cb){const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);const x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.82))};im.src=r.result};r.readAsDataURL(file)}
function login(){modal("Acceso administrador",'<input class="af" id="apw" type="password" placeholder="Contraseña" autocomplete="off"><button class="wab" id="alg" style="background:#FFC400;margin-top:0">Entrar</button>');setTimeout(()=>{const i=$("#apw");i&&i.focus()},60);
const ok_=async()=>{const i=$("#apw"),pw=i.value;let good=false,msg="Contraseña incorrecta";
if(!SB)msg="Sin conexión con la base de datos";else{try{const r=await SB.auth.signInWithPassword({email:ADMIN_EMAIL,password:pw});good=!r.error;if(r.error){msg=/invalid login credentials/i.test(r.error.message)?"Contraseña incorrecta":"Error: "+r.error.message}}catch(e){msg="Sin conexión"}}
if(good){adm=true;try{sessionStorage.setItem("seguidillafoodtruck_adm","1")}catch(e){}shut($("#md"));admUI();toast("Modo admin activado · mantén presionado un producto para moverlo");seedIfEmpty()}
else{i.classList.add("shake");setTimeout(()=>i.classList.remove("shake"),400);i.value="";toast(msg)}};$("#alg").onclick=ok_;$("#apw").onkeydown=e=>{if(e.key=="Enter")ok_()}}
function modKey(p){if(!p[4].length)return"none";const j=JSON.stringify(p[4]);return Object.keys(MODS).find(k=>JSON.stringify(MODS[k])==j)||"keep"}
function editProd(ci,pi){const nw=pi<0,p=nw?["",0,"","",[]]:C[ci][2][pi];pend=null;
modal(nw?"Nuevo producto":"Editar producto",`<div style="text-align:center"><img id="epi" src="${PIMG(p)}" style="width:120px;height:120px;border-radius:14px;object-fit:cover"><br><label class="fbtn">📷 Cambiar foto<input id="epf" type="file" accept="image/*" hidden></label></div>
<label class="al">Nombre</label><input class="af" id="epn" value="${esc(p[0])}">
<label class="al">Precio (RD$) · 0 = "Consultar precio"</label><input class="af" id="epp" type="number" min="0" step="1" inputmode="decimal" value="${p[1]}">
<label class="al">Descripción</label><textarea class="af" id="epd" rows="3">${esc(p[3])}</textarea>
<label class="al">Categoría</label><select class="af" id="epc">${C.map((c,i)=>`<option value="${i}"${i==ci?" selected":""}>${esc(c[0])}</option>`).join("")}</select>
<label class="al">Opciones para el cliente</label><select class="af" id="epm"><option value="keep">Mantener las actuales</option><option value="none">Ninguna</option><option value="prot">Proteína (pollo o res)</option></select>
<label class="chk"><input type="checkbox" id="epr"${REC.includes(p[0])?" checked":""}> Mostrar en "Nuestra recomendación"</label>
<button class="wab" id="eps" style="background:#FFC400;margin-top:0">Guardar</button>${nw?"":'<div class="ar"><button id="epu">▲ Subir</button><button id="epv">▼ Bajar</button><button id="epx" class="danger">🗑 Eliminar</button></div>'}`);
$("#epm").value=nw?"none":modKey(p);
$("#epf").onchange=e=>{const f=e.target.files[0];f&&readImg(f,700,u=>{pend=u;$("#epi").src=u})};
$("#eps").onclick=()=>{const n=$("#epn").value.trim();if(!n){toast("Escribe un nombre");return}
const old=nw?null:p[0];p[0]=n;p[1]=Math.max(0,+$("#epp").value||0);p[3]=$("#epd").value.trim();{const v=$("#epm").value;if(v!="keep")p[4]=[...MODS[v]]}
if(pend){const k="u_"+Date.now();IM[k]=IMc[k]=pend;p[2]=k}
const nc=+$("#epc").value;if(nw)C[nc][2].push(p);else if(nc!=ci){C[ci][2].splice(pi,1);C[nc][2].push(p)}
const ri=old!==null?REC.indexOf(old):-1,want=$("#epr").checked;if(ri>=0){want?REC[ri]=n:REC.splice(ri,1)}else if(want)REC.push(n);
shut($("#md"));save();toast("Guardado ✓")};
if(!nw){const mv=d=>{const a=C[ci][2],j=pi+d;if(j<0||j>=a.length)return;[a[pi],a[j]]=[a[j],a[pi]];shut($("#md"));save()};$("#epu").onclick=()=>mv(-1);$("#epv").onclick=()=>mv(1);
$("#epx").onclick=()=>{if(!confirm("¿Eliminar \""+p[0]+"\"?"))return;C[ci][2].splice(pi,1);const r=REC.indexOf(p[0]);r>=0&&REC.splice(r,1);shut($("#md"));save();toast("Producto eliminado")}}}
function editCat(ci){const nw=ci<0,c=nw?["","",[]]:C[ci];modal(nw?"Nueva categoría":"Editar categoría",`<label class="al">Nombre</label><input class="af" id="ecn" value="${esc(c[0])}"><label class="al">Subtítulo (opcional)</label><input class="af" id="ecs" value="${esc(c[1])}"><button class="wab" id="ecg" style="background:#FFC400;margin-top:0">Guardar</button>${nw?"":'<div class="ar"><button id="ecx" class="danger">🗑 Eliminar categoría</button></div>'}`);
$("#ecg").onclick=()=>{const n=$("#ecn").value.trim();if(!n){toast("Escribe un nombre");return}c[0]=n;c[1]=$("#ecs").value.trim();if(nw)C.push(c);shut($("#md"));save();if(nw)setTimeout(()=>{const e=$("#c"+(C.length-1));e&&e.scrollIntoView()},100)};
if(!nw)$("#ecx").onclick=()=>{if(!confirm("¿Eliminar la categoría \""+c[0]+"\" y sus "+c[2].length+" productos?"))return;C.splice(ci,1);shut($("#md"));save()}}
function editCfg(){pend=null;const dr=i=>{const h=HR[i],m=h[1]==0&&h[2]==1440?"24":h[1]==h[2]?"x":"h";return`<div class="dyr"><b style="font-size:12px">${DIAS[i].slice(0,3)}</b><select class="af" data-hm="${i}"><option value="24"${m=="24"?" selected":""}>24 horas</option><option value="h"${m=="h"?" selected":""}>Horario</option><option value="x"${m=="x"?" selected":""}>Cerrado</option></select><input class="af" type="time" data-ho="${i}" value="${tm(h[1])}"><input class="af" type="time" data-hc="${i}" value="${tm(h[2])}"></div>`};
modal("Ajustes",`<div style="text-align:center"><img id="cfl" data-logo src="${IM.logo}" style="width:90px;height:90px;border-radius:14px;object-fit:cover"><br><label class="fbtn">📷 Cambiar logo<input id="cff" type="file" accept="image/*" hidden></label></div>
<label class="al">Nombre del negocio</label><input class="af" id="cfn" value="${esc(NAME)}">
<label class="al">Texto del banner (una línea por renglón)</label><textarea class="af" id="cfb" rows="3">${esc(BANNER)}</textarea>
<label class="al">Subtítulo</label><input class="af" id="cfs" value="${esc(SUB)}">
<label class="al">WhatsApp (con código de país, solo números)</label><input class="af" id="cfw" inputmode="numeric" value="${esc(WAN)}">
<label class="al">Instagram (enlace)</label><input class="af" id="cfi" value="${esc(LINKS.ig||"")}">
<label class="al">Ubicación (enlace de Google Maps)</label><input class="af" id="cfm" value="${esc(MAP)}">
<label class="al">Horarios</label>${DIAS.map((d,i)=>dr(i)).join("")}
<button class="wab" id="cfg" style="background:#FFC400">Guardar ajustes</button>`);
$("#cff").onchange=e=>{const f=e.target.files[0];f&&readImg(f,500,u=>{pend=u;$("#cfl").src=u})};

$("#cfg").onclick=()=>{NAME=$("#cfn").value.trim()||NAME;BANNER=$("#cfb").value.trim()||BANNER;SUB=$("#cfs").value.trim();WAN=$("#cfw").value.replace(/\D/g,"")||WAN;LINKS.ig=$("#cfi").value.trim();MAP=$("#cfm").value.trim()||MAP;if(pend)IM.logo=IMc.logo=pend;
for(let i=0;i<7;i++){const m=document.querySelector(`[data-hm="${i}"]`).value;if(m=="24")HR[i]=["12:00 AM - 12:00 AM",0,1440];else if(m=="x")HR[i]=["Cerrado",0,0];else{const o=mm(document.querySelector(`[data-ho="${i}"]`).value);let c=mm(document.querySelector(`[data-hc="${i}"]`).value);if(c<=o)c+=1440;HR[i]=[fmt(o)+" - "+fmt(c%1440),o,c]}}
shut($("#md"));save();toast("Ajustes guardados ✓")}}
function editRec(){modal("Nuestra recomendación",'<p style="margin:0 0 8px;font-size:13px;color:var(--f80)">Marca los productos que quieres mostrar.</p>'+C.map((c,ci)=>`<h4 style="margin:14px 0 4px">${esc(c[0])}</h4>`+c[2].map((p,pi)=>`<label class="chk"><input type="checkbox" data-rk="${ci}.${pi}"${REC.includes(p[0])?" checked":""}> ${esc(p[0])}</label>`).join("")).join("")+'<button class="wab" id="rcs" style="background:#FFC400">Guardar</button>');
$("#rcs").onclick=()=>{const on=new Set();document.querySelectorAll("[data-rk]").forEach(i=>{if(i.checked){const k=i.dataset.rk.split(".");on.add(C[k[0]][2][k[1]][0])}});const nr=REC.filter(n=>on.has(n));on.forEach(n=>{if(!nr.includes(n))nr.push(n)});REC.splice(0,REC.length,...nr);shut($("#md"));save();toast("Recomendaciones actualizadas ✓")}}
async function exportHTML(){try{const js=JSON.stringify(DATA()).replace(/<\//g,"<\\/");const orig=await(await fetch("js/app.js",{cache:"no-store"})).text();const out=orig.replace(/const PW=[\s\S]*?SAVED=[\s\S]*?;\/\*SVEND\*\//,m=>m.replace(/SAVED=[\s\S]*;\/\*SVEND\*\//,()=>"SAVED="+js+";/*SVEND*/"));const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([out],{type:"text/javascript"}));a.download="app.js";document.body.appendChild(a);a.click();a.remove();toast("Descargado app.js: reemplaza js/app.js en tu repositorio")}catch(e){toast("Para exportar, abre el sitio publicado (no el archivo local)")}}
document.addEventListener("click",e=>{if(!adm)return;if(performance.now()-(window._ld||0)<500){e.stopImmediatePropagation();e.preventDefault();return}const r=e.target.closest("[data-p]");if(r){e.stopImmediatePropagation();e.preventDefault();const k=r.dataset.p.split(".");editProd(+k[0],+k[1])}},true);
document.addEventListener("click",e=>{const b=e.target.closest("[data-ac],[data-ad]");if(!b)return;
if(b.dataset.ac){const ci=+b.dataset.ci,a=b.dataset.ac;if(a=="ed")editCat(ci);else if(a=="add")editProd(ci,-1);else{const j=ci+(a=="up"?-1:1);if(j<0||j>=C.length)return;[C[ci],C[j]]=[C[j],C[ci]];save()}}
else{const a=b.dataset.ad;if(a=="cfg")editCfg();else if(a=="theme")editTheme();else if(a=="cat")editCat(-1);else if(a=="exp")exportHTML();else if(a=="rec")editRec();else if(a=="out"){adm=false;SB&&SB.auth.signOut({scope:"local"}).catch(()=>{});try{sessionStorage.removeItem("seguidillafoodtruck_adm")}catch(x){}admUI()}}});
(()=>{let t,el,cl,ox=0,oy=0,sx=0,sy=0,lx=0,ly=0,act=false,tgt=null,raf,pid=null;
const grp=e=>e.closest(".rc")?"rec":"c"+e.dataset.p.split(".")[0],SEL=".row[data-p],.rc[data-p]";
function hit(){if(!cl)return;const e=document.elementFromPoint(lx,ly),r=e&&e.closest(SEL);tgt&&tgt.classList.remove("dtg");tgt=r&&r!==el&&grp(r)==grp(el)?r:null;tgt&&tgt.classList.add("dtg")}
function begin(){act=true;const r=el.getBoundingClientRect();ox=sx-r.left;oy=sy-r.top;cl=el.cloneNode(true);cl.classList.add("dgc");cl.classList.remove("rv");cl.style.width=r.width+"px";document.body.appendChild(cl);el.classList.add("dgo");navigator.vibrate&&navigator.vibrate(15);mv();const loop=()=>{if(!act)return;if(ly<110)scrollBy(0,-12);else if(ly>innerHeight-110)scrollBy(0,12);const rs=el.closest(".rs");if(rs){const b=rs.getBoundingClientRect();if(lx<b.left+50)rs.scrollLeft-=8;else if(lx>b.right-50)rs.scrollLeft+=8}hit();raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop)}
function mv(){cl.style.left=(lx-ox)+"px";cl.style.top=(ly-oy)+"px";hit()}
function clean(){clearTimeout(t);cancelAnimationFrame(raf);cl&&cl.remove();el&&el.classList.remove("dgo");tgt&&tgt.classList.remove("dtg");act=false;cl=el=tgt=null}
document.addEventListener("pointerdown",e=>{if(!adm||(e.pointerType=="mouse"&&e.button))return;const r=e.target.closest(SEL);if(!r)return;clean();el=r;sx=lx=e.clientX;sy=ly=e.clientY;t=setTimeout(()=>{if(el&&!act)begin()},e.pointerType=="mouse"?180:350)});
document.addEventListener("pointermove",e=>{if(!el)return;lx=e.clientX;ly=e.clientY;if(act)return mv();const d=Math.hypot(lx-sx,ly-sy);if(d>8){if(e.pointerType=="mouse")begin();else clean()}});
const fin=ok=>{if(!el)return;if(act){window._ld=performance.now();if(ok&&tgt){const a=el.dataset.p.split("."),b=tgt.dataset.p.split(".");
if(grp(el)=="rec"){const i=REC.indexOf(C[a[0]][2][a[1]][0]),j=REC.indexOf(C[b[0]][2][b[1]][0]);if(i>=0&&j>=0&&i!=j)REC.splice(j,0,...REC.splice(i,1))}
else{const ar=C[a[0]][2],i=+a[1],j=+b[1];ar.splice(j,0,...ar.splice(i,1))}clean();save();toast("Posición actualizada ✓");return}}clean()};
document.addEventListener("pointerup",()=>fin(true));document.addEventListener("pointercancel",()=>{if(!act)clean()});
document.addEventListener("touchmove",e=>{if(act)e.preventDefault()},{passive:false});
document.addEventListener("contextmenu",e=>{if(adm&&e.target.closest(SEL))e.preventDefault()});
document.addEventListener("dragstart",e=>{if(adm)e.preventDefault()})})();
$("#alink").onclick=login;
(async()=>{try{
let LS=null,ID=null;try{LS=JSON.parse(localStorage.getItem("seguidillafoodtruck_menu"))}catch(e){}
try{const r=await Promise.race([idbGet(),new Promise((_,rj)=>setTimeout(rj,2500))]);ID=r?JSON.parse(r):null}catch(e){}
LOCALT=Math.max(LS&&LS.t||0,ID&&ID.t||0);
const cand=[SAVED,LS,ID].filter(Boolean).sort((a,b)=>(b.t-a.t)||((a.slim?1:0)-(b.slim?1:0)));
const pick=cand[0];
if(pick){applyData(pick);
cand.slice(1).forEach(x=>{if(x.IM)for(const k in x.IM)if(!(k in IMc)){IM[k]=IMc[k]=x.IM[k]}})}
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch(e){}
}catch(e){}
try{adm=sessionStorage.getItem("seguidillafoodtruck_adm")=="1"}catch(e){}
applyUI();admUI();
setAb();setInterval(setAb,30000);
syncRemote();
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!adm)syncRemote()})})();
