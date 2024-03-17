function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === username && password === password) {
        showProfilePage();
        showHomePage();
     } else {
         alert("Invalid username or password.");
    }
}

function showProfilePage() {
    document.querySelector('.login-page').classList.add('hidden');
    document.querySelector('.profile-page').classList.remove('hidden');
}

function showHomePage() {
    document.querySelector('.home-page').classList.remove('hidden');
}

function editProfile() {
window.location.href = "profile.html";
}


const friendsData = [
    { name: "Friend 4", profilePicture: "assets/210982.jpg" }
];

function addnewFriends() {
    const friendsSection = document.querySelector(".friends-section");
    friendsData.forEach(friend => {
        const friendElement = document.createElement("div");
        friendElement.classList.add("dummy-profile");
        friendElement.innerHTML = `
            <img src="${friend.profilePicture}" alt="${friend.name} Picture">
            <p>${friend.name}</p>
            <div style="width: 110px;"></div>
                    <button onclick="sendMessage()">Message</button>
        `;
        friendsSection.appendChild(friendElement);
    });
}

addnewFriends();

    function rateFriend(event) {
        const newsItem = event.target.closest(".news-item");
        if (!newsItem) return;

        const rateButtons = document.createElement("div");
        rateButtons.classList.add("rate-buttons");

        const coolButton = document.createElement("button");
        coolButton.textContent = "😎";
        coolButton.addEventListener("click", () => {
            alert("You rated your friend as Cool! 😎");
            rateButtons.remove();
        });

        const trustworthyButton = document.createElement("button");
        trustworthyButton.textContent = "🤝";
        trustworthyButton.addEventListener("click", () => {
            alert("You rated your friend as Trustworthy! 🤝");
            rateButtons.remove();
        });

        const stupidButton = document.createElement("button");
        stupidButton.textContent = "🤡";
        stupidButton.addEventListener("click", () => {
            alert("You rated your friend as Stupid! 🤦‍♂️");
            rateButtons.remove();
        });

        rateButtons.appendChild(coolButton);
        rateButtons.appendChild(trustworthyButton);
        rateButtons.appendChild(stupidButton);

        const newsContent = newsItem.querySelector(".news-content");
        newsContent.appendChild(rateButtons);
    }

function toggleOptionsMenu(event) {
    const optionsMenu = event.target.parentElement.nextElementSibling;
    const parentRect = event.target.parentElement.getBoundingClientRect();
    const optionsRect = optionsMenu.getBoundingClientRect();
    
    const top = parentRect.top + window.scrollY;
    const left = parentRect.left + window.scrollX + parentRect.width - optionsRect.width;
    
    optionsMenu.style.top = top + 'px';
    optionsMenu.style.left = left + 'px';
    optionsMenu.classList.toggle("hidden");
}

function sendMessage() {
    window.location.href = "message.html";
}