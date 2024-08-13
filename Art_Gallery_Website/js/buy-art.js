$(document).ready(function() {
    const artPieces = [
        { title: 'Abstract Dream', image: 'images/art1.jpg', description: 'An abstract piece evoking the surreal and the unknown.', price: '$100' },
        { title: 'Color Symphony', image: 'images/art2.jpg', description: 'A vibrant burst of colors representing the chaos and beauty of life.', price: '$150' },
        { title: 'Silent Whispers', image: 'images/art3.jpg', description: 'Subtle tones and forms that speak in quiet, calming waves.', price: '$200' },
        { title: 'Fragmented Reality', image: 'images/art4.jpg', description: 'An abstract exploration of reality, divided into chaotic fragments.', price: '$250' },
        { title: 'Inner Turmoil', image: 'images/art5.jpg', description: 'A deep dive into the complexities of human emotion and struggle.', price: '$300' },
        { title: 'Urban Echoes', image: 'images/art6.jpg', description: 'A modern piece reflecting the echoes of the urban landscape.', price: '$180' },
        { title: 'Mystic Flow', image: 'images/art7.jpg', description: 'An abstract flow of shapes and colors, creating a sense of mystery.', price: '$220' },
        { title: 'Timeless', image: 'images/art8.jpg', description: 'A piece that transcends time, with a mix of classic and modern elements.', price: '$280' },
        { title: 'Cosmic Dance', image: 'images/art9.jpg', description: 'An abstract interpretation of the universe in motion.', price: '$350' },
        { title: 'Ephemeral Beauty', image: 'images/art10.jpg', description: 'A delicate piece capturing the fleeting nature of beauty.', price: '$170' }
    ];

    // Load art pieces into the gallery
    artPieces.forEach(piece => {
        $('.art-gallery').append(`
            <div class="art-item">
                <img src="${piece.image}" alt="${piece.title}">
                <p>${piece.title}</p>
                <p>${piece.description}</p>
                <p><strong>Price:</strong> ${piece.price}</p>
                <button class="buy-btn" data-title="${piece.title}" data-price="${piece.price}">Buy Now</button>
            </div>
        `);
    });

    // Initialize jQuery UI dialog
    $('#checkout-dialog').dialog({
        autoOpen: false,  
        modal: true,      
        width: 500,       
        draggable: true,  
        resizable: false, 
        buttons: {
            "Complete Purchase": function() {
                $('#checkout-form').submit();
            },
            "Cancel": function() {
                $(this).dialog("close");
            }
        }
    });

    // Handle Buy Now button click
    $('.art-gallery').on('click', '.buy-btn', function() {
        const title = $(this).data('title');
        const price = $(this).data('price');
        $('#art-name').val(title);
        $('#price').val(price);
        $('#checkout-dialog').dialog('open');
    });

    // Handle checkout form submission
    $('#checkout-form').on('submit', function(event) {
        event.preventDefault();
        alert('Purchase completed successfully!');
        $(this).trigger('reset');
        $('#checkout-dialog').dialog('close');
    });
});
