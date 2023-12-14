import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

export let lightbox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
    captionDelay: 300,
});
