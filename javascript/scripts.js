
function SonifyData_audio(data_input, seconds_input){
    if (data_input.length){
        
        var data_array = (data_input).replace(/\D/g,' ').split(" ");
        var seconds = seconds_input;

        var clean_data = [];

        for (var i = 0; i<data_array.length; i+=1){
                    if (data_array[i].length>0){
                        clean_data.push(parseFloat(data_array[i]));
                    }
                }

        console.log("Cleaned Data: " + clean_data);
        console.log("Seconds: " + seconds);
        Sonifizer_array(clean_data, Sonifizer_Play, seconds);
    }
}

function submit_data_audio(e){
    e.preventDefault();
<<<<<<< HEAD
    var data_input = $('#data-input').val();
    var seconds_input = $('#seconds-input').val();
    SonifyData_audio(data_input, seconds_input);
=======
    var data_input = $('#data-input').val()
    var seconds_input = parseFloat($('#seconds-input').val())

    if (seconds_input >10){
        $('#seconds-input').val(10);
        seconds_input = 10;
    }
    else if(seconds_input <= 0){
        $('#seconds-input').val(1);
        seconds_input = 1;
    }

    SonifyData_audio(data_input, seconds_input)
>>>>>>> gh-pages
}


$(function(){
    $('#data-play-button').on('click', submit_data_audio);
    $('#seconds-input').val(1);
});

