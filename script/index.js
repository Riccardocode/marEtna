function getHeadTemplate(){
    return `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    

    <title>Vacation</title>
    `;
}

// Define the header template function
function getHeaderTemplate(logoSrc, phoneNumber, email) {
    return `
        <header class="sticky-top">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="col-sm-6 nav-personalized">
                    <a class="navbar-brand" href="#"><img src="${logoSrc}" height="45" width="55" alt=""></a>
                </div>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-md-6 collapse navbar-collapse nav-personalized" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        <a class="nav-link" href="rooms.html">Rooms</a>
                        <a class="nav-link" href="tours.html">Tours</a>
                        <a class="nav-link" href="contactus.html">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
        `;
}

// Define the footer template function
function getFooterTemplate(logoSrc, copyrightText) {
    return `
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col col-sm-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src="${logoSrc}" width="80" height="80" alt="">
                        </a>
                    </div>
                    <div class="col col-sm-4">
                        <span style="align-self: center;" class="mb-3 mb-md-0 text-muted">${copyrightText}</span>
                    </div>
                    <div class="col col-sm-4 d-flex align-items-center">
                        <i style="color:blue;margin:0 0.5rem 0 0.5rem;" class="fa-brands fa-twitter"></i>
                        <i style="color:blue;margin:0 0.5rem 0 0.5rem;" class="fa-brands fa-facebook"></i>
                        <i style="color:blue;margin:0 0.5rem 0 0.5rem;" class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
        </footer>  
    `;
}

