document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent refreshing
    const message = document.getElementById("message").value;
    alert("Message sent!\n"+message);
    window.location.href = "index.html?message=" + encodeURIComponent(message);
});