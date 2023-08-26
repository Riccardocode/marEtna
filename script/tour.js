// Start Home Page

function toursHomePage(tours) {
    return tours.map(function (item) {
        return `
        <div class="col-xs-12 col-md-6">
          <div class="media">
              <img class="d-flex mr-3 img-thumbnail" src="${item.img}" alt="${item.title}" />
              <div class="media-body align-self-center">
                <a href="tour.html?id=${item.id}"><h3>${item.title}</h3></a> 
                <p class="d-none d-sm-block">${item.desc} </p>
              </div>
          </div>
        </div>
      `;
      }).join('');
  }
  
  //End Home Page

  //Start Single Tour Page
function displaySingleTourItem(tours,id) {
    let tour = tours.find((item) => item.id == id);
    if (tour) {
      return `
      <h1>${tour.title}</h1>
      <img src="${tour.img}" class="photo-single-room" alt="${tour.title}">
      <p>${tour.desc}</p>
      `;
    } else {
      // Handle the case where 'room' is not found based on the given 'id'
      return "<p>Room not found</p>";
    }
  }
  
  // End Single Tour Page
  