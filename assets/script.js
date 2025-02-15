function validateForm() {
    // دریافت مقدار فیلدهای ورودی
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwordkey").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let errormsg = document.querySelector('p');

    // بررسی پر بودن تمام فیلدها
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        showError("همه فیلدها باید پر شوند.");
        return false;
    }

    // بررسی صحت فرمت ایمیل
    if (!validateEmail(email)) {
        showError("ایمیل دارای فرمت معتبر نیست.");
        return false;
    }

    // بررسی حداقل طول رمز عبور
    if (password.length < 8) {
        showError("رمز عبور باید حداقل ۸ کاراکتر داشته باشد.");
        return false;
    }

    // بررسی یکسان بودن رمز عبور و تکرار آن
    if (password !== confirmPassword) {
        showError("رمز عبور و تکرار آن باید یکسان باشند.");
        return false;
    }

    errormsg.style.display = "none";
    return true;
}

// تنظیم اجرای تابع اعتبارسنجی هنگام ارسال فرم
document.getElementById("form").onsubmit = function() {
     return validateForm();
};

// تابع بررسی فرمت ایمیل
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// نمایش پیام خطا
function showError(message) {
    let errorElement = document.querySelector("p");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
