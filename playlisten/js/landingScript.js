//scroll suave dos links internos
$('.navbar-header a').click(function(e){
    e.preventDefault();
    var id= $(this).attr('href');
    var targetOffset = $(id).offset().top;
    var menuHeight = $('.navbar-header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)

    console.log(id)
    console.log(menuHeight)
});

// Playlists Slider
$(".playlist-slider").slick({
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $("#playlist-prev"),
    nextArrow: $("#playlist-next"),
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
            {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }   
    ]    
});

//Feedback Slider
$(".feedback-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $("#feedback-prev"),
    nextArrow: $("#feedback-next"),
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        }
    ]    
});

//SideBar
function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("sidebar-overlay").style.display = "block";
}
  
function closeNav(){
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("sidebar-overlay").style.display = "none";
}