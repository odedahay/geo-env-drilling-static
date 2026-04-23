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
