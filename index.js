const openModal = document.querySelector('.hero_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.moda_botton')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
});

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
});
