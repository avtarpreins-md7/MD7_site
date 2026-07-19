// تشغيل وتجهيز آلي لاستوديو المحتوى وإنتاج السيناريوهات لمنصة MD3
(function() {
    console.log("تحديث منصة MD3: تم معالجة مشكلة عدم فتح النافذة على الهواتف بنجاح.");
    
    const btnGenerateBook = document.getElementById('btnGenerateBook');
    if(btnGenerateBook) {
        btnGenerateBook.addEventListener('click', () => {
            const title = document.getElementById('bookTitle').value.trim();
            const author = document.getElementById('bookAuthor').value.trim();
            const content = document.getElementById('bookContent').value.trim();
            const md3User = document.getElementById('md3Username').value.trim() || 'Guest'; 
            
            // 1. التحقق من قيود عدد الأحرف (20 إلى 2000 حرف)
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
            
            // 2. إنشاء حاوية الطباعة الفاخرة داخل نفس الصفحة لتجنب حظر المتصفح
            let printArea = document.getElementById('md3PrintArea');
            if (!printArea) {
                printArea = document.createElement('div');
                printArea.id = 'md3PrintArea';
                document.body.appendChild(printArea);
            }
            
            // 3. حقن التصميم الملكي المطلق (خلفية سوداء، خط ذهبي، علامة مائية)
            printArea.innerHTML = `
                <div class="md3-watermark">MD7 GROUP</div>
                <div class="md3-container">
                    <div class="md3-header-box">
                        <h1>السيناريو: ${title}</h1>
                        <div class="md3-meta-info">
                            <span>بواسطة: ${author}</span> | <span>المستعرض: ${md3User}</span>
                        </div>
                    </div>
                    <div class="md3-main-content">${content}</div>
                </div>
                
                <style>
                    /* ستايل العرض العادي المخفي في الصفحة */
                    #md3PrintArea { display: none; }
                    
                    /* ستايل الطباعة الفاخرة */
                    @media print {
                        body * { display: none !important; } /* إخفاء كل عناصر الموقع الأساسي */
                        html, body { background-color: #000000 !important; color: #D4AF37 !important; margin: 0; padding: 0; }
                        
                        #md3PrintArea { 
                            display: block !important; 
                            background-color: #000000 !important; 
                            color: #D4AF37 !important; 
                            font-family: 'Cairo', sans-serif;
                            padding: 40px;
                            min-height: 100vh;
                            position: relative;
                            box-sizing: border-box;
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                        
                        .md3-watermark {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) rotate(-30deg);
                            font-size: 100px;
                            font-weight: 900;
                            color: rgba(212, 175, 55, 0.07) !important;
                            z-index: 0;
                            pointer-events: none;
                            white-space: nowrap;
                            border: 6px solid rgba(212, 175, 55, 0.05);
                            padding: 10px 30px;
                            border-radius: 20px;
                        }
                        
                        .md3-container { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; direction: rtl; }
                        .md3-header-box { border-bottom: 3px double #D4AF37; padding-bottom: 15px; margin-bottom: 30px; text-align: center; }
                        .md3-header-box h1 { font-size: 32px; font-weight: 900; margin: 0 0 10px 0; color: #D4AF37; }
                        .md3-meta-info { font-size: 13px; color: #e5c158; opacity: 0.8; }
                        .md3-main-content { font-size: 17px; line-height: 1.8; text-align: justify; white-space: pre-wrap; }
                    }
                </style>
            `;
            
            // 4. استدعاء أمر الطباعة والحفظ الفوري
            setTimeout(() => {
                window.print();
            }, 300);
        });
    }
})();
