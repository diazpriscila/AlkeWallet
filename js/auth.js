$(function () {
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    if (email === usuario.email && password === usuario.password) {
      window.location.href = "menu.html";
    } else {
      alert("Credenciales incorrectas");
    }
  });
});
