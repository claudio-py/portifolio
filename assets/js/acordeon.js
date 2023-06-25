// ========= ACORDEON PRINCIPAL =========
const acordeonTriggers = document.querySelectorAll(".acordeon .trigger")
acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const acordeon = trigger.parentElement
    const isOpen = acordeon.classList.contains("open")
    if (isOpen) {
      acordeon.classList.remove("open")
    } else {
      acordeon.classList.add("open")
    }
  })
})
// ==============ACORDEON PORTIFOLIO===============
const acordeonTriggersPortifolio = document.querySelectorAll(".acordeon-portifolio .trigger-portifolio")
acordeonTriggersPortifolio.forEach(trigger => {
	trigger.addEventListener("click", e => {
		const acordeon = trigger.parentElement
		const isOpen = acordeon.classList.contains("open-portifolio")
		if (isOpen) {
			acordeon.classList.remove("open-portifolio")
		} else {
			acordeon.classList.add("open-portifolio")
		}
	})
})
// ==============SWIPER CAROUSEL==========
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
slidesPerView: 1,
	// If we need pagination
	// pagination: {
	// 	el: ".swiper-pagination"
	// },

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},

	scrollbar: {
		el: '.swiper-scrollbar'
	}
})
// ========MODAL=========
function openModal() {
	document.getElementById("myModal").style.display = "block"
}
function closeModal() {
	document.getElementById("myModal").style.display = "none"
}