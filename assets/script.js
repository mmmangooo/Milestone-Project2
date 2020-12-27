// Credit for line below, setting javascript version to ES6 for this document, which avoids warnings for 'let' in JSHint: https://stackoverflow.com/questions/37247474/es6-in-jshint-jshintrc-has-esversion-but-still-getting-warning-using-atom/42865871//

/*jshint esversion: 6 */

/* Contact modal */
// Credit for modal code https://www.w3schools.com/howto/howto_css_modals.asp



let modal = document.getElementById('contact-modal');

let btn = document.getElementById('contact-open');

let overlay = document.getElementById('modal-overlay');

let span = document.getElementById('close-btn');

btn.onclick = function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
};

span.onclick = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};


/* Contact form */

// Making an email being sent through email.js on the submission of contact form

function sendMail(contactForm) {
emailjs.send('default_service', 'template_hhpfrte', {
    'from_name': contactForm.name.value,
    'form_email': contactForm.emailaddress.value,
    'message': contactForm.message.value
})

// Creates a response for the user to see if the email has been successfully sent, or if the sending has failed

.then(

    function(response){
        console.log('success', response);
        document.getElementById('success-alert').style.display='block';
    },

    function(error){
       console.log('failed', error);
       document.getElementById('error-alert').style.display='block';
    });

return false;
    
}