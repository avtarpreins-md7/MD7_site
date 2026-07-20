// كود تشغيل منصة MD4 - محاكي ونظم تشغيل الطاقة المتجددة والبنية التحتية الذكية
(function() {
    const statusText = document.getElementById('md4StatusText');
    if(statusText) {
        setTimeout(() => {
            statusText.innerHTML = `
                💡 <span style='color:#4caf50; font-weight:bold;'>اتصال ناجح بالشبكة الذكية!</span><br>
                ☀️ خلايا الطاقة الشمسية الذكية: تعمل بكفاءة مستقرة.<br>
                🚛 أسطول النظافة الذكي: الصناديق الثنائية مراقبة بنسبة 100%.<br>
                🛣️ نظام رصف الطرق: جدولة الصيانة الدورية تعمل بنجاح.
            `;
        }, 1500);
    }
})();
