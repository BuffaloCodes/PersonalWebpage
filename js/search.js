// ===== Site configuration =====
const SITE_HOST="buffalocodes.github.io";       // root host only
const SITE_PATH="PersonalWebpage";              // repo path, no leading slash
const PAGES=[
  {title:"Home",url:"index.html"},
  {title:"Experience",url:"experience.html"},
  {title:"Projects",url:"projects.html"},
  {title:"Bookshelf",url:"bookshelf.html"},
  {title:"Contact",url:"contact.html"}
];

// ===== Helpers to find DOM elements safely =====
function qs(id){return document.getElementById(id);}
const openBtn=qs("openSearch");
const modal=qs("searchModal");
const closeBtn=qs("closeSearch");
const input=qs("q");
const form=qs("siteSearchForm");

// ===== Modal open/close =====
function openModal(){
  if(!modal)return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  setTimeout(()=>{if(input)input.focus();},50);
}
function closeModal(){
  if(!modal)return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  if(openBtn)openBtn.focus();
}

// Wire modal events
if(openBtn)openBtn.addEventListener("click",openModal);
if(closeBtn)closeBtn.addEventListener("click",closeModal);
if(modal)modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal&&modal.classList.contains("open"))closeModal();});

// ===== Results container inside the modal =====
function ensureResultsContainer(){
  const panel=document.querySelector(".search-panel");
  if(!panel)return null;
  let box=panel.querySelector(".results");
  if(!box){
    box=document.createElement("div");
    box.className="results";
    panel.appendChild(box);
  }
  return box;
}

// ===== Fetch a page and return plain text =====
async function fetchText(url){
  try{
    const res=await fetch(url,{cache:"no-store"});
    if(!res.ok)return"";
    const html=await res.text();
    const tmp=document.createElement("div");
    tmp.innerHTML=html;
    return tmp.textContent||"";
  }catch{return"";}
}

// ===== Simple local search across PAGES =====
async function localSearch(query){
  const q=query.toLowerCase();
  const results=[];
  for(const page of PAGES){
    const text=await fetchText(page.url);
    const hay=(page.title+" "+text).toLowerCase();
    let score=0;
    if(hay.includes(q))score=2;
    else q.split(/\s+/).forEach(w=>{if(w&&hay.includes(w))score+=1;});
    if(score>0)results.push({...page,score});
  }
  results.sort((a,b)=>b.score-a.score);
  return results.slice(0,10);
}

// ===== External web search URL (Google) =====
function googleUrl(query){
  const webQ=`site:${SITE_HOST} inurl:${SITE_PATH} ${query}`;
  return "https://www.google.com/search?q="+encodeURIComponent(webQ);
}

// ===== Render local results into the modal =====
async function showLocalResults(query){
  const box=ensureResultsContainer();
  if(!box)return;
  box.innerHTML="<p>Searching this site…</p>";
  const results=await localSearch(query);
  if(!results.length){
    box.innerHTML=`<p>No in site results.</p><p><a href="${googleUrl(query)}">Search on Google instead</a></p>`;
    return;
  }
  const base=location.origin+location.pathname.replace(/[^/]*$/,"");
  box.innerHTML=results.map(r=>`
    <div class="card" style="margin-top:0.75rem">
      <strong><a href="${r.url}">${r.title}</a></strong>
      <div style="font-size:0.95rem;color:#555">${base}${r.url}</div>
    </div>
  `).join("")+`
    <p style="margin-top:0.75rem">
      <a href="${googleUrl(query)}">See web results on Google</a>
    </p>
  `;
}

// ===== Form submit: show local results in the modal =====
if(form){
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const q=(input&&input.value||"").trim();
    if(!q)return;
    await showLocalResults(q);
  });
}
// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
