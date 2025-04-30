(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
emailjs.init("GnXwSWycSIj-B30ey"); // Replace with your Public Key

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_i80fepi", "template_gtatqif", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
});
