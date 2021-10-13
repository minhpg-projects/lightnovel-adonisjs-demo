import Splide from '@splidejs/splide';
window.Splide = Splide

new Splide( '.splide' , {
	type   : 'loop',
    perPage: 4,
    breakpoints: {
        640: {
            perPage: 1,
        },
        768: {
            perPage: 3
        },
        1024: {
            perPage: 4
        },
        1280: {
            perPage: 4
        }
    }
}).mount();
