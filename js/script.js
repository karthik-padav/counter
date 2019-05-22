
$(document).ready(function () {
    var counter = 0;
    var fontSize = 100;
    $('#counter-value').text(counter);

    // Increment font size
    $(".increase-font").click(function () {
        fontSize = fontSize + 10;
        $("#counter-value").css("font-size", fontSize);
        $("#input-value").css("font-size", fontSize);
    });

    // Decrease font size
    $(".decrease-font").click(function () {
        fontSize = fontSize - 10;
        $("#counter-value").css("font-size", fontSize);
        $("#input-value").css("font-size", fontSize);
    });

    // Edit counter
    $(".cmtedit").on('click', function (e) {
        TBox(this);
    });

    $(".cmtedit input").on('blur', function (e) {
        RBox(this);
    });
    
    $(".cmtedit input").keydown('blur', function (e) {
        if(e.keyCode == 13){
            RBox(this);
        }
    });

    function TBox(obj) {
        var input = $(obj).find("input");
        var span = $(obj).find("span");
        input.val(span.text()).show().focus();
        span.hide();

    }
    function RBox(obj) {
        var input = $(obj);
        var span = $(obj).parent().find("span");
        span.html(input.val()).show();
        counter = input.val();
        input.hide();
    }
    // Edit counter Ends

    // Increment/Decrement on presss press
    $(document).keydown(function (e) {
        if (e.keyCode == 38 || e.keyCode == 39) {
            counter++;
            $('#counter-value').text(counter);
        } else if (e.keyCode == 40 || e.keyCode == 37) {
            counter--;
            $('#counter-value').text(counter);
        }
    });


});