// تشغيل وتجهيز آلي لاستوديو المحتوى وإنتاج السيناريوهات لمنصة MD3
(function() {
    console.log("منصة MD3 مستعدة للربط التلقائي وتخزين اسم المستخدم الفني.");
    
    const btnGenerateBook = document.getElementById('btnGenerateBook');
    if(btnGenerateBook) {
        btnGenerateBook.addEventListener('click', () => {
            const title = document.getElementById('bookTitle').value;
            const author = document.getElementById('bookAuthor').value;
            const content = document.getElementById('bookContent').value;
            const md3User = document.getElementById('md3Username').value; 
            
            if (!title || !content) { alert("يرجى إدخال عنوان ومحتوى السيناريو الفني."); return; }
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            doc.setFillColor(156, 39, 176); 
            doc.rect(10, 10, 190, 30, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(18);
            doc.text(`Title: ${title}`, 20, 25);
            
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            doc.text(`Created by: ${author} (User: ${md3User || 'Guest'})`, 20, 55);
            
            const splitText = doc.splitTextToSize(content, 170);
            doc.text(splitText, 20, 80);
            
            doc.save(`MD3-Script-${title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
        });
    }
})();
