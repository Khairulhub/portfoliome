# portfoliome
#Full responsive
<h1>My orginal portfolio </h1>
#section 
1) navbar sticky top
2) text animation
3) About me with js{work on buttons}
4) owl carosel plugin for what can i do
5) isotope plugin for works




#js
function are aboutme,skills,experience,education
#owl carosel 
<script>
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                668: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })
    </script>
    
  #isotope for filter
  <script>
        var $grid = $('.item-card').isotope({
            // options
        });
        // filter items on button click
        $('.item-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });</script>
![fullpic](https://user-images.githubusercontent.com/81640708/165086654-3de66902-52c1-4583-9599-48281f531b9b.png)
