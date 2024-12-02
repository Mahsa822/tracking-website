const shipments = {
    "123456": {
        location: "انبار در ایران",
        status: "در انتظار ترخیص",
        customer: "شرکت نمونه",
        dubaiArrival: "2024-12-01",
        iranArrival: "2024-12-05",
        flight: "ایرلاین XY123",
        company: "شرکت حمل و نقل",
        cost: "500 دلار",
        weight: "100 کیلوگرم",
        issues: "بدون مشکل",
        products: ["کتاب", "مداد"]
    },
    "789101": {
        location: "انبار در دبی",
        status: "در حال حمل",
        customer: "شرکت دیگر",
        dubaiArrival: "2024-11-25",
        iranArrival: "2024-11-30",
        flight: "ایرلاین YZ456",
        company: "شرکت حمل و نقل دیگر",
        cost: "700 دلار",
        weight: "200 کیلوگرم",
        issues: "تاخیر در دبی",
        products: ["لپ‌تاپ", "ماوس"]
    }
};

document.getElementById('trackButton').addEventListener('click', function() {
    const trackingNumber = document.getElementById('trackingInput').value;
    const resultDiv = document.getElementById('result');

    if (shipments[trackingNumber]) {
        const shipment = shipments[trackingNumber];
        resultDiv.innerHTML = `
            <h2>اطلاعات بار</h2>
            <p>مکان: ${shipment.location}</p>
            <p>وضعیت: ${shipment.status}</p>
            <p>نام مشتری: ${shipment.customer}</p>
            <p>تاریخ ورود به دبی: ${shipment.dubaiArrival}</p>
            <p>تاریخ ورود به ایران: ${shipment.iranArrival}</p>
            <p>پرواز: ${shipment.flight}</p>
            <p>شرکت حمل و نقل: ${shipment.company}</p>
            <p>هزینه: ${shipment.cost}</p>
            <p>وزن: ${shipment.weight}</p>
            <p>مشکلات: ${shipment.issues}</p>
            <p>محصولات: ${shipment.products.join(', ')}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p id="error">ترک نامبر یافت نشد!</p>';
    }
});
