
// Handle "Sign Up" link click
document.getElementById("btn-signup").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  Swal.fire({
    title: "Sign Up",
    text: "Welcome! Please fill in your details to sign up.",
    icon: "info",
    confirmButtonText: "Continue"
  }).then(() => {
    // Show the Sign Up modal after SweetAlert
    let signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
    signUpModal.show();
  });
});

// Handle "Sign Up" form submission
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  // SweetAlert after Sign Up
  Swal.fire({
    title: "Sign Up Successful!",
    text: "You have successfully signed up.",
    icon: "success",
    confirmButtonText: "Proceed to Login"
  }).then(() => {
    // Show the Login modal after Sign Up
    let signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
    signUpModal.hide(); // Hide Sign Up modal
    let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show(); // Show Login modal
  });
});

// Handle "Login" link click
document.getElementById("btn-login").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  Swal.fire({
    title: "Login",
    text: "Please log in to continue.",
    icon: "info",
    confirmButtonText: "Continue"
  }).then(() => {
    // Show the Login modal after SweetAlert
    let loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  });
});

// Handle "Login" form submission
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  // SweetAlert after Login
  Swal.fire({
    title: "Login Successful!",
    text: "Welcome back! You are now logged in.",
    icon: "success",
    confirmButtonText: "Go to Main Page"
  }).then(() => {
    // Redirect to main page after login
    window.location.href = "https://www.yourmainpage.com"; // Replace with your actual main page URL
  });
});


// category

const carousel = document.getElementById('categoryCarousel');

    // Scroll Right
    function scrollRight() {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }

    // Scroll Left
    function scrollLeft() {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }

    // SweetAlert Popup for Category Click
    function showAlert(category) {
      Swal.fire({
        title: `You clicked ${category}!`,
        text: `Explore more about ${category}.`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }

    // SweetAlert for "See More" button
    function showSeeMore() {
      Swal.fire({
        title: 'More Categories',
        text: 'Additional categories are coming soon!',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }