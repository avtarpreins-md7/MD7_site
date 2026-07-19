// تشغيل وتجهيز آلي لاستوديو المحتوى وإنتاج السيناريوهات لمنصة MD3
(function() {
    console.log("منصة MD3 المحدثة جاهزة لدعم الخط العربي بالكامل والتصميم الفاخر.");
    
    const btnGenerateBook = document.getElementById('btnGenerateBook');
    if(btnGenerateBook) {
        btnGenerateBook.addEventListener('click', () => {
            const title = document.getElementById('bookTitle').value.trim();
            const author = document.getElementById('bookAuthor').value.trim();
            const content = document.getElementById('bookContent').value.trim();
            const md3User = document.getElementById('md3Username').value.trim() || 'Guest'; 
            
            // 1. التحقق من قيود عدد الأحرف المطلوبة
            if (!title || !content) { 
                alert("يرجى إدخال عنوان ومحتوى السيناريو الفني أولاً."); 
                return; 
            }
            
            if (content.length < 20) {
                alert(`عذراً، النص قصير جداً (${content.length} حرف). يجب أن يكون طول النص 20 حرفاً على الأقل.`);
                return;
            }
            
            if (content.length > 2000) {
                alert(`عذراً، النص يتجاوز الحد المسموح (${content.length} حرف). الحد الأقصى هو 2000 حرف.`);
                return;
            }
            
            // 2. إنشاء نافذة طباعة مخصصة لحفظ النص كـ PDF عربي فاخر ومطابق لطلبك
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html lang="ar" dir="rtl">
                <head>
                    <meta charset="UTF-8">
                    <title>MD3 Script - ${title}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
                    <style>
                        body {
                            background-color: #000000 !important;
                            color: #D4AF37 !important;
                            font-family: 'Cairo', sans-serif;
                            padding: 40px;
                            margin: 0;
                            position: relative;
                            min-height: 100vh;
                            box-sizing: border-box;
                            -webkit-print-color-adjust: exact; /* لضمان طباعة الخلفية السوداء */
                            print-color-adjust: exact;
                        }
                        
                        /* الختم كعلامة مائية في منتصف الصفحة */
                        .watermark {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-30deg);
                            font-size: 130px;
                            font-weight: 900;
                            color: rgba(212, 175, 55, 0.06); /* لون ذهبي شفاف جداً */
                            z-index: 0;
                            pointer-events: none;
                            white-space: nowrap;
                            font-family: 'Cairo', sans-serif;
                            border: 8px solid rgba(212, 175, 55, 0.04);
                            padding: 10px 40px;
                            border-radius: 20px;
                        }
                        
                        .container {
                            position: relative;
                            z-index: 1;
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        
                        .header-box {
                            border-bottom: 3px double #D4AF37;
                            padding-bottom: 20px;
                            margin-bottom: 40px;
                            text-align: center;
                        }
                        
                        h1 {
                            font-size: 36px;
                            font-weight: 900;
                            margin: 0 0 15px 0;
                            color: #D4AF37;
                        }
                        
                        .meta-info {
                            font-size: 14px;
                            color: #e5c158;
                            opacity: 0.8;
                        }
                        
                        .main-content {
                            font-size: 18px;
                            line-height: 1.9;
                            text-align: justify;
                            white-space: pre-wrap; /* يحافظ على الفراغات والأسطر الجديدة */
                        }
                        
                        /* إخفاء أي عناصر غير ضرورية عند الطباعة */
                        @media print {
                            body { background-color: #000000 !important; color: #D4AF37 !important; }
                            .watermark { color: rgba(212, 175, 55, 0.06) !important; }
                        }
                    </style>
                </head>
                <body>
                    <div class="watermark">MD7 GROUP</div>
                    <div class="container">
                        <div class="header-box">
                            <h1>السيناريو: ${title}</h1>
                            <div class="meta-info">
                                <span>بواسطة: ${author}</span> | <span>المستعرض: ${md3User}</span>
                            </div>
                        </div>
                        <div class="main-content">${content}</div>
                    </div>
                    <script>
                        // تشغيل الطباعة تلقائياً فور تحميل الصفحة
                        window.onload = function() {
                            setTimeout(function() {
                                window.print();
                            }, 500);
                        };
                    <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
        });
    }
})();
