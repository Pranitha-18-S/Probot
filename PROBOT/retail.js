document.addEventListener("DOMContentLoaded", () => {
    let completedRetailOrders = localStorage.getItem("retailOrders") || 0;
    let bulkAccessBtn = document.getElementById("bulkAccessBtn");
    if (completedRetailOrders >= 3) {
        bulkAccessBtn.disabled = false;
    }
    function placeOrder() {
        alert("Your order has been sent to the nearest agency.");
        localStorage.setItem("retailOrders", ++completedRetailOrders);
    }
});