const modelNameInput = document.querySelector('#model-name')
const modelName = document.querySelector('.model-name')

modelNameInput.addEventListener('input', (e) => {
    modelName.textContent = e.target.value
})

const logoText = document.querySelector('#logo-text')
const logoImage = document.querySelector('.logo-image')

logoText.addEventListener('input', (e) => {
    logoImage.setAttribute('src', e.target.value)
})


const flash = document.querySelector('.flash')
const flashBox = document.querySelector('#flash-box')

flashBox.onclick = (e) => {
    if (e.target.checked) {
        flash.classList.add('flash-open')
    } else {
        flash.classList.remove('flash-open')
    }
}

const cameras = document.querySelector('.cameras')

function setCameras(count) {
    cameras.innerHTML = ''
    for (let i=0; i<count; i++) {
        const div = document.createElement('div')
        div.className = 'camera'
        cameras.append(div)
    }
}

function radioEvent(e) {
    const count = e.target.getAttribute('data')
    setCameras(Number(count))
}

const radios = document.querySelectorAll('.camera-count')
radios.forEach(r => {
    r.addEventListener('click', radioEvent)
})

const colorSelect = document.querySelector('#color-select')
const phone = document.querySelector('.phone')
colorSelect.addEventListener('change', (e) => {
    phone.style.backgroundColor = e.target.value
})