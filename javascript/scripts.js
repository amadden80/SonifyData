
function SonifyData_audio(data_input){
    if (data_input.length){
        
        var data_array = (data_input).replace(/\D/g,' ').split(" ");

        var clean_data = [];

        for (var i = 0; i<data_array.length; i+=1){
                    if (data_array[i].length>0){
                        clean_data.push(parseFloat(data_array[i]));
                    }
                }

        console.log("Cleaned Data: " + clean_data);
        Sonifizer_array(clean_data, Sonifizer_Play);
    }
}

function submit_data_audio(e){
    e.preventDefault();
    var data_input = $('#data-input').val()
    SonifyData_audio(data_input)
}


$(function(){
    $('#data-play-button').on('click', submit_data_audio)
});

