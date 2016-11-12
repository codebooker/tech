$('.carousel').carousel({
    full_width: true
    , time_constant: 100
    , indicators: false
});
$('.next').click(function () {
    $('.carousel').carousel('next');
});
$('.prev').click(function () {
    $('.carousel').carousel('prev');
});
$('.startbutton').click(function () {
    $('.carousel').carousel('next');
});
// Materialize.toast(message, displayLength, className, completeCallback);
Materialize.toast('', 4000) // 4000 is the duration of the toast
$(document).ready(function () {
    $('select').material_select();
});
var $select = $('select');

$select
    .on('change', function () {
        var $this = $(this),
            // use replace to remove extra white (if desired)
            txt = $this.find('option:selected').text().replace(/\s+/g, ' ');
        // add title to select
        $this.attr('title', txt);
    })
    .change()
    .find('option').each(function () {
        var $this = $(this);
        // add title to each option, so it works on hover
        $this.attr('title', $this.text());
    });