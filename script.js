// SweetAlert2 for contact form success message
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting me. I will get back to you soon.",
      confirmButtonText: "OK",
    });
  
    // Reset form
    document.getElementById("contactForm").reset();
  });
  