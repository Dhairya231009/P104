ebcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90,
    })
    camera = document.getElementById('camera')
    webcam.attach('#camera')
    function take_snashot(){
        webcam.snap(function(data_uri)){
            document.getElementById("result").innerHTML ='<image id = 'captured_image' '+data_uri+
        }
    }