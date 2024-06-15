const body = document.getElementsByTagName("body")[0]

const setColor = (name) => {
    body.style.backgroundColor = name
}

const randomColor = () => {
    const red = Math.round(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    const color = `rgb(${red},${green},${blue})`

    body.style.backgroundColor = color
    
}

