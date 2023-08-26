const apartments = [
    {
      id: 1,
      title: "The Heaven",
      category: "Room",
      price: 99.99,
      img: "./img/rooms/A.jpg",
      desc: `A cozy and inviting room with warm lighting and comfortable seating, perfect for relaxation and rejuvenation. `,
    },
    {
      id: 2,
      title: "The Retreat",
      category: "Apartment",
      price: 150.00,
      img: "./img/rooms/E.jpg",
      desc: `A private and peaceful room with calming colors and elegant decor, ideal for quiet reflection and meditation.`,
    },
    {
      id: 3,
      title: "The Sanctuary",
      category: "Room",
      price: 67.50,
      img: "./img/rooms/B.jpg",
      desc: `A serene and beautiful space with natural light and soothing accents, designed for rejuvenation and renewal.`,
    },
    {
      id: 4,
      title: "The Escape",
      category: "Apartment",
      price: 210,
      img: "./img/rooms/C.jpg",
      desc: `A stylish and cozy room with a contemporary design, perfect for escaping the hustle and bustle of daily life and enjoy relax.`,
    },
    {
      id: 5,
      title: "Ivy Heights",
      category: "Apartment",
      price: 195,
      img: "./img/rooms/D.jpg",
      desc: `Nestled among the trees, Ivy Heights offers a tranquil escape from the bustle of city life`,
    },
    {
      id: 6,
      title: "Pinecrest",
      category: "Villa",
      price: 350,
      img: "./img/rooms/11.png",
      desc: `Experience the beauty of nature in every season with a home at Pinecrest.`,
    },
    {
      id: 7,
      title: "Riverwalk",
      category: "Villa",
      price: 420,
      img: "./img/rooms/12.png",
      desc: `Take a stroll along the river just steps from your front door at Riverwalk Apartments.`,
    },
    {
      id: 8,
      title: "Lakeside",
      category: "Villa",
      price: 410,
      img: "./img/rooms/13.png",
      desc: `Wake up to breathtaking views of the lake every day at Lakeside Villa. `,
    },
    {
      id: 9,
      title: "Highpoint",
      category: "Villa",
      price: 390,
      img: "./img/rooms/14.png",
      desc: `Rise above the rest and enjoy spectacular views from your Villa at Highpoint.`,
    },
    {
      id: 10,
      title: "CityEscape",
      category: "Room",
      price: 250,
      img: "./img/rooms/15.png",
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
  
  //Start Home page
  function roomsHomePage(){
    return apartments.map(function(item){
      return `
      <div class="col col-md-6 col-lg-4">
            <div class="card" style="width: 25rem;margin-bottom: 1rem;">
              <img class="card_img" src="${item.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title" style="margin-bottom: 0;">${item.title}</h5>
                <i class="fa-regular fa-user" style="color:rgb(199, 199, 199);font-size: 10px;margin: 0;"> 3</i>
                <i class="fa-solid fa-shower" style="color:rgb(199, 199, 199);font-size: 12px;margin: 0;"> 2</i>
                <i class="fa-solid fa-bed" style="color:rgb(199, 199, 199);font-size: 12px;margin: 0;"> 1</i>
                <p class="card-text">${item.desc}</p>
                <div class="col">
                  <a href="room.html?id=${item.id}" class="btn btn-primary">More Details</a>
                </div>
              </div>
            </div>
          </div>
      `;
    }).join('');
  }


  function displaySingleRoomItem(id){
    let room = apartments.find(item => item.id == id);
    if (room) {
      return `
      <h1>${room.title}</h1>
      <img src="${room.img}" class="photo-single-room" alt="${room.title}">
      <div class="single-room-cat">
        <h3>Category: ${room.category}</h3>
        <h3>Price: ${room.price}</h3>
        <br>
       
      </div>
      <p>Services to be added</p>
      <p>${room.desc}</p>
      `;
  } else {
      // Handle the case where 'room' is not found based on the given 'id'
      return '<p>Room not found</p>';
  }
  }

  //End Home page
  //Start Rooms.html
  function displayapartmentsItems(apartmentsItems){
    let displayapartments = apartmentsItems.map(function(item){
      return `<article class="apartments-item">
      <img src=${item.img}  class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
        <a href="room.html?id=${item.id}">
          <h4>${item.title}</h4>
        </a>
          
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