$(document).ready(function() {
    // Initialize Slick slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

    // Initialize the dialog for the booking form
    $('#bookTourForm').dialog({
        autoOpen: false,  
        modal: true,      
        title: "Book a Tour",
        width: 600,       
        draggable: true,  
        resizable: false, 
        position: { my: "center top", at: "center top+100", of: window } 
    });

    // Open the dialog when the "Book a Tour" button is clicked
    $('#bookTourBtn').on('click', function() {
        $('#bookTourForm').dialog('open');
    });

    // Handle form submission inside the dialog
    $('#tourForm').on('submit', function(event) {
        event.preventDefault();
        const name = $('#tourName').val();
        const email = $('#tourEmail').val();
        const date = $('#tourDate').val();

        if (name && email && date) {
            alert(`Tour booked successfully for ${name} on ${date}!`);
            $(this).trigger('reset');
            $('#bookTourForm').dialog('close'); // Close the dialog after successful submission
        } else {
            alert('Please fill in all fields.');
        }
    });
});
