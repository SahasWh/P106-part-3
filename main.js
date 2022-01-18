function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QaCmZmF-h/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log('gotResult');
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("1").innerHTML = 'I can here - ' + results[0].label;
        document.getElementById("2").innerHTML = 'Accuracy' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("1").style.color = "rgb("+random_number_r+","+random_number_g+","+ random_number_r+")";
        document.getElementById("2").style.color = "rgb("+random_number_r+","+random_number_g+","+ random_number_r+")";
        if (results[0].label == "Cat") {
            
        } else if (results[0].label == "Dog") {
            
        } else if (results[0].label == "Lion") {
            
        } else {
            
        }
    }
    }