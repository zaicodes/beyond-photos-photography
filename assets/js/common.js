var acc = document.getElementsByClassName("Q");
      var i;
      var currentOpen = null;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          if (currentOpen && currentOpen !== this) {
            currentOpen.classList.remove("active");
            currentOpen.parentElement.classList.remove("active");
            currentOpen.nextElementSibling.style.display = "none";
          }

          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var answer = this.nextElementSibling;

          if (answer.style.display === "block") {
            answer.style.display = "none";
            currentOpen = null;
          } else {
            answer.style.display = "block";
            currentOpen = this;
          }
        });
      }