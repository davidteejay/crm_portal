//jS Document
$(document).ready(() => {
    
});

$('form#loginForm .btn').click(function(e) {
    
    var thisHtml = $(this).html();
    
    
    $(this).html('<i class="fas fa-spinner fa-pulse"></i>');
    
    e.preventDefault();
    
    if(thisHtml == 'ACCESS') {
        
        var iD = document.getElementById('loginID').val
    
        //chk loginID
        var iDCheckResponse = loginIDCheck('not_found')

        if(iDCheckResponse == 'not_found') {       
            passShow("Welcome new member<br />Begin by entering a new password", 'begin')
        } else if(iDCheckResponse == 'new_user') {
            passShow("We found your record<br />Continue by entering a new password", 'continue')   
        } else if(iDCheckResponse == 'old_user') {
            passShow("Welcome back<br />Login", 'login')   
        }
        else {

        }
        
    } else if(thisHtml == 'begin') {
        //login & fill info page
    } else if(thisHtml == 'continue') {
        //login & review info page
    } else if(thisHtml == 'login') {
        //login to profile page
    } else {
        
        
        
    }
    
    
});

function passShow(help, newClass) {
    $('form#loginForm .input-group#passwordField').animate({
        'marginTop': '0',
        'opacity': 1
    }, 400).parent().find('small').html(help);
    
    $('form#loginForm .btn').addClass(newClass).html(newClass)
    
    
}