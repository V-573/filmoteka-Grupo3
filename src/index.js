//Clave de la API: 4037711053de8efe03398288380ebc9e

// Token de acceso de lectura a la API: 

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM3NzExMDUzZGU4ZWZlMDMzOTgyODgzODBlYmM5ZSIsInN1YiI6IjY1MzhhMmNhMGZiMTdmMDBmZWIwZTg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UxYhSmIFVn6tD_sMBEEmpjwh8WjvI_HmrbH0Ps04Qsc
const refs = {
    openModal: document.querySelector('.open-modal-team'),
    closeModal: document.querySelector('.close-modal-team'),
    teamBackdrop: document.querySelector('.backdrop-modal'),
    teamModal: document.getElementsByClassName('team__modal'),
  };
  
  refs.openModal.addEventListener('click', openModalTeam);
  refs.closeModal.addEventListener('click', closeModalTeam);
  
  function openModalTeam(event) {
    console.log("se ha clickeado")
    refs.teamBackdrop.classList.remove('team__backdrop--hidden');
    document.addEventListener('keydown', onEscapeClose);
    document.addEventListener('click', onBackdropClose);
    refs.teamModal[0].classList.add('openModalAnimationTeam');
  }
  
  function closeModalTeam(event) {
    refs.teamModal[0].classList.remove('closeModalAnimationTeam');
    refs.teamBackdrop.classList.add('team__backdrop--hidden');
    document.removeEventListener('keydown', onEscapeClose);
    document.body.style.overflow = '';
  }
  
  function onEscapeClose(event) {
    if (event.code === 'Escape') {
      refs.teamModal[0].classList.remove('openModalAnimationTeam');
      refs.teamModal[0].classList.add('closeModalAnimationTeam');
      setTimeout(() => {
        closeModalTeam();
      }, 400);
      closeModalTeam();
    }
  }
  
  function onBackdropClose(event) {
    if (event.target === refs.teamBackdrop) {
      refs.teamModal[0].classList.remove('openModalAnimationTeam');
      refs.teamModal[0].classList.add('closeModalAnimationTeam');
      setTimeout(() => {
        closeModalTeam();
      }, 400);
    }
  }