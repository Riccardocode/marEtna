const tours = [
    {
      id: 1,
      title: "Isola Bella",
      category: "Swim",
      img: "./img/tours/isolaBella.png",
      desc: `One of the most beautiful location in Sicily`,
    },
    {
        id: 2,
        title: "Etna",
        category: "hike",
        img: "./img/tours/EtnaHike.png",
        desc: `Go hiking in one of the most iconic active vulcanos`,
      },
      {
        id: 3,
        title: "Giardini Naxos",
        category: "Swim",
        img: "./img/tours/giardiniNaxos2.png",
        desc: `Enjoy a day swim at Giardini Naxos to explore the beauties of the island`,
      },
      {
        id: 4,
        title: "Teatro Greco",
        category: "Visit",
        img: "./img/tours/teatroGreco.png",
        desc: `Visit one of the oldest greek theatres built in Sicily`,
      },
      {
        id: 5,
        title: "Taormina",
        category: "Visit",
        img: "./img/tours/taormina.png",
        desc: `Old city of Taormina will amaze you with its beauty`,
      },
]

const sectionCenter = document.querySelector('.section-center');
  
  const container = document.querySelector('.btn-container');
  
  
  //load item
  window.addEventListener('DOMContentLoaded',function(){
    displaytoursItems(tours);
    displaytoursButtons();
  });
  
  //filter
  
  
  
  function displaytoursItems(toursItems){
    let displaytours = toursItems.map(function(item){
      return `<article class="tours-item">
      <img src=${item.img}  class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.category}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    });
    displaytours = displaytours.join("");
    sectionCenter.innerHTML = displaytours;
  }
  
  function displaytoursButtons(){
    const categories = tours.reduce(function(values,item){
      if(!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" type="button" data-id=${category}>
                ${category}
              </button>`;
    }).join("");
    
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn){
      btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const toursCategory = tours.filter(function(toursItem){
          if(toursItem.category === category){
            return toursItem;
          }
          
        });
        if(category === 'all'){
          displaytoursItems(tours);
        }
        else{
          displaytoursItems(toursCategory);
        }
      });
    });
  }