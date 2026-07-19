// نظام إدارة وتوليد وثائق قطاع الطاقة المتجددة لمنصة MD2
(function() {
    console.log("تحديث منصة MD2: تم تحويل القطاع إلى الطاقة المتجددة ونقل الطاقة لاسلكياً بنجاح.");
    
    const btnGenerateTicket = document.getElementById('btnGenerateTicket');
    if(btnGenerateTicket) {
        // تحديث نص الزرار الأساسي في الواجهة ليتناسب مع قطاع الطاقة
        btnGenerateTicket.innerText = "🎫 إصدار وثيقة تكنولوجيا الطاقة الفورية";

        btnGenerateTicket.addEventListener('click', () => {
            const clientName = document.getElementById('tourName').value.trim() || 'شريك مستقبلي';
            const clientPhone = document.getElementById('tourPhone').value.trim() || 'غير مسجل';
            const selectedTech = document.getElementById('tourPackage').value;
            
            // 1. إنشاء حاوية توليد المستند داخل نفس الصفحة لتجنب حظر الهواتف
            let energyPrintArea = document.getElementById('md2EnergyPrintArea');
            if (!energyPrintArea) {
                energyPrintArea = document.createElement('div');
                energyPrintArea.id = 'md2EnergyPrintArea';
                document.body.appendChild(energyPrintArea);
            }
            
            // 2. حقن هيكلية كود الطاقة المتجددة والتصميم المطلوب مع العلامة المائية الفاخرة لـ MD7
            energyPrintArea.innerHTML = `
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>MD2 الطاقة المتجددة واللاسلكية</title>
                    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;800&display=swap" rel="stylesheet">
                    <style>
                        /* إخفاء الحاوية في العرض العادي داخل الموقع */
                        #md2EnergyPrintArea { display: none; }
                        
                        /* خصائص وجماليات مستند الطباعة والحفظ الفاخر */
                        @media print {
                            body * { display: none !important; } /* إخفاء بقية عناصر الموقع */
                            html, body { 
                                background: #0A0A0A !important; 
                                color: #EAEAEA !important; 
                                font-family: 'Tajawal', sans-serif; 
                                padding: 50px; 
                                text-align: center;
                                margin: 0;
                                min-height: 100vh;
                                -webkit-print-color-adjust: exact;
                                print-color-adjust: exact;
                            }
                            
                            #md2EnergyPrintArea { 
                                display: block !important; 
                                position: relative;
                            }
                            
                            h1 { 
                                color: #E67E22 !important; 
                                font-weight: 800;
                                font-size: 36px;
                                margin-bottom: 40px;
                                border-bottom: 2px dashed #E67E22;
                                padding-bottom: 15px;
                            }
                            
                            p { 
                                font-size: 18px; 
                                line-height: 2; 
                                text-align: right; 
                                max-width: 700px; 
                                margin: 15px auto;
                                background: rgba(255,255,255,0.02);
                                padding: 10px 20px;
                                border-radius: 8px;
                            }
                            
                            .meta-box {
                                margin-top: 50px;
                                padding: 15px;
                                border: 1px solid rgba(230, 126, 34, 0.3);
                                border-radius: 12px;
                                font-size: 14px;
                                color: #ffab66;
                                text-align: center;
                            }

                            .md7-watermark {
                                position: fixed;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%) rotate(-30deg);
                                font-size: 90px;
                                font-weight: 900;
                                color: rgba(232, 126, 34, 0.05) !important;
                                z-index: 0;
                                pointer-events: none;
                                white-space: nowrap;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="md7-watermark">MD7 GROUP</div>
                    
                    <h1>⚡ ملف تكنولوجيا الطاقة المتجددة واللاسلكية</h1>
                    
                    <p>1. استخدام ألواح الطاقة الشمسية المتطورة ونظم توليد طاقة الرياح الهجينة.</p>
                    <p>2. تطوير وبناء تقنية نقل الطاقة لاسلكياً (Wireless Power Transfer) داخل نطاق وحيز المكان المحدد كفاءة تامة.</p>
                    <p>3. ابتكار حلول بيئية مستدامة وهندسية لدعم الأمن الغذائي والزراعي الذكي.</p>
                    
                    <div class="meta-box">
                        <strong>شريك الشراكة والتطوير المستهدف:</strong> ${clientName} | 
                        <strong>رقم التواصل الآمن:</strong> ${clientPhone} <br>
                        <strong>النظام المحدد:</strong> ${selectedTech}
                    </div>
                </body>
                </html>
            `;
            
            // 3. استدعاء معالج الطباعة الفوري الآمن للهواتف والمتصفحات
            setTimeout(() => {
                window.print();
            }, 300);
        });
    }
})();
