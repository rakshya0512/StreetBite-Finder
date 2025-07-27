document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("pass").value.trim();

  const users = JSON.parse(localStorage.getItem("vendors")) || [];

  const matchedUser = users.find(
    user => user.phone === phone && user.password === pass
  );

  if (matchedUser) {
    // Bootstrap modal trigger
    const loginModal = new bootstrap.Modal(document.getElementById("loginSuccessPopup"));
    loginModal.show();

    let countdown = 5;
    document.getElementById("login-countdown").textContent = countdown;
    const interval = setInterval(() => {
      countdown--;
      document.getElementById("login-countdown").textContent = countdown;
      if (countdown === 0) {
        clearInterval(interval);
        window.location.href = "dashboard.html";
      }
    }, 1000);
  } else {
    alert("Invalid phone number or password.");
  }
});

