//jS Document
$(document).ready(() => {
    
    //get slides
    function getSlides() {
        var sArray = new Array();

        for(i=0;i<$('.wrap-home .col-12:visible').length;i++) {
            sArray.push($('.wrap-home .col-12').eq(i).attr('id'));
        }
        return sArray
    }
    
    

    
    var sArray = getSlides(),
        sPres = 0,
        sCount = 0, 
        cont = $('.wrap-home').html();
        
    
    
    
    
    $(function() {
        
        //Get screen size 
        screenSize = $(window).width()
                
        if(screenSize<992) {
            
            $('.wrap-home').swipe( {
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    if(direction == 'up' || direction == 'down') {
                        if(direction == 'up' && sPres != sArray.length - 1) {
                            
                            sCount--;
                            
                            var sComeIn = sPres + 1,
                                msg = true;
                        } else if(direction == 'down' && sPres != 0) {
                            
                            sCount++;
                            
                            var sComeIn = sPres - 1,
                                msg = true;
                        }

                        if(msg) {
                            //slide 
                            sSlide(sArray);
                            sPres = sComeIn;    
                        }
                    }
                }
            });
            
        }
        
        
    }); 
    
    
    
    
    var sSlide = function (sArray, newTop) {    
        for(i=0; i<sArray.length; i++)
        {   
            newTop = sCount*100+'%';
            $('#'+sArray[i]).animate({
                'top': newTop
            })
        }
    };
    
    
    $(window).resize(function() {
        $('.wrap-home').html(cont);
        
        sPres = 0
    })
    
    
    
    
    setInterval(function() {
        
        $('.scroll-info').animate({
            'bottom': '5px'
        }, 500, function() {
            $('.scroll-info').animate({
                'bottom': '0'
            }, 500)
        })
        
    }, 1000)
});
