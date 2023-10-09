const move_logo = document.querySelector(".minilogo");

const sectionTwo = document.querySelector(".intro-img");

const sectionTwoOptions = {
  rootMargin: "-100px"
};


const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      move_logo.classList.add("move-img-logo");

      // move_logo.classList.add("fixed","move-img-logo");
      move_logo.setAttribute("onclick", 'window.scrollTo({top: 0, behavior: "smooth"});');
    } else {
      move_logo.classList.remove("move-img-logo");
      // move_logo.classList.remove("fixed","move-img-logo");
      move_logo.removeAttribute("onclick", 'window.scrollTo({top: 0, behavior: "smooth"});');
    }
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);

// ATTENTION, CE SCRIPT ENLEVE LE SCRIPT LOGO (CLIGNOTEMENT DES LETTRES DU LOGO AU CLIC)
