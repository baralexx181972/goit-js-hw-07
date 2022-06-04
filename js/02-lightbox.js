import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImageCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  
  <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
`;
    })
    .join("");
}

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captions: true,
  captionsData: "alt",
});
