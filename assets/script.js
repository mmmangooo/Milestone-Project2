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

function sendMail(contactForm) {                       //'sendMail' is being flagged as unused variable in JSHint, see TESTING.md for details
emailjs.send('default_service', 'template_hhpfrte', {  //'emailjs' is being flagged as undefined variable in JSHint, see TESTING.md for details
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