//Cuentas :D
var cuentas = [
  { nombre: "Alex", saldo: 500, password: "1234" },
  { nombre: "Irvin", saldo: 300, password: "5678" },
  { nombre: "Zulay", saldo: 125, password: "9101" },
];

var usuarioEncontrado = {};

function login() {
  var userName = document.getElementById("userName").value;
  var userPassword = document.getElementById("userPassword").value;
  usuarioEncontrado = cuentas.find(
    (cuenta) => cuenta.nombre === userName && cuenta.password === userPassword
  );

  if (usuarioEncontrado) {
    document.getElementById("userNameDisplay").textContent =
      usuarioEncontrado.nombre;
    mostrarMenu();
  } else {
    alert("Usuario no encontrado o contraseña incorrecta");
  }
}

function mostrarMenu() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function consultarSaldo() {
  alert("Su saldo actual es: $" + usuarioEncontrado.saldo);
}

function realizarOperacion(operacion) {
  var monto = prompt("Ingrese el monto a " + operacion.toLowerCase() + ":");
  if (monto && esMontoValido(parseFloat(monto))) {
    if (operacion === "Ingresar") {
      usuarioEncontrado.saldo += parseFloat(monto);
      alert(
        "Ingreso realizado. Monto ingresado: $" +
          monto +
          "\nNuevo saldo: $" +
          usuarioEncontrado.saldo
      );
    } else if (operacion === "Retirar" && monto <= usuarioEncontrado.saldo) {
      usuarioEncontrado.saldo -= parseFloat(monto);
      alert(
        "Retiro realizado. Monto retirado: $" +
          monto +
          "\nNuevo saldo: $" +
          usuarioEncontrado.saldo
      );
    } else {
      alert("Monto inválido o saldo insuficiente.");
    }
  } else {
    alert("Monto inválido o excede los límites permitidos.");
  }
}

function cerrarSesion() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("menu").style.display = "none";
  document.getElementById("userName").value = "";
  document.getElementById("userPassword").value = "";
  usuarioEncontrado = {};
}

function esMontoValido(monto) {
  return monto >= 10 && monto <= 990;
}
