// التهيئة الفورية لنظام عرض المنتجات وتتبع المبيعات بالمنصة الخامسة MD5
(function() {
    const localProducts = [
        { name: "ساعة رولكس كلاسيك 2026", desc: "ساعة يد ميكانيكية فاخرة بإطار من الذهب عيار 18 مطلي ومقاوم للخدش بالكامل.", price: "120000", phone: "01033182019" }
    ];

    function renderProducts() {
        const list = document.getElementById('productsList');
        if(!list) return;
        list.innerHTML = "";
        localProducts.forEach((p) => {
            list.innerHTML += `
                <div class="product-card">
                    <h4 style="color: #ff9800; margin: 0 0 8px 0; font-size:17px;">${p.name}</h4>
                    <p style="margin: 0 0 10px 0; font-size: 13px; color: var(--text-muted);">${p.desc}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:bold; color: #fff;">السعر: ${parseFloat(p.price).toLocaleString()} EGP</span>
                        <a href="https://wa.me/201033182019?text=أنا مهتم بشراء منتج: ${p.name}" target="_blank" style="background:#ff9800; color:#000; padding: 6px 12px; border-radius:8px; text-decoration:none; font-size:12px; font-weight:bold;">استعرض الآن</a>
                    </div>
                </div>
            `;
        });
    }

    const btnAddProduct = document.getElementById('btnAddProduct');
    if(btnAddProduct) {
        btnAddProduct.addEventListener('click', () => {
            const name = document.getElementById('productName').value;
            const desc = document.getElementById('productDesc').value;
            const price = document.getElementById('productPrice').value;
            const phone = document.getElementById('sellerPhone').value;
            
            if(!name || !desc || !price || !phone) { alert("يرجى ملء كافة تفاصيل المنتج."); return; }
            
            localProducts.unshift({ name, desc, price, phone });
            renderProducts();
            
            document.getElementById('productName').value = "";
            document.getElementById('productDesc').value = "";
            document.getElementById('productPrice').value = "";
            document.getElementById('sellerPhone').value = "";
        });
    }

    // التشغيل التلقائي لعرض المنتجات عند إقلاع الواجهة
    renderProducts();
})();
