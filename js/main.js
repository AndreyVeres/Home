

const liblaryItems = document.querySelectorAll('.works__item');
const scroll = calculateScroll();

liblaryItems.forEach(item => {
    item.addEventListener('click', showPopup)
})
console.log(scroll)
function showPopup(e) {

    // e.preventDefault()
    const popup = this.querySelector('.popup')

    if (e.target.classList.contains('open__popup-btn')) {

        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scroll}`
        popup.style.transform = `translate(0)`
     


    }
    if (e.target === popup) {

        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
        popup.style.transform = `translateX(-500%)`

    }
}


function calculateScroll() {
    return window.innerWidth - document.body.offsetWidth + 'px'
}



