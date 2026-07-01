<// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تأثير الانتقال الناعم (Smooth Scroll) عند الضغط على أزرار القائمة العلوبة
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // مسافة أمان لكي لا يختفي العنوان تحت الهيدر
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. تأثير ظهور بطاقات المشاريع بشكل جمالي عند التمرير (Scroll Animation)
    const projectCards = document.querySelectorAll('.project-card');
    
    const checkCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'all 0.6s ease-out';
            }
        });
    };

    // تعيين المظهر الأولي للبطاقات قبل التمرير لجعل الحركة تظهر بوضوح
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });

    // تشغيل الفحص عند التمرير وعند تحميل الصفحة لأول مرة
    window.addEventListener('scroll', checkCards);
    checkCards(); // تشغيل فوري للأشياء الظاهرة في الشاشة
});