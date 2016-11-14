$(document).ready(function () {
    $('select').material_select();
});
$('.submit').click(function () {
    Materialize.toast('We Are Calculating Your Savings', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
    setTimeout(function () {
        $('ul.tabs').tabs('select_tab', 'test12');
    }, 1500); // How long do you want the delay to be (in milliseconds)? 
});
$('.prev').click(function () {
    $('.carousel').carousel('prev');
});