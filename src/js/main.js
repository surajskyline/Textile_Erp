const toggleBtn = document.getElementById("collapseToggle");
const body = document.body;

// Check localStorage on page load
if (localStorage.getItem("sidebar-collapsed") === "true") {
  body.classList.add("collapsed");
}

toggleBtn.addEventListener("click", () => {
  const isCollapsed = body.classList.toggle("collapsed");

  // Save current state to localStorage
  localStorage.setItem("sidebar-collapsed", isCollapsed);
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

function ShippingModal(show) {
  const modal = document.getElementById("Shipping_modal");
  if (show) {
    modal.classList.remove("pointer-events-none", "opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  } else {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("pointer-events-none");
    }, 300); // match `duration-300`
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

 function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.src = isPassword
      ? "../../../assets/icons/eye-on.svg"
      : "../../../assets/icons/eye-off.svg";
  }
  

$(document).ready(function () {
  $("#kt_daterangepicker_1").daterangepicker({
    locale: {
      format: "DD-MM-YYYY",
    },
  });
});
