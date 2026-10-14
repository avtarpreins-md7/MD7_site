/* ==========================================
   MD7 GROUP - Master Logic - FINAL 100%
   ========================================== */
const platformData = {
    md1: {
        title: "MD1. إعلانات المركبات - النموذج الواقعي",
        color: "var(--c-md1)",
        desc: "منظومة إعلانات الميكروباص والتاكسي بصورك الحقيقية - حجز وشاهد إعلانك لايف مع ورقة طباعة PDF.",
        placeholder: "اكتب تفاصيل إعلانك...",
        actionText: "فتح واجهة إعلانات المركبات",
        promptEngine: (q) => `[MD1 واقعي]: ${q}`
    },
    md2: {
        title: "MD2. التأليف والنشر",
        color: "var(--c-md2)",
        desc: "صناعة المحتوى، تأليف الكتب، صياغة المقالات.",
        placeholder: "اكتب فكرة الكتاب...",
        actionText: "إنشاء الفهرس",
        promptEngine: (q) => `[MD2] كتاب حول: ${q}`
    },
    md3: {
        title: "MD3. سوق العرض والطلب",
        color: "var(--c-md3)",
        desc: "منصة عرض وطلب المنتجات المادية والرقمية.",
        placeholder: "تفاصيل المنتج...",
        actionText: "إنشاء بطاقة منتج",
        promptEngine: (q) => `[MD3] منتج: ${q}`
    },
    md4: {
        title: "MD4. البرمجة",
        color: "var(--c-md4)",
        desc: "مساعد تطوير ويب وتطبيقات.",
        placeholder: "اكتب الكود المطلوب...",
        actionText: "توليد الكود",
        promptEngine: (q) => `// MD4: ${q}`
    },
    md5: {
        title: "MD5. إدارة المشاريع",
        color: "var(--c-md5)",
        desc: "إدارة المشاريع وتطويرها - التخصص الجديد.",
        placeholder: "اكتب مشروعك...",
        actionText: "إنشاء خطة مشروع",
        promptEngine: (q) => `[MD5] مشروع: ${q}`
    },
    md6: {
        title: "MD6. الطاقة النظيفة",
        color: "var(--c-md6)",
        desc: "حلول الطاقة النظيفة والإنتاج الإبداعي.",
        placeholder: "اكتب الفكرة...",
        actionText: "صياغة الحل",
        promptEngine: (q) => `[MD6] حل: ${q}`
    },
    md7: {
        title: "MD7. MD المؤسس - العقل المركزي",
        color: "var(--c-md7)",
        desc: "المحرك الرئيس للمنظومة - إدارة MD7 Group.",
        placeholder: "اسأل MD7...",
        actionText: "معالجة بالذكاء الاصطناعي",
        promptEngine: (q) => `[MD7] تحليل: ${q}`
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initThemeToggle();
    drawConnectingLines();
    window.addEventListener("resize", drawConnectingLines);
});

