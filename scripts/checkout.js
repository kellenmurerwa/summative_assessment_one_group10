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

// get car from query params when page loads
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const car = urlParams.get("car");

  const carsData = {
    1: {
      image: "images/car-3.jpg",
      price: "$40705",
    },
    2: {
      image: "images/car-8.jpg",
      price: "$22050",
    },
    3: {
      image: "images/car-4.jpg",
      price: "$28855",
    },
    4: {
      image: "images/car-1.png",
      price: "$28000",
    },
    5: {
      image: "images/car-6.png",
      price: "$25000",
    },
    6: {
      image: "images/car-7.jpg",
      price: "$27550",
    },
  };

  // selected car or default to car 1
  const selectedCar = carsData[car] || carsData["1"];
  // set car image
  document.getElementById("carImage").src = selectedCar.image;
  // set car price
  document.getElementById("carPrice").innerHTML = selectedCar.price;
  // change submit button text
  document.getElementById(
    "submitButton"
  ).innerHTML = `Pay ${selectedCar.price}`;
});
