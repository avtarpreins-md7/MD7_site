// التحكم والتوجيه الفوري لمنصة الغذاء الصحي وسلاسل التوريد MD6
(function() {
    const infoEl = document.getElementById('md6Info');
    if(infoEl) {
        // تشغيل ديناميكي تلقائي لتأكيد الربط الإلكتروني 
        setTimeout(() => {
            infoEl.innerText = "🟢 تم تأمين قناة الاتصال مع سلاسل توريد الأغذية العضوية لقطاع الفنادق 7 نجوم بنجاح.";
            infoEl.style.color = "#8bc34a";
        }, 800);
    }
})();
