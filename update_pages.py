import os
import time
from datetime import datetime

# ==========================================
# إعدادات المراقب
# ==========================================
SCRIPT_TAG = '<script src="google-injector.js"></script>'
CHECK_INTERVAL = 3  # الفحص كل 3 ثواني

def inject_script_if_missing():
    current_directory = os.getcwd()
    changes_made = False

    # المرور على جميع الملفات
    for root, dirs, files in os.walk(current_directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # التحقق: هل السكربت موجود؟ وهل وسم body موجود؟
                    if SCRIPT_TAG not in content and "</body>" in content:
                        print(f"⚡ تم اكتشاف ملف جديد/معدل: {file}")
                        
                        # إضافة السكربت
                        new_content = content.replace("</body>", f"{SCRIPT_TAG}\n</body>")
                        
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        
                        print(f"✅ تم الحقن بنجاح في: {file}")
                        changes_made = True
                
                except Exception as e:
                    print(f"خطأ في قراءة الملف {file}: {e}")

    return changes_made

# ==========================================
# حلقة المراقبة المستمرة
# ==========================================
print("--- 👁️  بدء نظام المراقبة الآلي ---")
print("سيتم فحص الملفات كل 3 ثوانٍ... (لا تغلق هذه النافذة)")
print("لإيقاف البرنامج اضغط: Ctrl + C")
print("-" * 40)

try:
    while True:
        # تشغيل دالة الفحص
        inject_script_if_missing()
        
        # الانتظار قبل الفحص التالي
        time.sleep(CHECK_INTERVAL)

except KeyboardInterrupt:
    print("\n🛑 تم إيقاف المراقب بنجاح.")