function initNavigation(){
    const btn=document.getElementById("menuToggle"),nav=document.getElementById("sideNav");
    if(btn&&nav){btn.addEventListener("click",()=>nav.classList.toggle("active"));}
}
function initThemeToggle(){
    const t=document.getElementById("themeToggleBtn");
    if(t){t.addEventListener("click",()=>document.body.classList.toggle("night"));}
}
function drawConnectingLines(){
    const c=document.getElementById("node-md7"),co=document.querySelector(".orbital-container");
    if(!c||!co)return;
    const cr=c.getBoundingClientRect(),cor=co.getBoundingClientRect();
    const cX=cr.left+cr.width/2-cor.left,cY=cr.top+cr.height/2-cor.top;
    ["md1","md2","md3","md4","md5","md6"].forEach(id=>{
        const n=document.getElementById(`node-${id}`),l=document.getElementById(`line-${id}`);
        if(n&&l){
            const r=n.getBoundingClientRect();
            const nX=r.left+r.width/2-cor.left,nY=r.top+r.height/2-cor.top;
            l.setAttribute("x1",cX);l.setAttribute("y1",cY);l.setAttribute("x2",nX);l.setAttribute("y2",nY);
        }
    });
}
function routeUserGoal(){
    const i=document.getElementById("userGoalInput"),b=document.getElementById("routerSuggestion");
    if(!i||!b)return;const t=i.value.trim().toLowerCase();if(!t)return;
    b.style.display="block";let target="md7",g="العقل المركزي";
    if(t.includes("اعلان")||t.includes("ميكروباص")||t.includes("تاكسي")){target="md1";g="MD1 إعلانات المركبات";}
    else if(t.includes("كتاب")){target="md2";g="MD2 التأليف";}
    else if(t.includes("سوق")||t.includes("بيع")){target="md3";g="MD3 السوق";}
    else if(t.includes("برمجة")||t.includes("كود")){target="md4";g="MD4 البرمجة";}
    else if(t.includes("مشروع")){target="md5";g="MD5 إدارة المشاريع";}
    else if(t.includes("طاقة")){target="md6";g="MD6 الطاقة النظيفة";}
    b.innerHTML=`<div>تم التوجيه إلى <strong>${g}</strong></div><button onclick="switchPlatform('${target}')" class="btn-primary" style="margin-top:10px">الانتقال الآن</button>`;
}
function switchPlatform(id){
    const data=platformData[id],view=document.getElementById("activePlatformView"),card=document.getElementById("platformViewContent");
    if(!data||!view||!card)return;
    view.style.display="block";card.classList.remove("show");
    setTimeout(()=>{
        if(id==='md1' && typeof getMD1RealHTML==='function'){
            card.innerHTML=`<h2 style="color:${data.color}">${data.title}</h2><p style="color:#ccc">${data.desc}</p>${getMD1RealHTML()}`;
            card.classList.add("show");view.scrollIntoView({behavior:"smooth"});setTimeout(()=>{if(typeof initMD1Real==='function')initMD1Real();},200);
        } else {
            card.innerHTML=`<h2 style="color:${data.color}">${escapeHTML(data.title)}</h2><p style="color:#ccc">${escapeHTML(data.desc)}</p><div class="ai-workspace"><textarea id="platformAiInput" placeholder="${escapeHTML(data.placeholder)}"></textarea><button class="ai-btn" onclick="runPlatformAi('${id}')">${escapeHTML(data.actionText)}</button><div class="ai-result" id="platformAiResult"></div></div>`;
            card.classList.add("show");view.scrollIntoView({behavior:"smooth"});
        }
    },200);
}
function runPlatformAi(id){
    const i=document.getElementById("platformAiInput"),r=document.getElementById("platformAiResult");
    if(!i||!r)return;const q=i.value.trim(),e=platformData[id]?.promptEngine;
    if(!q){alert("برجاء كتابة البيانات أولاً.");return;}
    r.style.display="block";r.innerHTML='⚡ جاري التوليد...';
    setTimeout(()=>{if(e){r.innerHTML=escapeHTML(e(q)).replace(/\n/g,"<br>");}},600);
}
function escapeHTML(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}
function showDashboard(){const v=document.getElementById("activePlatformView");if(v)v.style.display="none";window.scrollTo({top:0,behavior:'smooth'});}
function showCompanyInfo(){const m=document.getElementById('companyModal');if(m)m.classList.add('show');}
function hideCompanyInfo(){const m=document.getElementById('companyModal');if(m)m.classList.remove('show');}
function shareSite(){var u=window.location.href;if(navigator.share){navigator.share({title:'MD7 Group',url:u}).catch(()=>{});}else if(navigator.clipboard){navigator.clipboard.writeText(u).then(()=>alert('تم نسخ الرابط: '+u));}else{prompt('انسخ الرابط:',u);}}