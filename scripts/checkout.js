// Form submission event listener
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const card = document.getElementById("card").value?.trim();
    const exp = document.getElementById("exp").value;
    const cvv = document.getElementById("cvv").value;
    const address = document.getElementById("address").value;

    // Validate Name (Letters and spaces only)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      alert("Please enter a valid name. Only letters and spaces are allowed.");
      return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Credit Card Number: Valid credit card number format
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const secondCardPattern = /^\d{16}$/;
    const thirdCardPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    if (
      !cardPattern.test(card) &&
      !secondCardPattern.test(card) &&
      !thirdCardPattern.test(card)
    ) {
      alert(
        "Please enter a valid credit card number in the format XXXX-XXXX-XXXX-XXXX."
      );
      return;
    }

    // Shipping Address: Alphanumeric characters and some special characters (commas, periods, hyphens)
    const addressPattern = /^[A-Za-z0-9\s\.,-]+$/;
    if (!addressPattern.test(address)) {
      alert("Please enter a valid shipping address.");
      return;
    }

    // CVV: 3 or 4 digit number
    const cvvPattern = /^\d{3,4}$/;
    if (!cvvPattern.test(cvv)) {
      alert("Please enter a valid CVV.");
      return;
    }

    // Expiration Date: Valid date in MM/YY format
    const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expPattern.test(exp)) {
      alert("Please enter a valid expiration date in MM/YY format.");
      return;
    }

    //clear form
    document.getElementById("checkoutForm").reset();

    // If all validations pass
    alert("Payment successful!");

    // navigate to success.html
    window.location.href = "success.html";
  });
