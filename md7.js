// التشغيل والتحليل التلقائي الفوري لمركز الاستفسارات المتقدم للمجموعة MD7
(function() {
    console.log("بوابة المساعد الذكي الصوتي MD7 جاهزة لمعالجة استفسارات العملاء.");
    
    const btnAskAvatar = document.getElementById('btnAskAvatar');
    if(btnAskAvatar) {
        btnAskAvatar.addEventListener('click', () => {
            const query = document.getElementById('faqQuestion').value.trim().toLowerCase();
            const answerBox = document.getElementById('avatarAnswer');
            const textEl = document.getElementById('answerText');
            const audioEl = document.getElementById('answerAudio');
            
            if(!query) { alert("من فضلك اكتب سؤالك أولاً لتحليله."); return; }
            
            // رد افتراضي يوجه للمراسلة عبر الإيميل الذي تجيب من خلاله مباشرة
            let answer = "أهلاً بك في مجموعة شركات MD7 GROUP. يمكنك دائماً التواصل مع الإدارة التنفيذية عبر البريد الإلكتروني avtarpreins@gmail.com لتلقي الدعم الكامل والرد الفوري.";
            
            if(query.includes("حجز") || query.includes("سياح") || query.includes("رحل")) {
                answer = "منظومة حجز البرامج السياحية بمجموعة MD7 تتيح لك حالياً باقة الرفاهية الملكية وباقة العائلات. يمكنك إصدار تذكرتك فوراً من منصة MD2.";
            } else if(query.includes("سهم") || query.includes("اكتتاب") || query.includes("استثمار")) {
                answer = "تم فتح باب الاكتتاب الاستثماري العام رسمياً لحصص تصل إلى 50% لعام 2026. يرجى تقديم طلبك بالقسم المخصص لتتم مراجعته وتأكيده عبر الواتساب.";
            } else if(query.includes("فكرة") || query.includes("ابداع") || query.includes("نظافة") || query.includes("قمامة") || query.includes("طعام")) {
                answer = "مشروع تدوير بقايا الطعام العضوي وصناديق القمامة الذكية متوفر الآن في منصة MD1 لدعم استدامة البيئة.";
            }

            textEl.innerText = answer;
            if(answerBox) answerBox.style.display = 'block';
            if(audioEl) audioEl.play().catch(e => console.log("الصوت يحتاج تفاعل يدوي أول مرة لتشغيله آلياً"));
        });
    }
})();
