// REGISTER
const registerForm = document.querySelector(".register-card");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            email: document.getElementById("email").value, // ✅ FIXED
            password: document.getElementById("password").value,
            isVerified: false,
            role: "admin"
        };

        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "verify_email.html";
    });
}

// VERIFY EMAIL
const verifyBtn = document.getElementById("verifyBtn");

if (verifyBtn) {
    verifyBtn.addEventListener("click", function () {
        let user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            user.isVerified = true;
            localStorage.setItem("user", JSON.stringify(user));
        }

        localStorage.setItem("justVerified", "true"); // ✅ ADDED

        window.location.href = "login.html";
    });
}

// SHOW VERIFY NOTIFICATION (ONLY ONCE)
const verifyMsg = document.getElementById("verifyMsg");
const justVerified = localStorage.getItem("justVerified");

if (verifyMsg && justVerified === "true") {
    verifyMsg.style.display = "block";

    localStorage.removeItem("justVerified");

    setTimeout(() => {
        verifyMsg.style.display = "none";
    }, 3000);
}

// LOGIN
const loginForm = document.querySelector(".login-card");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found!");
            return;
        }

        if (email !== user.email || password !== user.password) {
            alert("Invalid email or password!");
            return;
        }

        if (!user.isVerified) {
            alert("Please verify your email first!");
            return;
        }

        sessionStorage.setItem("loggedIn", "true");

        // ✅ FIXED MESSAGE

        // REDIRECT BASED ON ROLE
        if (user.role === "admin") {
            window.location.href = "admin/admin.html";
        } else {
            window.location.href = "index.html";
        }
    });
}
