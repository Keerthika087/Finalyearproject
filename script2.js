document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        pincode: document.getElementById("pincode").value,
        email: document.getElementById("email").value
    };

    // Store data in local storage
    localStorage.setItem("userData", JSON.stringify(user));

    // Redirect to profile page
    window.location.href = "profile.html";
});

function goBack() {
    window.location.href = "index.html";
}