import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const itemsMarkup = addGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", itemsMarkup);
galleryEl.addEventListener("click", onGalleryClick);

function addGalleryItems(elements) {
  return elements
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
