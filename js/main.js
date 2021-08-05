
const panelTitle = 'Найти недвижимость'
const popUpMessage = 'Здравствуйте! Я могу вам помочь в поиске недвижимости. Выберите свой мессенджер.'


document.querySelector('.panel-title').innerHTML = panelTitle
document.querySelector('.text_message').innerHTML = popUpMessage

const panel = document.querySelector(".main-panel")
const popUp = document.querySelector(".popup_panel")
const close = document.querySelector(".close_button_img")

panel.addEventListener(
    'click',
    () => {
        popUp.classList.toggle('m-fadeIn')
        popUp.classList.toggle('m-fadeOut')
    }
)

close.addEventListener(
    'click',
    () => {
        popUp.classList.toggle('m-fadeIn')
        popUp.classList.toggle('m-fadeOut')
    }
)