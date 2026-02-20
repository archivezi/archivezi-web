// فایل جاوااسکریپت ساده برای تست
function runJavaScript() {
    // یه پیام ساده توی کنسول
    console.log("✅ دکمه کلیک شد - " + new Date().toLocaleTimeString('fa-IR'));
    
    // پیدا کردن محل نمایش نتیجه
    const resultDiv = document.getElementById('result');
    
    // یه متن ساده توی صفحه
    resultDiv.innerHTML = `
        ✅ جاوااسکریپت اجرا شد!<br>
        ⏰ ساعت: ${new Date().toLocaleTimeString('fa-IR')}<br>
        🎲 عدد تصادفی: ${Math.floor(Math.random() * 1000)}
    `;
    
    // تغییر رنگ background به صورت تصادفی
    document.querySelector('.container').style.backgroundColor = 
        '#' + Math.floor(Math.random()*16777215).toString(16);
}
