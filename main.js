let flipEL = document.getElementById('flip')
let showEl = document.getElementById('show')
let showGrad = document.querySelector('.showGrad')
const gradientEl = document.getElementById('gradient')
const degreeShow = document.querySelector('.degrees')
const output = document.querySelector('.degree')
const animateEl = document.querySelector('.animate')

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
function getRandomNumber(){
    return Math.floor(Math.random() * num.length)
}

function helperFunc(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
       hex += num[getRandomNumber()]
    }
    return hex 
}


flipEL.addEventListener('click', () =>{
    let hex = helperFunc()
    document.body.style.background = hex
    document.documentElement.style.background = hex
    showEl.innerHTML = `<p>Background Color</p> ${hex}`
    showEl.style.color = hex
})


gradientEl.addEventListener('click', () =>{
    let startHex = helperFunc()
    let middleHex = helperFunc()
    let endHex = helperFunc()
    let angle = degreeShow.value
    let gradient = `linear-gradient(${angle}deg, ${startHex}, ${middleHex}, ${endHex})`
    document.body.style.background = gradient
    document.documentElement.style.background = gradient
    document.body.style.color = 'white'
    showEl.innerHTML = `<p> Background Gradient</p> CSS: <br> background: ${gradient}`
    showEl.style.color = 'white'
    
})

output.innerHTML = degreeShow.value 

degreeShow.oninput = function() {
    output.innerHTML = this.value
}

if(document.getElementById('Animate').checked){
    console.log(true)
}
animateEl.addEventListener('click', () => {
    document.body.classList.toggle('gradient-animate')
    console.log(animateEl)
    
})

//linear-gradient(45deg, #BC4F98, #F6F6CA) i really like that gradient! 