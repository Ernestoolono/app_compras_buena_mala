let cart = [];
let total = 0;

/* ================= REGISTRO ================= */

function login() {
  const email = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const error = document.getElementById("error");

  error.textContent = "";

  // Validar campos vacíos
  if (email === "" || pass === "") {
    error.textContent = "Debes llenar todos los campos";
    alert("⚠️ Debes ingresar correo y contraseña");
    return;
  }

  // Validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.textContent = "Correo electrónico no válido";
    alert("❌ Ingresa un correo válido");
    return;
  }

  // Validar contraseña
  if (pass.length < 6) {
    error.textContent = "La contraseña debe tener mínimo 6 caracteres";
    alert("🔒 La contraseña debe tener al menos 6 caracteres");
    return;
  }

  alert("✅ Registro exitoso, bienvenido");
  window.location.href = "GOOD_HOME.html";
}

/* ================= CERRAR SESIÓN ================= */

function logout() {
  alert("👋 Cerraste sesión correctamente");
  cart = [];
  total = 0;
  window.location.href = "GOOD_REGISTER.html";
}

/* ================= CARRITO ================= */

function addToCart(name, price, productId) {
  cart.push({ name, price });
  total += price;

  const product = document.getElementById(productId);
  if (product) {
    product.classList.add("expanded");
  }

  alert(`🛒 "${name}" agregado al carrito`);
  updateCart();
}

function removeFromCart(index) {
  const productName = cart[index].name;
  total -= cart[index].price;
  cart.splice(index, 1);

  alert(`❌ "${productName}" eliminado del carrito`);
  updateCart();
}

/* ================= ACTUALIZAR UI ================= */

function updateCart() {
  const list = document.getElementById("cartList");
  const count = document.getElementById("cartCount");
  const totalText = document.getElementById("total");

  if (!list) return;

  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">X</button>
    `;
    list.appendChild(li);
  });

  count.textContent = cart.length;
  totalText.textContent = total;
}
