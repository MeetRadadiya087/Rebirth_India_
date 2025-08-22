
// Contact form validation
function initContactValidation() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check form validity using HTML5 API
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // ✅ Success (you can replace alert with AJAX / API call)
    alert("✅ Thanks! Your message has been submitted successfully.");

    // Reset form after submission
    form.reset();
    form.classList.remove("was-validated");
  });
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", initContactValidation);


// Ask AI (static demo)
function initAskAI() {
  const chat = document.getElementById("aiChat");
  const input = document.getElementById("aiInput");
  const send = document.getElementById("aiSend");
  if (!chat || !input || !send) return;
  function addBubble(text, who = "user") {
    const div = document.createElement("div");
    div.className = `mb-2 ${who === "user" ? "text-end" : ""}`;
    div.innerHTML = `<span class="d-inline-block p-2 rounded ${who === "user" ? "bg-primary text-white" : "bg-white border"}" style="max-width:90%">${text}</span>`;
    chat.appendChild(div); chat.scrollTop = chat.scrollHeight;
  }
  function reply(q) {
    const s = q.toLowerCase();
    if (s.includes("price")) return "Indicative prices are shown on each product page. For a formal quote including GST & shipping, use Contact or WhatsApp.";
    if (s.includes("aligner")) return "3D Wheel Aligner Pro: fast camera tracking, compact cabinet, onsite installation & training.";
    if (s.includes("warranty")) return "All products: 1‑year standard warranty. Extended plans available.";
    if (s.includes("install") || s.includes("training")) return "We provide installation and on-site training nationwide.";
    if (s.includes("delivery") || s.includes("shipping")) return "Delivery: 3–10 business days depending on location.";
    return "Try asking: price, warranty, installation, delivery, or 'aligner'.";
  }
  function handle() {
    const q = (input.value || '').trim(); if (!q) return;
    addBubble(q, "user"); setTimeout(() => addBubble(reply(q), "bot"), 300); input.value = "";
  }
  send.addEventListener("click", handle);
  input.addEventListener("keydown", e => { if (e.key === "Enter") handle(); });
}

document.addEventListener("DOMContentLoaded", () => {
  startHero();
  initContactValidation();
  initAskAI();
});




// CONTACT PAGE JS

// =============================
// Google Maps Initialization (Dark Theme)
// =============================
function initMap() {
  var location = { lat: 22.3039, lng: 70.8022 }; // Rajkot, India
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#212121" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#2c2c2c" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8a8a8a" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#3d3d3d" }]
      }
    ]
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Rebirth India - Rajkot"
  });
}

// =============================
// Contact Form Validation
// =============================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      form.querySelectorAll("input, textarea").forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          valid = false;
        } else {
          field.classList.remove("is-invalid");
        }
      });

      if (valid) {
        alert("✅ Thank you for contacting us! We’ll get back to you soon.");
        form.reset();
      }
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;
      form.querySelectorAll("input, textarea").forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("is-invalid");
          valid = false;
        } else {
          field.classList.remove("is-invalid");
        }
      });

      if (valid) {
        alert("✅ Thank you for contacting us! We’ll get back to you soon.");
        form.reset();
      }
    });
  }
});


