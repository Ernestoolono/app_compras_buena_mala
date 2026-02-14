// ❌ Cada 25 segundos borra el formulario sin avisar
setInterval(() => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.value = "");
}, 25000);

// ❌ Simula registro sin feedback
function fakeRegister() {
  setTimeout(() => {
    window.location.href = "BAD_HOME.html";
  }, 1500);
}
