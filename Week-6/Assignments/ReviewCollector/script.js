const reviewerName = document.getElementById("reviewer-name");
const reviewTitle = document.getElementById("review-title");
const reviewDescription = document.getElementById("review-description");
const cardContainer = document.querySelector(".card-contain");
const reviewBtn = document.getElementById("review-button");
const stars = document.querySelectorAll(".star");
let selectedStars = 0;
let cardArray = [];

// console.log(stars);
stars.forEach((star) => {
  star.addEventListener("click", function () {
    selectedStars = parseInt(this.getAttribute("data-value"));
    updateStars(selectedStars);
  });
});

function updateStars(rating) {
  stars.forEach((star) => {
    star.classList.remove("selected");
    if (parseInt(star.getAttribute("data-value")) <= rating) {
      star.classList.add("selected");
    }
  });
}

reviewBtn.addEventListener("click", function () {
  if (
    !reviewerName.value ||
    !reviewTitle.value ||
    !reviewDescription.value ||
    selectedStars === 0
  ) {
    alert("Please fill all fields and select a star rating.");
    return;
  }
  const reviewObject = {
    name: reviewerName.value,
    title: reviewTitle.value,
    description: reviewDescription.value,
    date: new Date().toLocaleString(),
  };

  cardArray.push(reviewObject);
  // console.log(cardArray);

  const newLi = document.createElement("li");
  newLi.classList.add("card");

  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");

  const newDiv1 = document.createElement("div");
  newDiv1.classList.add("starContainer");

  for (let i = 1; i <= selectedStars; i++) {
    const newStar = document.createElement("span");
    newStar.textContent = "★";
    newStar.classList.add("star", "selected");
    newDiv1.append(newStar);
  }

  const newDiv2 = document.createElement("div");
  newDiv2.classList.add("card-container");

  const newSpan1 = document.createElement("span");
  const newSpan2 = document.createElement("span");

  newH2.textContent = reviewTitle.value;
  newP.textContent = reviewDescription.value;
  newSpan1.textContent = `~${reviewerName.value}`;
  newSpan2.textContent = new Date().toLocaleString();

  reviewerName.value = "";
  reviewTitle.value = "";
  reviewDescription.value = "";
  selectedStars = 0;
  updateStars(selectedStars);

  newDiv2.append(newSpan1);
  newDiv2.append(newSpan2);
  newLi.append(newH2);
  newLi.append(newP);
  newLi.append(newDiv1);
  newLi.append(newDiv2);
  cardContainer.prepend(newLi);
});
