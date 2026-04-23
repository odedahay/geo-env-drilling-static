(() => {
  const nav = document.querySelector(".container-wrapper");
  const topbar = document.querySelector(".hero-topbar-shell");

  if (!nav) return;

  const updateFixedNav = () => {
    const offset = topbar ? topbar.offsetHeight : 0;
    nav.classList.toggle("is-fixed", window.scrollY > offset);
  };

  updateFixedNav();
  window.addEventListener("scroll", updateFixedNav, { passive: true });
  window.addEventListener("resize", updateFixedNav);

  // Menu Mobile
  const btnMenu = document.getElementById("menu-btn");
  const menuMobile = document.getElementById("menu");

  if (btnMenu && menuMobile) {
    let savedScrollY = 0;
    const menuButtonParent = btnMenu.parentElement;
    const menuButtonNextSibling = btnMenu.nextSibling;

    if (menuMobile.parentElement !== document.body) {
      document.body.appendChild(menuMobile);
    }

    const expandableLinks = Array.from(menuMobile.querySelectorAll("a")).filter((link) => {
      return link.nextElementSibling && link.nextElementSibling.tagName === "DIV";
    });

    const collapseSubmenus = () => {
      expandableLinks.forEach((link) => {
        link.classList.remove("is-open");
        link.setAttribute("aria-expanded", "false");
        const submenu = link.nextElementSibling;
        submenu.classList.remove("is-open");
      });
    };

    expandableLinks.forEach((link) => {
      const submenu = link.nextElementSibling;

      link.classList.add("mobile-menu-toggle");
      link.setAttribute("href", "#");
      link.setAttribute("aria-expanded", "false");
      submenu.classList.add("mobile-menu-submenu");
      submenu.classList.remove("flex");

      link.addEventListener("click", (event) => {
        event.preventDefault();

        const isOpen = link.classList.contains("is-open");
        collapseSubmenus();

        if (!isOpen) {
          link.classList.add("is-open");
          link.setAttribute("aria-expanded", "true");
          submenu.classList.add("is-open");
        }
      });
    });

    const closeMenu = () => {
      btnMenu.classList.remove("open-menu");
      menuMobile.classList.remove("flex");
      menuMobile.classList.add("hidden");
      document.body.style.top = "";
      document.body.classList.remove("menu-open");
      if (btnMenu.parentElement !== menuButtonParent) {
        if (menuButtonNextSibling) {
          menuButtonParent.insertBefore(btnMenu, menuButtonNextSibling);
        } else {
          menuButtonParent.appendChild(btnMenu);
        }
      }
      window.scrollTo(0, savedScrollY);
      collapseSubmenus();
    };

    const openMenu = () => {
      savedScrollY = window.scrollY;
      btnMenu.classList.add("open-menu");
      menuMobile.classList.add("flex");
      menuMobile.classList.remove("hidden");
      document.body.style.top = `-${savedScrollY}px`;
      document.body.classList.add("menu-open");
      if (btnMenu.parentElement !== document.body) {
        document.body.appendChild(btnMenu);
      }
    };

    const navToggle = () => {
      const isOpen = btnMenu.classList.contains("open-menu");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    btnMenu.addEventListener("click", navToggle);

    menuMobile.querySelectorAll("a").forEach((link) => {
      if (expandableLinks.includes(link)) return;
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });
  }

 // date input calendar placeholder
 const dateInputs = document.querySelectorAll('[data-date-placeholder]');

 dateInputs.forEach((dateInput) => {
  const input = dateInput.querySelector('input[type="date"]');

  if (!input) return;

  const updateDatePlaceholder = () => {
   dateInput.classList.toggle('has-value', Boolean(input.value));
  };

  updateDatePlaceholder();
  input.addEventListener('input', updateDatePlaceholder);
  input.addEventListener('change', updateDatePlaceholder);

  dateInput.addEventListener('click', () => {
   input.focus();

   if (typeof input.showPicker === 'function') {
    input.showPicker();
   }
  });
 });

  // date input time placeholder
  const timeInputs = document.querySelectorAll('[data-time-placeholder]');

  timeInputs.forEach((timeInput) =>{
    const input = timeInput.querySelector('input[type="time"]');
    
    if(!input) return;

    const updateTimePlaceholder = () => {
      timeInput.classList.toggle('has-value', Boolean(input.value))
    };

    updateTimePlaceholder();
    input.addEventListener('input', updateTimePlaceholder);
    input.addEventListener('change', updateTimePlaceholder);

    timeInput.addEventListener('click', ()=>{
      input.focus();

      if(typeof input.showPicker === 'function'){
        input.showPicker();
      }
    })
  });

})();
