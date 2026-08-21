/* ==========================================
   MD7 GROUP - Master Application Logic
   ========================================== */

// قاعدة بيانات معرفة المركز الذكي بالمنصات السبع
const platformData = {
    md1: {
        title: "MD1. إدارة المشاريع وحل المشكلات",
        color: "var(--c-md1)",
        desc: "منظومة متخصصة لإدارة العمليات التشغيلية، هيكلة الشركات، وحل أعطال ومشاكل المؤسسات بالتحليل الذكي.",
        placeholder: "اكتب المشكلة الإدارية أو الميدانية لمؤسستك لتقوم MD1 بتحليلها...",
        actionText: "توليد خطة حل تشغيلية",
        promptEngine: (q) => `[تحليل MD1 - حلول إدارة وتدفق العمليات]:\n1. التشخيص: بناءً على المشكلة (${q})، هناك تعطل في كفاءة التنسيق.\n2. الحل المباشر: تطبيق جدول أتمتة مهام وتقليل الهدر الإداري بنسبة 30%.\n3. خطة العمل: إعادة هيكلة الأدوار وتطبيق التنبؤ المبكر.`
    },
    md2: {
        title: "MD2. التأليف والنشر والتأطير الذكي",
        color: "var(--c-md2)",
        desc: "صناعة المحتوى، تأليف الكتب، صياغة المقالات، وهيكلة المطبوعات الرسمية والدراسات.",
        placeholder: "اكتب فكرة الكتاب أو عنوان الموضوع الذي تريد تأليفه واستخراجه...",
        actionText: "إنشاء الفهرس والمحتوى",
        promptEngine: (q) => `[محرك MD2 - النشر والتأليف]:\nتم توليد هيكلية كتاب/وثيقة حول: "${q}"\n- الفصل الأول: المدخل والمفاهيم الرئيسية.\n- الفصل الثاني: التحليل التطبيقي والاستراتيجية.\n- الفصل الثالث: التوصيات والنتائج التنفيذية.`
    },
    md3: {
        title: "MD3. سوق العرض والطلب والمنتجات",
        color: "var(--c-md3)",
        desc: "منصة عرض وطلب المنتجات المادية والرقمية، الربط بين التجار والعملاء مع اقتطاع عمولات آلياً.",
        placeholder: "اكتب تفاصيل المنتج أو السلعة التي ترغب في عرضها بالسوق...",
        actionText: "إنشاء بطاقة منتج جاهزة",
        promptEngine: (q) => `[سوق MD3 - بطاقة منتج جديدة]:\n- المنتج: ${q}\n- حالة العرض: نشط\n- العمولة المحسوبة: 10%\n- جاهز للإدراج والتداول المباشر في المنصة.`
    },
    md4: {
        title: "MD4. البرمجة وتوليد الأكواد (تعلم وتنفيذ)",
        color: "var(--c-md4)",
        desc: "مساعد تطوير ويب وتطبيقات، كتابة أكواد Python و JavaScript و HTML، وتصحيح الأخطاء البرمجية.",
        placeholder: "اكتب الكود الذي تحتاجه أو الوظيفة البرمجية المراد تنفيذها...",
        actionText: "توليد الكود البرمجي",
        promptEngine: (q) => `// [MD4 Code Generator]\n// الوظيفة المطلوبة: ${q}\nfunction executeTask() {\n    console.log("جاري تشغيل الحل البرمجي لـ: ${q}");\n    return { status: 200, success: true };\n}`
    },
    md5: {
        title: "MD5. بنك المبدعين والخدمات التقنية",
        color: "var(--c-md5)",
        desc: "دليل المستقلين والمبدعين، تقديم الخدمات المصممة، التقييم الساعي، وتوثيق الأعمال.",
        placeholder: "اكتب المهارة أو الخدمة التقنية التي تقدمها كمستقل...",
        actionText: "إنشاء كارت مبدع",
        promptEngine: (q) => `[بنك المبدعين MD5 - بطاقة مستقل]:\n- التخصص: ${q}\n- التقييم: 7/7 نجوم ⭐\n- حالة التوفر: متاح لاستقبال المشاريع والتعاقد.`
    },
    md6: {
        title: "MD6. الإنتاج السينمائي والتصميم الإبداعي",
        color: "var(--c-md6)",
        desc: "إنشاء سيناريوهات الأفلام، تحسين وتعديل الصور، وإعداد البرومبتات البصرية المتقدمة (Prompt Craft).",
        placeholder: "اكتب المشهد السينمائي أو الصورة التي تريد إنتاجها بالتفصيل...",
        actionText: "صياغة البرومبت السينمائي",
        promptEngine: (q) => `[MD6 Prompt Craft - سينما وصور]:\n(Cinematic shot of ${q}, highly detailed, 8k resolution, dramatic lighting, photorealistic, Unreal Engine 5 render style --ar 16:9)`
    },
    md7: {
        title: "MD7. العقل المركزي للذكاء الاصطناعي",
        color: "var(--c-md7)",
        desc: "المحرك الرئيس الذي يفهم عمل كافة المنصات، يصيغ الأوامر، يوجّه المهام، ويعالج التعقدات المتقدمة.",
        placeholder: "اسأل MD7 أي سؤال أو أرسل أمر عمل معقد يشمل عدة منظومات...",
        actionText: "معالجة بالذكاء الاصطناعي",
        promptEngine: (q) => `[MD7 Central Core Output]:\nبناءً على تحليلي الشامل لطبقات المنظومة، طلبك حول (${q}) يتطلب التنسيق بين المنصات التالية:\n1. توجيه للبرمجة (MD4)\n2. توجيه للإنتاج البصري (MD6)\n3. صياغة خطة التشغيل النهائية جاهزة للتحميل.`
    }
};

