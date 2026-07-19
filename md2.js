// تشغيل آلي لنظام التذاكر الرقمية المشفرة MD2
(function() {
    let generatedTicketData = null;
    const btnGenerateTicket = document.getElementById('btnGenerateTicket');
    const btnDownloadTicket = document.getElementById('btnDownloadTicket');

    if(btnGenerateTicket) {
        btnGenerateTicket.addEventListener('click', () => {
            const name = document.getElementById('tourName').value; 
            const phone = document.getElementById('tourPhone').value; 
            const date = document.getElementById('tourDate').value; 
            const packageText = document.getElementById('tourPackage').value;
            
            if(!name || !phone || !date) { alert("يرجى ملء جميع حقول الحجز."); return; }
            
            const ticketID = "MD7-TOUR-" + Date.now();
            document.getElementById('ticketDetails').innerHTML = `<b>اسم العميل:</b> ${name}<br><b>نوع الباقة:</b> ${packageText}<br><b>تاريخ الرحلة:</b> ${date}<br><b>الرمز الفريد:</b> ${ticketID}`;
            
            document.getElementById('qrcode').innerHTML = ""; 
            new QRCode(document.getElementById("qrcode"), { text: ticketID, width: 140, height: 140 });
            
            generatedTicketData = { name, phone, date, packageText, ticketID };
            const preview = document.getElementById('ticketPreview');
            preview.style.display = 'block';
            preview.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if(btnDownloadTicket) {
        btnDownloadTicket.addEventListener('click', () => {
            if (!generatedTicketData) return;
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.setFillColor(13, 71, 161); 
            doc.rect(10, 10, 190, 40, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(22);
            doc.text("MD7 GROUP - OFFICIAL TICKET", 20, 30);
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(14);
            doc.text(`Customer Name: ${generatedTicketData.name}`, 20, 70);
            doc.text(`Package: ${generatedTicketData.packageText}`, 20, 85);
            doc.text(`Departure Date: ${generatedTicketData.date}`, 20, 100);
            doc.save(`MD7-Ticket-${generatedTicketData.ticketID}.pdf`);
        });
    }
})();
