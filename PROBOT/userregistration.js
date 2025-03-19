document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let location = document.getElementById("location").value.trim();
    let deliveryPreference = document.getElementById("deliveryPreference").value;
    let profilePhoto = document.getElementById("profilePhoto").files[0];
    let preferredProducts = [];
    document.querySelectorAll(".checkbox-group input:checked").forEach(input => {
        preferredProducts.push(input.value);
    });
    if (!fullName || !email || !phone || !password) {
        alert("Please fill in all required fields.");
        return;
    }
    let formData = {
        fullName,
        email,
        phone,
        password,
        location,
        preferredProducts,
        deliveryPreference,
        profilePhoto: profilePhoto ? profilePhoto.name : "No file uploaded"
    };
    console.log("User Registration Data:", formData);
    alert("Registration Successful!");
    document.getElementById("userForm").reset();
    window.location.href = "userdashboard.html";
});
