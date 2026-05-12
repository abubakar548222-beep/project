// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".walid");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});

//contact form
const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form && status) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.className = "show success";
          status.innerHTML = "Message sent successfully";
          form.reset();
        } else {
          status.className = "show error";
          status.innerHTML = "Something went wrong";
        }

        autoHideStatus();
      })
      .catch(() => {
        status.className = "show error";
        status.innerHTML = "Network error";

        autoHideStatus();
      });
  });
}

// AUTO HIDE NOTIFICATION
function autoHideStatus() {
  setTimeout(() => {
    status.className = "";
    status.innerHTML = "";
  }, 3000);
}
