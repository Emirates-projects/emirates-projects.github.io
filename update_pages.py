import os

# اسم السكربت الذي نريد زراعته
script_tag = '<script src="google-injector.js"></script>'

# تحديد المسار الحالي
current_directory = os.getcwd()

print("--- بدء عملية تحديث الصفحات ---")

# البحث في جميع الملفات والمجلدات
for root, dirs, files in os.walk(current_directory):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # التحقق مما إذا كان السطر موجوداً مسبقاً
            if "google-injector.js" in content:
                print(f"✅ موجود بالفعل: {file}")
            else:
                # البحث عن وسم الإغلاق body
                if "</body>" in content:
                    # إضافة السكربت قبل إغلاق الـ body
                    new_content = content.replace("</body>", f"{script_tag}\n</body>")
                    
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"🔥 تم التحديث بنجاح: {file}")
                else:
                    print(f"⚠️ تخطي (لا يوجد وسم body): {file}")

print("--- انتهت العملية ---")
