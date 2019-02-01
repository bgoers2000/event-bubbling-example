$(document).ready(function(){
    console.log('DOMCONTENTLOADED');
    bindEvents();
});


function bindEvents(){
    // $('table').on('click','button',deleteBook)


    $('.blue').on('click',invokeBlue);
    $('.green').on('click', invokeGreen);
    $('.yellow').on('click',invokeYellow);
    $('.orange').on('click',invokeOrange);
    $('.red').on('click',invokeRed);
}

function invokeBlue(e){
    // e.stopPropagation();
    console.log('Blue');
    $('#textOutput').text('Blue');
}

function invokeGreen(e) {
    // e.stopPropagation();
    console.log('Green');
    $('#textOutput').text('Green');
}

function invokeYellow(e) {
    // e.stopPropagation();
    console.log('Yellow');
    $('#textOutput').text('Yellow');
}

function invokeOrange(e) {
    // e.stopPropagation();
    console.log('Orange')
    $('#textOutput').text('Orange');
}

function invokeRed(e) {
    // e.stopPropagation();
    console.log('Red')
    $('#textOutput').text('Red');
}