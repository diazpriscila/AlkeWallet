$(function () {

  let usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    usuario = {
      email: "test@alke.cl",
      password: "1234",
      saldo: 0,
      movimientos: []
    };
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  const contactos = ["Ana", "Juan", "Victoria"];

  function guardarUsuario() {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  // Mostrar saldo
  if ($("#saldo").length) {
    $("#saldo").text(usuario.saldo);
  }

  // Depositar dinero
  $("#depositForm").on("submit", function (e) {
    e.preventDefault();

    const monto = Number($("#amount").val());

    if (monto > 0) {
      usuario.saldo += monto;

      usuario.movimientos.push({
        tipo: "Depósito",
        monto: monto
      });

      guardarUsuario();
      window.location.href = "menu.html";
    } else {
      alert("Monto inválido");
    }
  });

  // Enviar dinero
  $("#sendForm").on("submit", function (e) {
    e.preventDefault();

    const destinatario = $("#receiver").val().trim();
    const monto = Number($("#sendAmount").val());

    const existeContacto = contactos.some(function (c) {
      return c.toLowerCase() === destinatario.toLowerCase();
    });

    if (!destinatario || monto <= 0) {
      alert("Datos inválidos");
      return;
    }

    if (!existeContacto) {
      alert("Contacto no encontrado");
      return;
    }

    if (monto > usuario.saldo) {
      alert("Saldo insuficiente");
      return;
    }

    usuario.saldo -= monto;

    usuario.movimientos.push({
      tipo: "Envío",
      monto: monto,
      destinatario: destinatario
    });

    guardarUsuario();
    window.location.href = "menu.html";
  });

  // Listar movimientos (CORREGIDO)
  if ($("#listaMovimientos").length) {

    $("#listaMovimientos").empty();

    if (usuario.movimientos.length === 0) {
      $("#listaMovimientos").html("<li>No hay movimientos</li>");
    } else {
      usuario.movimientos.forEach(function (mov) {
        let texto = `${mov.tipo}: $${mov.monto}`;
        if (mov.destinatario) {
          texto += ` a ${mov.destinatario}`;
        }
        $("#listaMovimientos").append(`<li>${texto}</li>`);
      });
    }
  }

});
