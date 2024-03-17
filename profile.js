document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page refersh
    alert("Profile updated!");
    window.location.href = "index.html";
});
