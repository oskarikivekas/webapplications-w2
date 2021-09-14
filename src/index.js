import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addReview);
document
  .getElementById("remove-comments")
  .addEventListener("click", changeVisibility);

function addReview() {
  const div = document.createElement("div");
  const rating = document.createElement("div");
  const comment = document.createElement("div");
  const delButton = document.createElement("button");
  let container = document.getElementsByClassName("menu-layout")[0];
  let textInput = document.getElementById("text-input");
  let ratingInput = document.getElementById("rating");

  div.className = "comment";
  rating.className = "comment-rating";
  comment.className = "comment-text";
  delButton.className = "remove-comment";

  delButton.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });

  rating.innerHTML = ratingInput.options[ratingInput.selectedIndex].text;
  comment.innerHTML = textInput.value;
  delButton.innerText = "Delete";
  delButton.style.visibility = "hidden";
  container.appendChild(div);
  div.appendChild(rating);
  div.appendChild(comment);
  div.appendChild(delButton);
  textInput.value = "";
}

function changeVisibility() {
  const togglebutton = document.getElementById("remove-comments");
  let buttons = document.getElementsByClassName("remove-comment");
  let visib = "hidden";
  if (togglebutton.innerText === "Editor-mode Off") {
    visib = "visible";
    togglebutton.innerText = "Editor-mode On";
  } else {
    visib = "hidden";
    togglebutton.innerText = "Editor-mode Off";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = visib;
  }
}
