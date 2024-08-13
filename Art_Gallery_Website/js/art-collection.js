$(document).ready(function() {
    // Array of art pieces with title, image URL, and description
    const artPieces = [
        { title: 'Abstract Dream', image: 'images/art1.jpg', description: 'An abstract piece evoking the surreal and the unknown.' },
        { title: 'Color Symphony', image: 'images/art2.jpg', description: 'A vibrant burst of colors representing the chaos and beauty of life.' },
        { title: 'Silent Whispers', image: 'images/art3.jpg', description: 'Subtle tones and forms that speak in quiet, calming waves.' },
        { title: 'Fragmented Reality', image: 'images/art4.jpg', description: 'An abstract exploration of reality, divided into chaotic fragments.' },
        { title: 'Inner Turmoil', image: 'images/art5.jpg', description: 'A deep dive into the complexities of human emotion and struggle.' },
        { title: 'Urban Echoes', image: 'images/art6.jpg', description: 'A modern piece reflecting the echoes of the urban landscape.' },
        { title: 'Mystic Flow', image: 'images/art7.jpg', description: 'An abstract flow of shapes and colors, creating a sense of mystery.' },
        { title: 'Timeless', image: 'images/art8.jpg', description: 'A piece that transcends time, with a mix of classic and modern elements.' },
        { title: 'Cosmic Dance', image: 'images/art9.jpg', description: 'An abstract interpretation of the universe in motion.' },
        { title: 'Ephemeral Beauty', image: 'images/art10.jpg', description: 'A delicate piece capturing the fleeting nature of beauty.' }
    ];

     // Append art pieces to the gallery
    artPieces.forEach(piece => {
        $('.art-gallery').append(`
            <div class="art-item">
                <a href="${piece.image}" class="image-link" data-description="${piece.description}">
                    <img src="${piece.image}" alt="${piece.title}">
                    <div class="art-title">${piece.title}</div>
                </a>
                <p><strong>${piece.title}</strong></p>
            </div>
        `);
    });

    // Initialize Magnific Popup
    $('.image-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        image: {
            verticalFit: true
        },
        callbacks: {
            // Add description on open
            open: function() {
                var description = this.currItem.el.data('description');
                $('.mfp-content').append(`<div class="art-description">${description}</div>`);
            },
            // Remove description on close
            close: function() {
                $('.art-description').remove();
            }
        }
    });
});
