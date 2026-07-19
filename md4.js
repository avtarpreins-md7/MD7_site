// محرك التشغيل التلقائي لمنصة المدن والمرافق MD4
(function() {
    const statusText = document.getElementById('md4StatusText');
    if(statusText) {
        // تشغيل آلي فور استدعاء الصفحة لمحاكاة الاستجابة السريعة للخادم
        setTimeout(() => {
            statusText.innerText = "⚡ تم الاتصال بخادم المرافق بنجاح. البنية التحتية والخريطة التفاعلية 360 نشطة بالكامل.";
            statusText.style.color = "#4caf50";
        }, 1200);
    }
})();
