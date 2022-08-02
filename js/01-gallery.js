import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const itemsMarkup = addGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", itemsMarkup);
galleryEl.addEventListener("click", onGalleryClick);

let wideViewMode = "";

function addGalleryItems(elements) {
  return elements
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  onModalOpen(event);
}

function onEscapeEvent(event) {
  const isEscKey = event.code === "Escape";
  if (isEscKey) {
    onModalClose();
  }
}

function onModalOpen(event) {
  wideViewMode = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscapeEvent);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscapeEvent);
      },
    }
  );
  wideViewMode.show();
}

function onModalClose() {
  wideViewMode.close();
}
