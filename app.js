window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

  // activateMenuAtCurrentSection(services)
}
function activateMenuAtCurrentSection(section){
  // linha alvo

   const targetLine =  scrollY + innerHeight / 2
  // verificar se a seção passou da linha
  // quais dados vou precisar
   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight
   
  //  parte que estou em cima ou abaixo
   const sectionTopReachOrTargetLine = targetLine >= sectionTop 
   
  //  verificar se a base esta abaixo da linha alvo
  //  quais dados vou precisar?
  
  // ONDE a seção termina
  const sectionEndsAt =  sectionTop + sectionHeight

  // verifica se a section passou da "linha alvo"
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  
  // limite da seção
  const sectionBoundaries =sectionTopReachOrTargetLine  &&  !sectionEndPassedTargetLine 

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuElement.classList.remove('active')
   if(sectionBoundaries){
   menuElement.classList.add('active')
   }
}
// quais sao os dados que vou precisar ????
function showNavOnScroll(){
  if( scrollY > 0 ){
    navigation.classList.add('scroll')
  
  }else{
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if( scrollY > 600 ){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin : 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .info-header,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
