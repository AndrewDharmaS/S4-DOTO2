
let next = $('#next');
let prev = $('#prev');

let container = $('#slider-container');
let position = 0;

let imageCount = 6;
container.css({
    left: position+"%"
});
next.on('click', function() {
    position = (position < ((imageCount - 1) * 100)) ? position + 100 : 0;
    container.css({
        left: -position+'%'
    })
});
prev.on('click', function() {
    position = (position > 0) ? position - 100 : ((imageCount - 1) * 100);
    container.css({
        left: -position+'%'
    })
});