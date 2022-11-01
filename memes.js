"use strict";
// create a const for form for submit action
const form = document.querySelector("#memeForm");
// create img const to access image url
const img = form.querySelector("input[name = 'image']");
// create topText const to access top text input
const topText = form.querySelector("input[name = 'topText']");
// create bottomText const to acceess bottom text input
const bottomText = form.querySelector("input[name = 'bottomText']");
// create acceess point to results section
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // alert('this worked!');

  const newMeme = makeMeme(img.value, topText.value, bottomText.value);


});

function makeMeme(image, text1, text2) {
  const memesList = document.getElementById("memesList");

  const memeDiv = document.createElement("div");
  memeDiv.className = "memeDiv";
  memeDiv.style.positon = "relative";
  memeDiv.style.width = 400 + "px";

  const pic = document.createElement("img");
  pic.src = image;
  pic.style.width = 400 + "px";
  pic.style.display = "block";

  const top = document.createElement("div");
  top.className = "topText";
/*   top.style.position = "relative";
 */  top.innerText = text1;
  /* top.style.color = "black";
  top.style.left = 50 + "%";
  top.style.top = 20 + "%"; */

  const bottom = document.createElement("div");
  // meme.appendChild(bottom);
  bottom.className = "bottomText";
/*   bottom.style.position = "relative";
 */  bottom.innerText = text2;
  /* bottom.style.color = "black";
  bottom.style.left = 50 + "%";
  bottom.style.top = 20 + "%"; */

  const newButton = document.createElement("button");
  newButton.innerHTML = "delete";
  newButton.style.position = "absolute";
  newButton.addEventListener("click", function () {
    newButton.parentElement.remove();
  });

  memeDiv.append(pic);
  memeDiv.append(top);
  memeDiv.append(bottom);
  memeDiv.append(newButton);
  memesList.prepend(memeDiv);


  img.value = "";
  topText.value = "";
  bottomText.value = "";
}
