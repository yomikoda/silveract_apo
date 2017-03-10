var titi;

$('#header-icon').click(function () {
    if ($('#mobtab-nav').css('display') == 'none'){
        $('header').css('background-color', '#7b7b7a');
        $('.burger').css('background-color', 'white');
        $('#header-icon div').css({
            top : '50%',
            display : 'none',
            transform : 'translateY(-50%)'
        });
        $('#header-icon div:first-child').css({
            display : 'block',
            top : '50%',
            transform : 'translateY(-50%)',
            transform : 'rotate(45deg)'
        });
        $('#header-icon div:last-child').css({
            display : 'block',
            top : '50%',
            transform : 'translateY(-50%)',
            transform : 'rotate(-45deg)'
        });
        $('header>h1~h1>img').attr("src", 'assets/img/logo-tablette-white.png');
        $('#mobtab-nav').css('display', 'block');
        $('body').css('overflow', 'hidden');
    } else {
        $('header').css('background-color', 'white'); 
        $('.burger').css('background-color', '#7b7b7a');
        $('#header-icon div').css({
            top : '50%',
            display : 'block',
            transform : 'translateY(-50%)'
        });
        $('#header-icon div:first-child').css({
            display : 'block',
            top : '0',
        });
        $('#header-icon div:last-child').css({
            display : 'block',
            top : '100%',
            transform : 'translateY(-50%)',
        });
        $('header h1 img').attr("src", 'assets/img/logo_silver_act.png');
        $('#mobtab-nav').css('display', 'none');
        $('body').css('overflow', 'inherit');
    }
});

$('#sticky input[type=tel]').click(function() {
    $('#sticky').css({
        'right': '0px',
        'transition': 'all ease 1s'
    });
});


$('#sticky input[type=submit]').click(function(e) {
    e.preventDefault();
    $('#sticky form').css({
        'display': 'none'
    });
    $('#send').css({
        'display': 'flex'
    });
    titi = setTimeout(wait_third_sec, 3000);
});

function wait_third_sec() {
    $('#sticky').css({
        'right': '-830px',
        'transition': 'all ease 1s'
    });
    clearTimeout(titi);
}

window.onscroll = function () {
    $('body').bind('DOMMouseScroll', function(e) {
        if (e.originalEvent.detail < 0) {
            console.log($('body').scrollTop());
            if ($('body').scrollTop() > 160) {
                if ($('#header-move').css('display') == 'none') {
                    $('#header-move').css({
                        display : 'block',
                        opacity : '1',
                        transition : 'all ease 1s'
                    });
                }
            } else {
                if ($('#header-move').css('display') == 'block') {
                    $('#header-move').css({
                        display : 'none',
                        opacity : '0',
                        transition : 'all ease 1s'
                    });
                }
            }
        }
    });
    //IE, Opera, Safari, Chrome
    $('body').bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta > 0) {
            if ($('body').scrollTop() > 370) {
                console.log($('#header-move').css('top'));
                if ($('#header-move').css('top') == '-80px') {
                    console.log('oui');
                    $('#header-move').css({
                        top : '0px',
                        opacity : 1,
                        transition : 'all ease 1s'
                    });
                }
            } else {
                if ($('#header-move').css('top') == '0px') {
                    $('#header-move').css({
                        top : '-80px',
                        opacity : 0,
                        transition : 'all ease 1s'
                    });
                }
            }
        }
    });
    //Firefox
    
}