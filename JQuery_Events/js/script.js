 $(function(){
    var carouselList = $("#carousel ul");

    var intervalRight = setInterval(moveRight, 3000);
    var slideNumber = 1;

    function moveRight() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        slideNumber = (slideNumber > 4) ? slideNumber = 1 : slideNumber + 1;
        
        $(".btn-circle").removeClass("active");
        $(".btn-circle:nth-of-type("+slideNumber+")").removeClass("active");
        $(".circle button:nth-of-type("+slideNumber+")").addClass("active");
        carouselList.animate({'marginLeft':-750}, 500, moveSlideRight);
    }
    
    function moveSlideRight() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    $("#btn-right").click(function (){
        clearInterval(intervalRight);
        moveRight();
    });

    function moveLeft() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");

        slideNumber = (slideNumber == 1) ? 5 : slideNumber -1;

        $(".btn-circle").removeClass("active");
        $(".btn-circle:nth-of-type("+slideNumber+")").removeClass("active");
        $(".circle button:nth-of-type("+slideNumber+")").addClass("active");

        carouselList.css({'marginLeft': -750});
        firstItem.before(lastItem);
        carouselList.animate({'marginLeft': 0}, 500, moveSlideLeft);
    }

    $("#btn-left").click(function (){
        clearInterval(intervalRight);
        moveLeft();
    });


    function moveSlideLeft() {
        carouselList.css({'marginLeft': 0});
    }

    function moveSlideTo(slide) {

        var direction = (slideNumber < slide) ? 'right': 'left';   
        var steps = Math.abs(slideNumber - slide);
       
        for(var i=0;i<steps;i++) {        
          if(direction === "right") moveRight();
          else moveLeft();
        }
     }

    $("#one").click(function() {
        clearInterval(intervalRight);
        moveSlideTo(1);
    }); 
    $("#two").click(function() {
        clearInterval(intervalRight);
        moveSlideTo(2);
    });
    $("#three").click(function() {
        clearInterval(intervalRight);
        moveSlideTo(3);
    });
    $("#four").click(function() {
        clearInterval(intervalRight);
        moveSlideTo(4);
    });        
    $("#five").click(function() {
        clearInterval(intervalRight);
        moveSlideTo(5);
    });
}); 


