const CORRECT_PASSWORD = "you are better than an agitator. you are heard.";
const MAIN_PAGE = "index.html";
const PASSWORD_PAGE = "password.html";

const isAuthorized = sessionStorage.getItem("isAuthorized") === "true";
const onPasswordPage = window.location.pathname.includes("password");

if (!isAuthorized && !onPasswordPage) {
    window.location.replace(PASSWORD_PAGE);
} else if (isAuthorized && onPasswordPage) {
    window.location.replace(MAIN_PAGE);
}

const form = document.getElementById("passwordForm");
const input = document.getElementById("passwordInput");
const label = document.getElementById("passwordLabel");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (input.value === CORRECT_PASSWORD) {
            sessionStorage.setItem("isAuthorized", "true");
            window.location.href = MAIN_PAGE;
        } else {
            label.textContent = "ACCESS DENIED — AGITATOR DETECTED";
            input.value = "";
            input.focus();
        }
    });
}
