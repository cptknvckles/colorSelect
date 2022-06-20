let flipEL = document.getElementById('flip')
let showEl = document.getElementById('show')

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// function hexPicker(){
//     let hex = '#'
//     for(let i = 0; i < 6; i++ ){
//        hex += num[0]
//     }

// }

flipEL.addEventListener('click', () =>{
    let hex = '#'
    for(let i = 0; i < 6; i++){
       hex += num[getRandomNumber()]
    }
    document.body.style.backgroundColor = hex 
    showEl.innerHTML = `<p>Background Color</p> ${hex}`
    showEl.style.color = hex
    console.log(hex);
})

function getRandomNumber(){
    return Math.floor(Math.random() * num.length)
}
