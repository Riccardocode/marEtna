const apartments = [
    {
      id: 1,
      title: "The Heaven",
      category: "Room",
      price: 99.99,
      img: "../img/rooms/A.jpg",
      desc: `A cozy and inviting room with warm lighting and comfortable seating, perfect for relaxation and rejuvenation. `,
    },
    {
      id: 2,
      title: "The Retreat",
      category: "Apartment",
      price: 150.00,
      img: "../img/rooms/E.jpg",
      desc: `A private and peaceful room with calming colors and elegant decor, ideal for quiet reflection and meditation.`,
    },
    {
      id: 3,
      title: "The Sanctuary",
      category: "Room",
      price: 67.50,
      img: "../img/rooms/B.jpg",
      desc: `A serene and beautiful space with natural light and soothing accents, designed for rejuvenation and renewal.`,
    },
    {
      id: 4,
      title: "The Escape",
      category: "Apartment",
      price: 210,
      img: "../img/rooms/C.jpg",
      desc: `A stylish and cozy room with a contemporary design, perfect for escaping the hustle and bustle of daily life and enjoy relax.`,
    },
    {
      id: 5,
      title: "Ivy Heights",
      category: "Apartment",
      price: 195,
      img: "../img/rooms/D.jpg",
      desc: `Nestled among the trees, Ivy Heights offers a tranquil escape from the bustle of city life`,
    },
    {
      id: 6,
      title: "Pinecrest",
      category: "Villa",
      price: 350,
      img: "../img/rooms/11.png",
      desc: `Experience the beauty of nature in every season with a home at Pinecrest.`,
    },
    {
      id: 7,
      title: "Riverwalk",
      category: "Villa",
      price: 420,
      img: "../img/rooms/12.png",
      desc: `Take a stroll along the river just steps from your front door at Riverwalk Apartments.`,
    },
    {
      id: 8,
      title: "Lakeside",
      category: "Villa",
      price: 410,
      img: "../img/rooms/13.png",
      desc: `Wake up to breathtaking views of the lake every day at Lakeside Villa. `,
    },
    {
      id: 9,
      title: "Highpoint",
      category: "Villa",
      price: 390,
      img: "../img/rooms/14.png",
      desc: `Rise above the rest and enjoy spectacular views from your Villa at Highpoint.`,
    },
    {
      id: 10,
      title: "CityEscape",
      category: "Room",
      price: 250,
      img: "img/rooms/15.png",
      desc: `Immerse yourself in the city's vibrant energy with a home at Cityscape Apartments.`,
    },
  ];
  
  
  const sectionCenter = document.querySelector('.section-center');
  
  const container = document.querySelector('.btn-container');
  
  
  //load item
  window.addEventListener('DOMContentLoaded',function(){
    displayapartmentsItems(apartments);
    displayapartmentsButtons();
  });
  
  //filter
  
  
  
  function displayapartmentsItems(apartmentsItems){
    let displayapartments = apartmentsItems.map(function(item){
      return `<article class="apartments-item">
      <img src=${item.img}  class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    });
    displayapartments = displayapartments.join("");
    sectionCenter.innerHTML = displayapartments;
  }
  
  function displayapartmentsButtons(){
    const categories = apartments.reduce(function(values,item){
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
        const apartmentsCategory = apartments.filter(function(apartmentsItem){
          if(apartmentsItem.category === category){
            return apartmentsItem;
          }
          
        });
        if(category === 'all'){
          displayapartmentsItems(apartments);
        }
        else{
          displayapartmentsItems(apartmentsCategory);
        }
      });
    });
  }