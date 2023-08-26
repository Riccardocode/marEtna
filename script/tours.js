import tours from '../data/tours-data.js';



const sectionCenterTours = document.querySelector(".section-center-tours");

const containerTours = document.querySelector(".btn-container-tours");

//load item
window.addEventListener("DOMContentLoaded", function () {
  displaytoursItems(tours);
  displaytoursButtons();
});




//filter

function displaytoursItems(toursItems) {
  let displaytours = toursItems.map(function (item) {
    return `<article class="tours-item">
      <img src=${item.img}  class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
          <a href="tour.html?id=${item.id}"><h3>${item.title}</h3></a> 
          
          <h4 class="price">${item.category}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });
  displaytours = displaytours.join("");
  if(displaytours){
    sectionCenterTours.innerHTML = displaytours;
  }
  
}

function displaytoursButtons() {
  const categories = tours.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
                ${category}
              </button>`;
    })
    .join("");

  containerTours.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const toursCategory = tours.filter(function (toursItem) {
        if (toursItem.category === category) {
          return toursItem;
        }
      });
      if (category === "all") {
        displaytoursItems(tours);
      } else {
        displaytoursItems(toursCategory);
      }
    });
  });
}
