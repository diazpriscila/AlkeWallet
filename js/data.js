let usuario = JSON.parse(localStorage.getItem("usuario")) || {
  email: "test@alke.cl",
  password: "1234",
  saldo: 0,
  movimientos: []
};

let contactos = [
  "Juan Perez",
  "Maria Lopez",
  "Pedro Soto"
];

function guardarUsuario() {
  localStorage.setItem("usuario", JSON.stringify(usuario));
}
