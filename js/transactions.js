$(function () {
  const lista = $("#listaMovimientos");

  if (usuario.movimientos.length === 0) {
    lista.append("<li>No hay movimientos</li>");
    return;
  }

  usuario.movimientos.forEach(mov => {
    let texto = mov.tipo + " - $" + mov.monto;
    if (mov.destinatario) {
      texto += " a " + mov.destinatario;
    }
    lista.append("<li>" + texto + "</li>");
  });
});
