//jQuery code for fading out the 'landing page'-overlay in index.html, and showing the content hidden under it//

$('#map-link').click(function() {
    $('.landing-overlay').fadeOut(2000, function() {
        $('.landing-overlay').addClass('hide-overlay');
    });
})

