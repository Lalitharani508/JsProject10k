
    // Login Button SweetAlert
   document.getElementById("loginBtn").addEventListener("click", function() {
      Swal.fire({
        title: 'Login',
        html: `
          <input type="email" id="email" class="swal2-input" placeholder="Email">
          <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: 'Login',
        focusConfirm: false,
        preConfirm: () => {
          const email = Swal.getPopup().querySelector('#email').value;
          const password = Swal.getPopup().querySelector('#password').value;
          if (!email || !password) {
            Swal.showValidationMessage(`Please enter email and password`);
          }
          return { email: email, password: password };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Logged in as: ${result.value.email}`);
        }
      });
    });
  

    // Signup Button SweetAlert
    document.getElementById("signupBtn").addEventListener("click", function() {
      Swal.fire({
        title: 'Signup',
        html: `
          <input type="text" id="name" class="swal2-input" placeholder="Full Name">
          <input type="email" id="email" class="swal2-input" placeholder="Email">
          <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: 'Signup',
        focusConfirm: false,
        preConfirm: () => {
          const name = Swal.getPopup().querySelector('#name').value;
          const email = Swal.getPopup().querySelector('#email').value;
          const password = Swal.getPopup().querySelector('#password').value;
          if (!name || !email || !password) {
            Swal.showValidationMessage(`Please fill in all fields`);
          }
          return { name: name, email: email, password: password };
        }
      }).then((result) => {
  
        if (result.isConfirmed) {
          Swal.fire(`Welcome To Our Family`).then(() => {
            // Redirect to the login section using location.href
            // location.href = '#loginBtn';
            // const loginmodal = new bootstrap.Modal(document.getElementById("loginBtn"));
            // loginmodal.show();
            Swal.fire({
              title: 'Login',
              html: `
                <input type="email" id="email" class="swal2-input" placeholder="Email">
                <input type="password" id="password" class="swal2-input" placeholder="Password">
              `,
              confirmButtonText: 'Login',
              focusConfirm: false,
              preConfirm: () => {
                const email = Swal.getPopup().querySelector('#email').value;
                const password = Swal.getPopup().querySelector('#password').value;
                if (!email || !password) {
                  Swal.showValidationMessage(`Please enter email and password`);
                }
                return { email: email, password: password };
              }
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(`Logged in as: ${result.value.email}`);
              }
            });

          });
        }
      });
    });