// تهيئة النظام عند تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initThemeToggle();
    drawConnectingLines();
    window.addEventListener("resize", drawConnectingLines);
});

// إدارة القائمة الجانبية المكونة آمنة من الأخطاء
function initNavigation() {
    const btn = document.getElementById("menuToggle");
    const nav = document.getElementById("sideNav");
    if (btn && nav) {
        btn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
}

// التحكم في تبديل النمط النهائي (Night / Day Mode)
function initThemeToggle() {
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("night");
            document.body.classList.toggle("day");
        });
    }
}

// رسم خطوط مضيئة تربط بين المنصات الست والمركز (MD7)
function drawConnectingLines() {
    const center = document.getElementById("node-md7");
    const container = document.querySelector(".orbital-container");

    if (!center || !container) return;

    const centerRect = center.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const cX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const cY = centerRect.top + centerRect.height / 2 - containerRect.top;

    ["md1", "md2", "md3", "md4", "md5", "md6"].forEach((id) => {
        const node = document.getElementById(`node-${id}`);
        const line = document.getElementById(`line-${id}`);
        if (node && line) {
            const r = node.getBoundingClientRect();
            const nX = r.left + r.width / 2 - containerRect.left;
            const nY = r.top + r.height / 2 - containerRect.top;

            line.setAttribute("x1", cX);
            line.setAttribute("y1", cY);
            line.setAttribute("x2", nX);
            line.setAttribute("y2", nY);
        }
    });
}

