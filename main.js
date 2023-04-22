const cover = document.querySelector('cover');
const loader = document.querySelector('.loader-container')
const resumen = document.querySelector('.resumen')

document.querySelector('form').addEventListener('submit', (e)=>{
  if(e == undefined){e= window.event}

  e.preventDefault()

  const data = Object.fromEntries( new FormData(e.target) )
  const username = data.username

  load()
})

function load(){
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    cover.classList.toggle('off')
    resumen.classList.toggle('off')
  }, 4000);
}

const main_content = document.querySelector('.main-content')

const next_1 = document.querySelector('.next-1').addEventListener('click', ()=>{
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    resumen.classList.add('off')
    main_content.classList.toggle('off')
  }, 4000);
})