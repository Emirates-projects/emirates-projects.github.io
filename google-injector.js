(function() {
    console.log("جاري حقن أكواد جوجل...");

    // دالة مساعدة لتحويل النصوص إلى عناصر HTML حقيقية
    function injectCode(htmlCode) {
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
    }

    /* 
    ####################################################################
    ####################################################################
    
          🔴🔴🔴      ضع كود جوجل هنا (المنطقة الأولى)      🔴🔴🔴
           (Google Analytics - Google Ads - Global Site Tag)
    */
    
    // 👇👇 التعديل الصحيح: الكود موضوع داخل العلامات `` 👇👇
    const googleCode1 = `
    
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S2D1EM8M0S"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S2D1EM8M0S');
        </script>

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
    */

    const extraCode = `
    
       <!-- ضع أي كود إضافي هنا مستقبلاً -->

    `;

    /* 
    ####################################################################
    ####################################################################
    */

    // تنفيذ المنطقة الثانية
    if(extraCode.trim().length > 10) injectCode(extraCode);
    /* 
    ####################################################################
    ####################################################################
          🍪🍪🍪      إعدادات نافذة الكوكيز (Cookie Consent)     🍪🍪🍪
    ####################################################################
    */

    (function createCookiePopup() {
        // التحقق مما إذا كان المستخدم قد وافق مسبقاً
        if (localStorage.getItem('cookieConsent') === 'accepted') return;

        // 1. إنشاء تصميم النافذة (CSS)
        const style = document.createElement('style');
        style.textContent = `
            #cookie-popup {
                position: fixed;
                bottom: 20px;
                left: 20px;
                right: 20px;
                background: #fff;
                color: #333;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                font-family: 'Tajawal', sans-serif;
                border: 1px solid #e5e7eb;
                direction: rtl;
            }
            @media (min-width: 768px) {
                #cookie-popup {
                    flex-direction: row;
                    justify-content: space-between;
                    text-align: right;
                    max-width: 900px;
                    margin: 0 auto;
                }
            }
            .cookie-content {
                margin-bottom: 15px;
            }
            @media (min-width: 768px) {
                .cookie-content { margin-bottom: 0; margin-left: 20px; }
            }
            .cookie-content h4 {
                margin: 0 0 5px;
                font-weight: bold;
                color: #1e3a8a;
            }
            .cookie-content p {
                margin: 0;
                font-size: 14px;
                color: #4b5563;
                line-height: 1.5;
            }
            .cookie-btn {
                background: #2563eb;
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s;
                white-space: nowrap;
            }
            .cookie-btn:hover {
                background: #1d4ed8;
            }
        `;
        document.head.appendChild(style);

        // 2. إنشاء عناصر النافذة (HTML)
        const popup = document.createElement('div');
        popup.id = 'cookie-popup';
        popup.innerHTML = `
            <div class="cookie-content">
                <h4>🍪 نحن نحترم خصوصيتك</h4>
                <p>نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا وتحليل الزيارات وتقديم محتوى مخصص. بمتابعة التصفح، فإنك توافق على استخدامنا لهذه الملفات.</p>
            </div>
            <button id="accept-cookies" class="cookie-btn">موافق، أكمل التصفح</button>
        `;
        document.body.appendChild(popup);

        // 3. برمجة زر الموافقة
        document.getElementById('accept-cookies').onclick = function() {
            // إخفاء النافذة
            popup.style.display = 'none';
            // حفظ الموافقة في المتصفح حتى لا تظهر مرة أخرى
            localStorage.setItem('cookieConsent', 'accepted');
        };
    })();
    /* 
    ####################################################################
    ####################################################################
          🇦🇪🇦🇪🇦🇪     هوية الشركة المحلية (Schema SEO)     🇦🇪🇦🇪🇦🇪
           تجعل جوجل يفهم أن النشاط في الإمارات لتعزيز الظهور المحلي
    ####################################################################
    */

    (function injectEmiratesSchema() {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness", 
            "name": "ديجيتال برو لحلول الأعمال الرقمية",
            "image": "https://emirates-projects.github.io/images/tax-card.jpg",
            "@id": "https://emirates-projects.github.io",
            "url": "https://emirates-projects.github.io",
            "telephone": "+201110760081",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business Bay",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"  // رمز الإمارات هو الأهم هنا
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.185623,  // إحداثيات تقريبية في دبي (الخليج التجاري)
                "longitude": 55.267323
            },
            "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates" // نخدم الإمارات بالكامل
            },
            "sameAs": [
                "https://wa.me/201110760081"
                // ضع هنا روابط السوشيال ميديا الخاصة بكم إن وجدت
            ],
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "09:00",
                "closes": "22:00"
            },
            "currenciesAccepted": "AED" // العملة المقبولة: درهم إماراتي
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);
        console.log("✅ تم تفعيل الهوية الإماراتية (Schema AE)");
    })();

})();
