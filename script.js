
let images = ['https://media.cntraveller.in/wp-content/uploads/2018/06/Mumbai-Drone-Photo-1.jpg','https://tse3.mm.bing.net/th?id=OIP.5POpapmp5vfzDh6Pa58XVgAAAA&pid=Api&P=0&h=180','https://tse4.mm.bing.net/th?id=OIP.7fOyUqy-ZKW7EhkR3zsH_wHaEU&pid=Api&P=0&h=180','https://tse2.mm.bing.net/th?id=OIP.ggj7xFzg1OCqkPG26y5f7QHaEo&pid=Api&P=0&h=180']


let leftButton = document.getElementById('left-button')

let rightButton = document.getElementById('right-button')

let imageContainer = document.getElementById('slider-container')

let circleContainer = document.getElementById('wrapper')

let index = 0;

imageContainer.style.backgroundImage = `url(${images[0]})`

let createCircles = () => {

    images.forEach((element,index)=> {

        let circle = document.createElement('div')
        circle.setAttribute('id',`circle${index}`)
        circle.style.width = '10px'
        circle.style.height = '10px'
        circle.style.borderRadius = '50%'
        circle.style.backgroundColor = 'white'

        circleContainer.appendChild(circle)



    })

    let target = document.getElementById(`circle${index}`)
    target.style.backgroundColor = 'black'
    target.style.border = '3px solid white'
}

createCircles()

let onHandleLeft = () => {
    if(index == 0) {
        imageContainer.style.backgroundImage = `url(${images[0]})`
    }

    else {
        index--
        imageContainer.style.backgroundImage = `url(${images[index]})`
        imageContainer.style.transition = '0.5s background'
    }

    let prev =  document.getElementById(`circle${index+1}`)

    prev.style.backgroundColor = 'white'
    prev.style.border = ''

    let target = document.getElementById(`circle${index}`)

    target.style.backgroundColor = 'black'
    target.style.border = '3px solid white'
    target.style.transition = '0.5s background'
    
}

let onHandleRight = () => {


    if(index == images.length-1) {
        imageContainer.style.backgroundImage = `url(${images[images.length-1]})`
    }

    else {
        index++
        imageContainer.style.backgroundImage = `url(${images[index]})`
        imageContainer.style.transition = '0.5s background'
    }

    let prev =  document.getElementById(`circle${index-1}`)

    prev.style.backgroundColor = 'white'
    prev.style.border = ''


    let target = document.getElementById(`circle${index}`)

    target.style.backgroundColor = 'black'

    target.style.border = '3px solid white'
    target.style.transition = '0.5s background'
}

leftButton.addEventListener('click',onHandleLeft)

rightButton.addEventListener('click',onHandleRight)

