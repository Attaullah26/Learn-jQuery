$(document).ready(function(){
    $('#sname').focus(function(){
        $(this).css('background-color','pink');
    });

    $('#sname').select(function(){
        $(this).css('background-color','red');
    });

    $('#sform').submit(function(){
        alert('Form submitted');
    });


   $('#sname').blur(function(){
        $(this).css('background-color','red');
    });

   $('#scountry').change(function(){
       //$(this).css('background-color','red');
       var a = $(this).html();
       $('.test').html(a);
    });

    $('#sname').blur(function(){
        $(this).css('background-color','red');
    });

    $('#sname').select(function(){
        $(this).css('background-color','red');
    });

    
});


// Get methods of form

$(document).ready(function(){
    var name = $('#sform').submit(function(){
        var name = $('#sname').val();
        var classname = $('#sclass').val();

        alert('Name : ' + name + 'Class : ' + classname );
    });

    // Set value by set method
    $(document).ready(function(){
        $('#sname').val('Babar Writes');
    });
    
});