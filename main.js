document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Message sent!");
    });
});