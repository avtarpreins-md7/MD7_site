// تشغيل آلي عند تحميل الملف لمنصة MD1
(function() {
    console.log("تفعيل منصة MD1 التلقائي: نظام فرز النفايات والمكافآت الذكي نشط.");
    
    const weightInput = document.getElementById('binWeightInput');
    const materialSelect = document.getElementById('binMaterialType');
    
    function calculateBinPoints() {
        if(!weightInput || !materialSelect) return;
        const type = materialSelect.value;
        const weight = parseFloat(weightInput.value) || 0;
        const screen = document.getElementById('binScreenText');
        
        let pointsPer100g = type === 'food' ? 10 : 5;
        let totalPoints = Math.round((weight / 100) * pointsPer100g);
        
        document.getElementById('calculatedPointsDisplay').innerText = `${totalPoints} نقطة مكافأة`;
        if(screen) screen.innerText = `${totalPoints} PTS`;
    }

    if(weightInput) weightInput.addEventListener('input', calculateBinPoints);
    if(materialSelect) materialSelect.addEventListener('change', calculateBinPoints);

    const btnSendIdea = document.getElementById('btnSendIdea');
    if(btnSendIdea) {
        btnSendIdea.addEventListener('click', () => {
            const title = document.getElementById('ideaTitle').value; 
            const desc = document.getElementById('ideaDesc').value; 
            const phone = document.getElementById('ideaPhone').value;
            const points = document.getElementById('calculatedPointsDisplay').innerText;
            if(!title || !desc || !phone){ alert("يرجى إدخال البيانات المطلوبة."); return; }
            
            window.open(`https://wa.me/201033182019?text=إشعار مشروع النفايات MD1:%0A- الاسم: ${title}%0A- النقاط: ${points}%0A- المقترح: ${desc}%0A- هاتف: ${phone}`, '_blank');
            document.getElementById('ideaMsgText').style.display = 'block';
        });
    }
})();
