const farmers = [
    { name: "Ramesh Kumar", crop: "Wheat", location: "Guntur", rating: 4.5, available: 500 },
    { name: "Sita Rao", crop: "Onions", location: "Vijayawada", rating: 4.2, available: 300 },
    { name: "Amit Sharma", crop: "Wheat", location: "Hyderabad", rating: 4.8, available: 400 },
    { name: "Kiran Reddy", crop: "Wheat", location: "Guntur", rating: 4.3, available: 250 }
];
function validateOrder() {
    let quantityInput = document.getElementById("quantity").value;
    let quantity = parseInt(quantityInput);

    if (isNaN(quantity) || quantity < 10) {
        alert("Wholesale orders must be at least 10 kg!");
        return;
    }
    showFarmers("Wheat");
}
function showFarmers(crop) {
    const farmerListSection = document.getElementById("farmerList");
    const farmerContainer = farmerListSection.querySelector(".farmer-list");
    farmerContainer.innerHTML = "";
    let availableFarmers = farmers.filter(farmer => farmer.crop === crop);
    availableFarmers.sort((a, b) => b.rating - a.rating);
    if (availableFarmers.length === 0) {
        farmerContainer.innerHTML = "<p>No farmers available for this crop.</p>";
        return;
    }
    availableFarmers.forEach(farmer => {
        let farmerCard = document.createElement("div");
        farmerCard.classList.add("farmer-card");

        farmerCard.innerHTML = `
            <h3>${farmer.name}</h3>
            <p>Crop: ${farmer.crop}</p>
            <p>Available: ${farmer.available} kg</p>
            <p>Location: ${farmer.location}</p>
            <p>⭐ Rating: ${farmer.rating}</p>
            <button onclick="contactFarmer('${farmer.name}', '${farmer.crop}')">Request Order</button>
        `;

        farmerContainer.appendChild(farmerCard);
    });
    farmerListSection.style.display = "block";
}
function contactFarmer(farmerName, crop) {
    let quantity = prompt("Enter the quantity (kg):");
    if (quantity === null) return; // Cancel action

    quantity = parseInt(quantity);
    if (isNaN(quantity) || quantity < 10) {
        alert(" Wholesale orders must be at least 10 kg!");
        return;
    }
    alert(` Your order request has been sent to ${farmerName} for ${quantity} kg of ${crop}.`);
}
