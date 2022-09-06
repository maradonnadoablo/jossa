$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.header__item, .span1, .span2, .span3,.header__burger,.egg1 ,.egg2,.contact').toggleClass('active');
    });
});