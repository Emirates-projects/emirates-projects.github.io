(function() {
    console.log("جاري حقن أكواد جوجل...");

    // دالة مساعدة لتحويل النصوص إلى عناصر HTML حقيقية
    function injectCode(htmlCode, location = 'head') {
        const div = document.createElement('div');
        div.innerHTML = htmlCode;
        
        const scripts = div.getElementsByTagName('script');
        // التعامل مع السكربتات التنفيذية
        for (let i = 0; i < scripts.length; i++) {
            const newScript = document.createElement('script');
            if (scripts[i].src) {
                newScript.src = scripts[i].src;
                newScript.async = true;
            } else {
                newScript.text = scripts[i].text;
            }
            document.head.appendChild(newScript);
        }
        
        // التعامل مع بقية العناصر (مثل meta tags, noscript)
        // ملاحظة: المتصفحات قد لا تظهر التغييرات في الـ View Source لكنها تعمل
    }

    /* 
    ####################################################################
    ####################################################################
    
          🔴🔴🔴      ضع كود جوجل هنا (المنطقة الأولى)      🔴🔴🔴
           (Google Analytics - Google Ads - Global Site Tag)
              
                 👇👇👇 امسح السطر التالي وضع الكود مكانه 👇👇👇

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S2D1EM8M0S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S2D1EM8M0S');
</script>
    
    const googleCode1 = `
    
       <!-- ضع الكود كما هو نسختيه من جوجل هنا -->
    
    `;

    /* 
    ####################################################################
    ####################################################################
    */

    // تنفيذ المنطقة الأولى
    if(googleCode1.trim().length > 10) injectCode(googleCode1);


    /* 
    ####################################################################
    ####################################################################

          🔴🔴🔴     لاضافة كود جديد (المنطقة الثانية)      🔴🔴🔴
              (Snapchat Pixel - Facebook Pixel - TikTok)
              
                 👇👇👇 ضع الكود الجديد هنا 👇👇👇
    */

    const extraCode = `
    
       <!-- ضع أي كود إضافي هنا -->

    `;

    /* 
    ####################################################################
    ####################################################################
    */

    // تنفيذ المنطقة الثانية
    if(extraCode.trim().length > 10) injectCode(extraCode);

})();
