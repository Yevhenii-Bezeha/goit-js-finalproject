import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

const galleryImages = galleryItems
.map(image => {
  const galleryItem = `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
    <img class="gallery__image"
    src="${image.preview}" 
    loading="lazy"
    alt="${image.description}"/>
   </a>
</li>`;
  return galleryItem;
})
.join('');

list.insertAdjacentHTML('afterbegin', galleryImages);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    // captionPosition: 'bottom',
    captionDelay: 250,
});

// const increasePic = (event) => {
//     event.preventDefault();
  
//     if (event.target.nodeName !== "IMG") {
//         return
//     };
  
//     const imgSrc = event.target.dataset.source;
//     const imgAlt = event.target.alt 
// };

// list.addEventListener('click', increasePic);
