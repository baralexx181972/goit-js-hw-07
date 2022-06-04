import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImageCardsMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

imgContainer.addEventListener("click", (evt) => {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();

  const instance = createInstance(evt);
  instance.show();

  window.addEventListener(
    "keydown",
    onEscKeyPress.bind(imgContainer, instance)
  );
});

function createInstance(evt) {
  return basicLightbox.create(
    `<img  src="${evt.target.getAttribute("data-source")}">`
  );
}
function onEscKeyPress(instance, event) {
  console.log(event);
  const ESC_KEY_CODE = "Escape";
  if (event.code === ESC_KEY_CODE) {
    window.removeEventListener("keydown", onEscKeyPress);
    instance.close();
  }
}