// أداة التوجيه الذكي "ماذا تريد أن تنجز اليوم؟"
function routeUserGoal() {
    const inputEl = document.getElementById("userGoalInput");
    const box = document.getElementById("routerSuggestion");

    if (!inputEl || !box) return;

    const text = inputEl.value.trim().toLowerCase();
    if (!text) return;

    box.style.display = "block";
    let target = "md7";
    let textGuide = "";

    if (text.includes("كود") || text.includes("برمجة") || text.includes("موقع") || text.includes("تطبيق")) {
        target = "md4";
        textGuide = "تم التوجيه إلى **MD4 (البرمجة والتنفيذ)** كأنسب منظومة لبناء وتوليد الأكواد.";
    } else if (text.includes("كتاب") || text.includes("مقال") || text.includes("نشر") || text.includes("تأليف")) {
        target = "md2";
        textGuide = "تم التوجيه إلى **MD2 (التأليف والنشر)** لصياغة وإخراج المحتوى المطلوب.";
    } else if (text.includes("بيع") || text.includes("شراء") || text.includes("منتج") || text.includes("سوق")) {
        target = "md3";
        textGuide = "تم التوجيه إلى **MD3 (العرض والطلب)** لإدارة وتداول المنتجات والسلع.";
    } else if (text.includes("تصميم") || text.includes("صورة") || text.includes("سينما") || text.includes("فيديو")) {
        target = "md6";
        textGuide = "تم التوجيه إلى **MD6 (الإنتاج والسينما)** لصياغة البرومبت البصري وتصميم المشاهد.";
    } else if (text.includes("خدمة") || text.includes("مستقل") || text.includes("مصمم") || text.includes("وظيفة")) {
        target = "md5";
        textGuide = "تم التوجيه إلى **MD5 (بنك المبدعين)** لاستعراض وحجز الخدمات.";
    } else if (text.includes("مشكلة") || text.includes("شركة") || text.includes("خطة") || text.includes("إدارة")) {
        target = "md1";
        textGuide = "تم التوجيه إلى **MD1 (إدارة المشاريع)** لحل المعوقات وهيكلة التشغيل.";
    } else {
        target = "md7";
        textGuide = "تم التوجيه إلى **MD7 (العقل المركزي)** لكون الطلب شاملاً ويتطلب تحليل ذكاء اصطناعي متعدد الأبعاد.";
    }

    box.innerHTML = `<div>${textGuide.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</div><button onclick="switchPlatform('${target}')" class="btn-primary" style="margin-top:10px; padding:6px 14px; font-size:13px;">الانتقال للمنصة الآن</button>`;
}

// التبديل بين المنصات وانتقال العرض
function switchPlatform(id) {
    const data = platformData[id];
    const view = document.getElementById("activePlatformView");
    const card = document.getElementById("platformViewContent");

    if (!data || !view || !card) return;

    view.style.display = "block";
    card.classList.remove("show");

    setTimeout(() => {
        card.innerHTML = `
            <h2 style="color:${data.color}; margin-top:0;">${escapeHTML(data.title)}</h2>
            <p style="color:#ccc; font-size:15px; line-height:1.6;">${escapeHTML(data.desc)}</p>
            
            <div class="ai-workspace">
                <label style="color:var(--accent); font-size:13px; font-weight:bold; display:block; margin-bottom:8px;">🤖 أداة ${escapeHTML(data.title)} المباشرة:</label>
                <textarea id="platformAiInput" placeholder="${escapeHTML(data.placeholder)}"></textarea>
                <button class="ai-btn" onclick="runPlatformAi('${id}')">${escapeHTML(data.actionText)}</button>
                <div class="ai-result" id="platformAiResult"></div>
            </div>
        `;
        card.classList.add("show");
        view.scrollIntoView({ behavior: "smooth" });
    }, 200);
}

// تشغيل الذكاء الاصطناعي الفرعي للمنصة
function runPlatformAi(id) {
    const inputEl = document.getElementById("platformAiInput");
    const resBox = document.getElementById("platformAiResult");

    if (!inputEl || !resBox) return;

    const input = inputEl.value.trim();
    const engine = platformData[id]?.promptEngine;

    if (!input) {
        alert("برجاء كتابة البيانات المطلوب معالجتها أولاً.");
        return;
    }

    resBox.style.display = "block";
    resBox.innerHTML = '⚡ جاري التوليد بواسطة عقل MD7...';

    setTimeout(() => {
        if (engine) {
            const rawOutput = engine(input);
            resBox.innerHTML = escapeHTML(rawOutput).replace(/\n/g, "<br>");
        }
    }, 800);
}

// أداة مساعدة لتعقيم النصوص وحماية الواجهة من الأخطاء البرمجية
function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showDashboard() {
    const view = document.getElementById("activePlatformView");
    if (view) view.style.display = "none";
}
