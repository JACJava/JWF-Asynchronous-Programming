





$(function() {

    console.log("Hello World Julie")

    $('#connect').click(function() {
        $.get('download').done(function(data){
            console.log(data);
        })
    });
});