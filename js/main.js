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
  const btnMenu = document.getElementById('menu-btn')
  const menuMobile = document.getElementById('menu');


  btnMenu.addEventListener('click', navToggle);

 function navToggle(){
  btnMenu.classList.toggle('open-menu');
  menuMobile.classList.toggle('flex');
  menuMobile.classList.toggle('hidden');
 }

})();
