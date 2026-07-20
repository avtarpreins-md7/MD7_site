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
})();<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>هرم الواقع الافتراضي | MD7</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Cairo', sans-serif; background: #0a0a0a; color: #e0e0e0; margin: 0; padding: 0; line-height: 1.9; }
  .hero-img { width: 100%; max-height: 600px; object-fit: cover; border-bottom: 3px solid #d4af37; }
  .container { max-width: 1000px; margin: auto; padding: 60px 20px; }
  h1 { font-size: 42px; color: #d4af37; text-align: center; margin-bottom: 5px; }
  h2 { font-size: 28px; color: #00AEEF; text-align: center; margin-bottom: 40px; }
  h3 { color: #d4af37; font-size: 24px; margin-top: 0; border-bottom: 2px solid #333; padding-bottom: 10px; }
  .card { background: #111; border: 1px solid #333; border-radius: 20px; padding: 30px; margin-bottom: 25px; }
  .info { text-align: left; color: #aaa; font-size: 14px; margin-bottom: 30px; }
  .info span { color: #d4af37; font-weight: 700; }
  table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 15px; }
  th, td { border: 1px solid #333; padding: 10px; text-align: right; }
  th { background: #1a1a1a; color: #00AEEF; }
  tr:nth-child(even) { background: #0f0f0f; }
  .total { color: #d4af37; font-weight: 900; }
  .btn-back { display: inline-block; background: #333; color: white; padding: 12px 25px; border-radius: 12px; text-decoration: none; margin-top: 30px; }
  ul { padding-right: 20px; }
</style>
</head>
<body>
  <img src="pyramid-design.jpg" alt="تصميم هرم الواقع الافتراضي MD7" class="hero-img">
  
  <div class="container">
    <div class="info">
      محمد رضوان محمد | 201033182019 <br>
      <a href="mailto:medo1999rd@gmail.com" style="color:#00AEEF;">medo1999rd@gmail.com</a>
    </div>
    
    <h1>هرم الواقع الافتراضي</h1>
    <h2>مشروع سياحي تكنولوجي تفاعلي</h2>

    <div class="card">
      <h3>المقدمة</h3>
      <p>
        في عصر أصبحت التكنولوجيا دور مهم لا غنى عنه في حياتنا وأصبحت لغة العصر الحديث ونحن بلد يمتاز بتاريخ وحضارة عريقة جذبت أذهان البشر على مدار العصور هنا يظهر هرم الواقع الافتراضي النموذج الذي يدمج العصور بالتكنولوجيا بالماضي ويسمح للزوار بخوض تجربة حقيقية يعيش فيها داخل التاريخ المصري العظيم وهكذا نفتح الباب أمام تجربة جديدة تضيف بعدا مختلفا عن ما اعتدنا عليه.
      </p>
    </div>

    <div class="card">
      <h3>تعريف المشروع</h3>
      <p>
        المشروع عبارة عن إنشاء معلم سياحي تفاعلي مبتكر في محيط منطقة الأهرامات، يعتمد على تصميم معماري مستوحى من الشكل الهرمي باستخدام الزجاج، مع ممر محاط بشاشات و دمج تقنيات الواقع الافتراضي (VR).
      </p>
      <p>
        ويدعم الطاقة النظيفة عبر ألواح طاقة شمسية لتوفير الطاقة مما يميز تجربة سياحية حديثة مستوحاة من الحضارة المصرية القديمة.
      </p>
      <p>
        <strong>هدف المشروع:</strong> تقديم تجربة ترفيهية وثقافية تجمع بين التاريخ والتكنولوجيا، دون المساس بالقيمة الأثرية أو التاريخية للموقع.
      </p>
    </div>

    <div class="card">
      <h3>مقاسات المبنى</h3>
      <ul>
        <li><strong>أبعاد المبنى:</strong> قاعدة 20 × 20 م، ارتفاع 12 م</li>
        <li><strong>عدد الأدوار:</strong> 4 أدوار، كل دور 3 م</li>
        <li><strong>المساحة الإجمالية:</strong> 680 م²</li>
        <li><strong>هيكل المبنى:</strong> ستيل + واجهات زجاج ذكي</li>
      </ul>
    </div>

    <div class="card">
      <h3>الجدول المالي</h3>
      <h4 style="color:#00AEEF;">1. تكلفة المبنى</h4>
      <table>
        <tr><th>البند</th><th>الكمية</th><th>سعر الوحدة</th><th>الإجمالي</th></tr>
        <tr><td>هيكل ستيل للمبنى</td><td>680 م²</td><td>5,500 ج/م²</td><td>3,740,000 ج</td></tr>
        <tr><td>واجهات زجاج ذكي</td><td>350 م²</td><td>3,800 ج/م²</td><td>1,330,000 ج</td></tr>
        <tr><td>زجاج كهروضوئي</td><td>70 م²</td><td>4,500 ج/م²</td><td>315,000 ج</td></tr>
        <tr><td>تشطيبات داخلية بسيطة</td><td>680 م²</td><td>1,800 ج/م²</td><td>1,224,000 ج</td></tr>
        <tr><td>أعمال كهرباء وسباكة وتكييف</td><td>680 م²</td><td>1,200 ج/م²</td><td>816,000 ج</td></tr>
        <tr><td>باركنج مظلل</td><td>500 م²</td><td>800 ج/م²</td><td>400,000 ج</td></tr>
        <tr><td colspan="3">الإجمالي المباشر</td><td>7,825,000 ج</td></tr>
        <tr><td colspan="3">تصميم وإشراف وتراخيص 20%</td><td>1,565,000 ج</td></tr>
        <tr class="total"><td colspan="3">الإجمالي الكلي مباني</td><td>9,390,000 ج ≈ $ 193,000</td></tr>
      </table>

      <h4 style="color:#00AEEF; margin-top:30px;">2. تكلفة الأجهزة التقنية</h4>
      <table>
        <tr><th>البند</th><th>العدد</th><th>سعر الوحدة</th><th>الإجمالي</th></tr>
        <tr><td>نظارة VR عالية الجودة</td><td>20</td><td>45,000 ج</td><td>900,000 ج</td></tr>
        <tr><td>كمبيوتر تشغيل لكل نظارة</td><td>20</td><td>55,000 ج</td><td>1,100,000 ج</td></tr>
        <tr><td>Base سيستم تتبع ومحطات</td><td>20</td><td>8,000 ج</td><td>160,000 ج</td></tr>
        <tr><td>شاشات عرض طولي LED طرقة 12 x 2 ارتفاع</td><td>18</td><td>450,000 ج</td><td></td></tr>
        <tr><td>سيستم صوتي محيطي</td><td>1</td><td>150,000 ج</td><td></td></tr>
        <tr><td>خوادم + شبكة + سيرفر محلي</td><td>1</td><td>120,000 ج</td><td></td></tr>
        <tr class="total"><td colspan="3">إجمالي الأجهزة</td><td>2,880,000 ج</td></tr>
      </table>
      
      <table style="margin-top:15px;">
        <tr><td>إنشاء مباني</td><td>9,390,000 ج</td></tr>
        <tr><td>الأجهزة التقنية</td><td>2,880,000 ج</td></tr>
        <tr><td>نظام الطاقة الشمسية 115 كيلوات</td><td>1,840,000 ج</td></tr>
        <tr class="total"><td>الإجمالي الكلي</td><td>14,110,000 ج ≈ $ 289,000</td></tr>
      </table>
    </div>

    <div class="card">
      <h3>الإيراد والتشغيل المتوقع</h3>
      <table>
        <tr><td>الطاقة الاستيعابية</td><td>90 زائر يومياً</td></tr>
        <tr><td>أيام التشغيل</td><td>300 يوماً سنوياً</td></tr>
        <tr><td>نسبة الزوار المصريين</td><td>40%</td></tr>
        <tr><td>نسبة الزوار الأجانب</td><td>60%</td></tr>
        <tr><td>سعر التذكرة للمصري</td><td>200 ج</td></tr>
        <tr><td>سعر التذكرة للأجانب</td><td>$25</td></tr>
        <tr><td>متوسط الإيراد اليومي</td><td>74,700 ج</td></tr>
        <tr><td>الإيراد السنوي المتوقع</td><td>22,410,000 ج</td></tr>
        <tr><td>مصاريف التشغيل السنوية</td><td>2,210,000 ج</td></tr>
        <tr class="total"><td>صافي الربح السنوي المتوقع</td><td>20,100,000 ج</td></tr>
      </table>
      <p style="font-size:14px; color:#aaa; margin-top:10px;">
        <strong>ملاحظات تشغيلية:</strong> يعتمد النموذج المالي على متوسط حضور يومي تقديري قابل للزيادة في المواسم السياحية. تم احتساب متوسط سعر صرف تقريبي للدولار أثناء إعداد الدراسة. الأرقام المذكورة تقديرية وقابلة للتطوير بعد الدراسة التنفيذية النهائية.
      </p>
    </div>

    <div class="card">
      <h3>خطة التنفيذ</h3>
      <ul>
        <li><strong>1. التصاريح والتراخيص:</strong> أسبوعين إلى أسبوعين. الحصول على التصاريح المبنية من الجهات المختصة ووزارة السياحة وتحديد وتجهيز قطعة أرض مناسبة بالقرب من هضبة الجيزة.</li>
        <li><strong>2. التصميم الهندسي والمعماري:</strong> من 2 إلى 4 أسابيع. إعداد التصميم الهندسي والمعماري للمشروع، تجهيز الرسومات والتصورات الداخلية والخارجية، تحديد توزيع الأدوار والتجارب التفاعلية.</li>
        <li><strong>3. توريد وتجهيز المواد:</strong> من 6 إلى 8 أسابيع. المواد الأساسية: دعامات معدنية، ألواح زجاج الواجهات، أنظمة الطاقة الشمسية، شاشات وتقنيات عرض، أجهزة ونظارات الواقع الافتراضي (VR).</li>
        <li><strong>4. مرحلة الإنشاء والبناء:</strong> من 3 إلى 5 أشهر. تنفيذ الهيكل الأساسي للمبنى، تركيب الواجهات الزجاجية، تجهيز البنية التحتية والتجارب التفاعلية.</li>
        <li><strong>5. التشطيبات والتجهيزات النهائية:</strong> من أسبوعين إلى شهر. التشطيبات الداخلية والديكور، تركيب أنظمة الإضاءة والصوت، اختبار الأنظمة والتجهيزات.</li>
        <li><strong>6. التشغيل التجريبي والافتتاح:</strong> أسبوع تشغيل تجريبي لاختبار الزوار والأنظمة، معالجة أي ملاحظات نهائية، الافتتاح الرسمي للمشروع.</li>
      </ul>
      <p><strong>الفترة الزمنية الإجمالية:</strong> من المتوقع تنفيذ المشروع خلال فترة تتراوح بين 5 إلى 8 أشهر كحد أقصى، وفقاً لسرعة الإجراءات والتجهيزات.</p>
    </div>

    <div class="card">
      <h3>الخاتمة</h3>
      <p>
        "مصر تشهر دائماً على مر العصور، مواكبة لكل عصر ومحفزة للبشرية على طريق التنمية. أرجو أن أكون قد قمت بهدف الفكرة من بشكل مبسط. هذه مجرد البداية، والمشروع قابل للتوسع داخل مصر وخارجها، ليكون نموذجاً جديداً يضيف لمسة إبداعية للسياحة."
      </p>
      <p>
        جميع التكاليف والفترات الزمنية المذكورة هي تقديرات مبدئية قابلة للتطوير بعد الدراسات الهندسية والتنفيذية النهائية. 
        <br><br>
        المشروع متاح للشراكة الاستثمارية وفق نموذج تمويلي قابل للتفاوض بما يحقق مصلحة جميع الأطراف. تفاصيل نسب الشراكة والعوائد الاستثمارية يتم تحديدها بعد الاتفاق النهائي ودراسة مراحل التنفيذ.
      </p>
    </div>

    <a href="vr-hub.html" class="btn-back">← رجوع لمركز VR</a>
  </div>
</body>
</html>

