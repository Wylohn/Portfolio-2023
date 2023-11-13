const burgerBtn = document.querySelector('#burgerBtn')
const burgerSection = document.querySelector('.section.burger')
const body = document.querySelector('body')
let isBurgerOpen = false

const handleBurgerTouch = () =>
{
    if(!isBurgerOpen)
    {
        burgerSection.classList.add('isActive')
        burgerBtn.classList.add('isActive')
        body.classList.add('blocked')
    } else
    {
        burgerSection.classList.remove('isActive')
        burgerBtn.classList.remove('isActive')
        body.classList.remove('blocked')

    }
    isBurgerOpen = !isBurgerOpen
}


burgerBtn.addEventListener('click', handleBurgerTouch)