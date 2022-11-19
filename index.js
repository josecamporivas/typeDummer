import { soundBank } from "./modules/soundBank.js";

const TIME_PER_NOTE = 250

const soundBox = document.getElementById('soundbox')
const imgDj = document.getElementById('imgDj')

const getTextSoundBox = () => soundBox.value.toLowerCase().split('')
const getTextSoundBoxSize = () => soundBox.value.length

let repeater

const addEffect = (imgDj, classname) => {
    imgDj.classList.add(classname)

    setTimeout(() => imgDj.classList.remove(classname), TIME_PER_NOTE)
}

const playNote = (letter) => {
    const sound = new Audio(soundBank.get(letter).file)
    sound.play()
    letter === 'a' && addEffect(imgDj, 'lila')
    letter === 'd' && addEffect(imgDj, 'red')
    letter === 'k' && addEffect(imgDj, 'blue')
    letter === 'm' && addEffect(imgDj, 'aguamarina')
    letter === 'p' && addEffect(imgDj, 'orange')
    letter === 's' && addEffect(imgDj, 'green')
    letter === 't' && addEffect(imgDj, 'pink')
    letter === 'w' && addEffect(imgDj, 'yellow')
}

const play = () => {
    clearTimeout(repeater)

    const text = getTextSoundBox()
    const size = getTextSoundBoxSize()

    text.forEach((letter, i) => {
        setTimeout(() => {
            if(soundBank.has(letter)){
                playNote(letter)
            }
        }, TIME_PER_NOTE * (i + 1))
    });

    repeater = setTimeout(() => {
        play()
    }, TIME_PER_NOTE * size)
}

play()

const buttonDropdown = document.getElementById('buttonDropdown')
const imgDropdown = document.getElementById('imgDropdown')
const dropdown = document.getElementById('dropdown')

buttonDropdown.addEventListener('click', (e) => {
    e.preventDefault()
    dropdown.classList.toggle('invisible')
    imgDropdown.classList.toggle('open')

})

const colors = document.getElementsByClassName('color')

for(let color of colors){
    color.addEventListener('click', (e) => {
        const classColorChildren = e.path.length === 8 ? e.target.classList[0]: e.target.firstElementChild.classList[0]

        addEffect(imgDj, classColorChildren)
    })
}
