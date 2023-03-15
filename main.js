let flipEL = document.getElementById('flip')
let showEl = document.getElementById('show')
let showGrad = document.querySelector('.showGrad')
const gradientEl = document.getElementById('gradient')
const degreeShow = document.querySelector('.degrees')
const output = document.querySelector('.degree')

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


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
    showEl.innerHTML = `<p>Background Color</p> ${hex}`
    showEl.style.color = hex
    console.log(hex);
})


gradientEl.addEventListener('click', () =>{
    let startHex = helperFunc()
    let middleHex = helperFunc()
    let endHex = helperFunc()
    let angle = degreeShow.value
    let gradient = `linear-gradient(${angle}deg, ${startHex}, ${middleHex}, ${endHex})`
    document.body.style.background = gradient
    showEl.innerHTML = `<p> Background Gradient</p> CSS: <br> background: ${gradient}`
    showGrad.style.background = gradient
    console.log(gradient);

})

output.innerHTML = degreeShow.value 

degreeShow.oninput = function() {
    output.innerHTML = this.value
}

function getRandomNumber(){
    return Math.floor(Math.random() * num.length)
}

//linear-gradient(45deg, #BC4F98, #F6F6CA) i really like that gradient! 