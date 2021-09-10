let questions = document.querySelectorAll(".question")
let bugerIcon = document.querySelector(".logo__burger-menu")
let burgerMenu = document.querySelector(".hidden-burger")
let menuListLinks = document.querySelectorAll('.menu__list-link')
let play = document.querySelector('.top__video-play-container')
let method = true

questions.forEach(question => {
   question.addEventListener('click', () => {
      question.classList.toggle("active")
   })
})

bugerIcon.addEventListener('click', () => {
   burgerMenu.classList.toggle("show-burger")
   if (burgerMenu.classList.contains("show-burger")) {
      bugerIcon.src = './assets/svg/burger_menu_close.svg'
   }
   else {
      bugerIcon.src = './assets/svg/burger_menu.svg'
   }
})

menuListLinks.forEach(menuListLink => {
   menuListLink.addEventListener('click', function () {
      let activeLinks = document.querySelectorAll('.active-link')
      activeLinks.forEach(activeLink => {
         activeLink.classList.remove('active-link')
      })

      this.classList.add('active-link')
   })
})

// -----------------For youtube video-----------------
function playVideo() {
   document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
};

function pauseVideo() {
   document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}

play.addEventListener('click', () => {
   const iframe = document.querySelector('iframe')
   method = !method
   if (iframe) {
      if (method) {
         play.style.opacity = '1'
         play.style.backgroundImage = "none"
         pauseVideo()
      }
      else {
         play.style.opacity = '0'
         play.style.backgroundImage = 'none'
         playVideo()
      }
   }
})
// -----------------For youtube video-----------------


// -----------------For vimeo video-----------------
// play.addEventListener('click', () => {
//    const iframe = document.querySelector('iframe')
//    method = !method
//    if (iframe) {
//       if (method) {
//          play.style.opacity = '1'
//          play.style.backgroundImage = "none"
//          string = "pause"
//       }
//       else {
//          play.style.opacity = '0'
//          play.style.backgroundImage = 'none'
//          string = "play"
//       }
//       const url = "https://player.vimeo.com/video/561730156";
//       iframe.contentWindow.postMessage(`{"method":"${string}"}`, url)
//    }
// })
// -----------------For vimeo video-----------------