$('#red-button').click(function () {
    $('#red-button').css('width', '150%');
    $('#user-info').css('display', 'block');
});

$('#yellow-button').click(function () {
    $('#yellow-button').css('width', '150%');
    $('#second-form').css('display', 'block');
});

$('.quit').click(function () {
    var check = $(this).attr('id');
    if (check == '1') {
        $('#red-button').css('width', '290px');
        $('#user-info').css('display', 'none');  
    } else if ( check == '2') {
        $('#yellow-button').css('width', '290px');
        $('#second-form').css('display', 'none');
    }
})

$('#row-img').click(function () {
    $('#message-zone').css('display', 'none');
    $('#row-img').css('transform', 'rotate(360deg)');
    $('#select-subject').css('border', 'none');
    $('#select-subject ul li').css('display', 'block');
    $('#select-subject ul').css('height', 'auto');
});

$('#select-subject ul li').click(function () {
    var _color = "#dad7d7";
    if ($($(this).html()).html() != "- Sujet -") {
        $('#select-subject ul li').css('display', 'none');
        var _color = $(this).css('background-color');
        $('#select-subject').css('border', 'solid 2px ' + _color);
        $('#select-subject').css('border-bottom', 'none');
        $(this).css('display', 'block');
        $(this).css('height', '20px');
        $(this).css('transition','all ease 1s');
        _color = $(this).css('background-color');
        $('#message-zone').css('border-color', _color);
        $('#message-zone textarea').css('border-color', _color);
        $('#message-zone').css('display', 'flex');
    } else {
        $('#select-subject ul li').css('display', 'none');
        $('#select-subject').css('border', 'solid 2px ' + _color);
        $(this).css('display', 'block');
        $(this).css('height', '20px');
        $('#row-img').css('transform', 'rotate(270deg)');
    }
});