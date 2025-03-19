/*document.addEventListener("DOMContentLoaded", function () {
    let amountBox = document.getElementById("amount");

    // Prompt the user to enter the amount
    let amount = prompt("Enter the amount to pay:");

    // Validate input (ensure it's a number and greater than 0)
    if (amount === null || isNaN(amount) || amount.trim() === "" || parseFloat(amount) <= 0) {
        amountBox.innerText = "Invalid Amount!";
        amountBox.style.color = "red";
    } else {
        amountBox.innerText = `₹ ${parseFloat(amount).toFixed(2)}`; // Display formatted amount
        amountBox.style.color = "green"; // Styling to indicate success
    }
});*/
