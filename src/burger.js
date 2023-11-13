const burgerBtn = document.querySelector('#burgerBtn')
const burgerSection = document.querySelector('.section.burger')
const html = document.querySelector('html')
let isBurgerOpen = false

const handleBurgerTouch = () =>
{
    if(!isBurgerOpen)
    {
        burgerSection.classList.add('isActive')
        burgerBtn.classList.add('isActive')
        html.classList.add('blocked')
    } else
    {
        burgerSection.classList.remove('isActive')
        burgerBtn.classList.remove('isActive')
        html.classList.remove('blocked')

    }
    isBurgerOpen = !isBurgerOpen
}


burgerBtn.addEventListener('click', handleBurgerTouch)