import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const itemsMarkup = addGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", itemsMarkup);

function addGalleryItems(elements) {
  return elements
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
