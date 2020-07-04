// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // Ambil isi href
    var link = $(this).attr('href');
    // menangkap elemen dari isi href
    var elemenLink = $(link);
    // Pindahkan scroll dengan animasi

    $('html, body').animate({
        scrollTop: elemenLink.offset().top - 55
    }, 1250, 'easeOutBack', 'easeInOutBack');

    e.preventDefault();

});
// parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 8 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    // portfolio
    // if (wScroll > $('.portfolio').offset().top()) {
    //     // $('.portfolio .img-thumbnail').addClass('.muncul');
    //     console.log('ok');

    // }

});