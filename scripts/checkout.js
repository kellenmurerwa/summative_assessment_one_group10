// Form submission event listener
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get error message element
    const errorParagraph = document.getElementById("error-message");

    // clear error message
    errorParagraph.innerHTML = "";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const card = document.getElementById("card").value?.trim();
    const exp = document.getElementById("exp").value;
    const cvv = document.getElementById("cvv").value;
    const address = document.getElementById("address").value;

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorParagraph.innerHTML = "Please enter a valid email address.";
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
      errorParagraph.innerHTML =
        "Please enter a valid credit card number in the format XXXX-XXXX-XXXX-XXXX or XXXXXXXXXXXXXXXXXX or XXXX XXXX XXXX XXXX.";
      return;
    }

    // Expiration Date: Valid date in MM/YY format
    const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expPattern.test(exp)) {
      errorParagraph.innerHTML =
        "Please enter a valid expiration date in MM/YY format.";
      return;
    }

    // CVV: 3 or 4 digit number
    const cvvPattern = /^\d{3,4}$/;
    if (!cvvPattern.test(cvv)) {
      errorParagraph.innerHTML =
        "Please enter a valid CVV. It should be a 3 or 4 digit number.";
      return;
    }

    // Validate Name (Letters and spaces only)
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      errorParagraph.innerHTML =
        "Please enter a valid name. Only letters and spaces are allowed.";
      return;
    }

    // Shipping Address: Alphanumeric characters and some special characters (commas, periods, hyphens)
    const addressPattern = /^[A-Za-z0-9\s\.,-]+$/;
    if (!addressPattern.test(address)) {
      errorParagraph.innerHTML =
        "Please enter a valid shipping address. Only alphanumeric characters, spaces, commas, periods, and hyphens are allowed.";
      return;
    }

    //clear form
    document.getElementById("checkoutForm").reset();

    // navigate to success.html
    window.location.href = "success.html";
  });
