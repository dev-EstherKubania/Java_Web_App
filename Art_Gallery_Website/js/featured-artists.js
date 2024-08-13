$(document).ready(function() {
    const artists = [
        { name: 'Liam Carter', image: 'images/artist1.jpg' },
        { name: 'Sophia Bennett', image: 'images/artist2.jpg' },
        { name: 'Olivia Davis', image: 'images/artist3.jpg' },
        { name: 'Emily Evans', image: 'images/artist4.jpg' },
        { name: 'Ava Green', image: 'images/artist5.jpg' },
        { name: 'Noah Harris', image: 'images/artist6.jpg' },
        { name: 'James Johnson', image: 'images/artist7.jpg' },
        { name: 'Jackson King', image: 'images/artist8.jpg' },
        { name: 'Noah Lee', image: 'images/artist9.jpg' },
        { name: 'Ava Martin', image: 'images/artist10.jpg' },
    ];

    artists.forEach(artist => {
        $('.gallery').append(`
            <div class="artist-item">
                <a href="${artist.image}" class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </a>
                <p>${artist.name}</p>
            </div>
        `);
    });
    
    //popup plugin
    $('.artist-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300 // duration of the zoom effect
        }
    });
});
