document.addEventListener("DOMContentLoaded", () => {
    // Select all .li-service elements
    const services = document.querySelectorAll(".li-servicio");
  
    services.forEach(service => {
      const textContainer = service.querySelector(".text-container");
      const dotsButton = service.querySelector(".three-dots-button-div");
      const divImagine = service.querySelector(".servicio-content-imagin");
  
      if (textContainer && dotsButton) {
        dotsButton.addEventListener("click", () => {
          // Add a class to both elements when clicked
          textContainer.classList.add("active");
          dotsButton.classList.add("active");
          divImagine.classList.add("active");
        });
      }
    });
  });