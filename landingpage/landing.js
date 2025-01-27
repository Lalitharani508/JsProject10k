//firebase connection


const carousel = document.getElementById('categoryCarousel');

    // Scroll Right
    function scrollRight() {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }

    // Scroll Left
    function scrollLeft() {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }

    // SweetAlert Popup for Category Click
    function showAlert(category) {
      Swal.fire({
        title: `You clicked ${category}!`,
        text: `Explore more about ${category}.`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }

    // SweetAlert for "See More" button
    function showSeeMore() {
      Swal.fire({
        title: 'More Categories',
        text: 'Additional categories are coming soon!',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }


    //write a review
    document.getElementById("addreview").addEventListener("click",()=>{
      // Window.open("./rough.html")
      // location.href="./rough.html"
    })