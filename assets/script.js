/* Landing page */

//jQuery code for fading out the 'landing page'-overlay in index.html, and showing the content hidden under it//

$('#map-link').click(function() {
    $('.landing-overlay').fadeOut(2000, function() {
        $('.landing-overlay').addClass('hide-overlay');
    });
})




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