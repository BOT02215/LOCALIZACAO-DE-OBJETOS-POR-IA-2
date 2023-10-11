modelStatus = false

function setup() {
    canvas = createCanvas(532, 350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function startScanning() {
    objectDetected = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status: Identificando objetos"
     inputValue = document.getElementById("inputValue").value
}

function modelLoaded() {
    console.log("Modelo Carregado")
    modelStatus = true
}

object = []
function gotResult(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        object = result
    }
}

function draw() {
    image(video, 0, 0, 532, 350)
}