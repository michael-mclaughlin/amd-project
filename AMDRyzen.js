$(document).ready(function(){
	
    scrollToId();
	  sideNav('clickMeTab', 'listOfSections', 'sectionsLinks');
    rightSideNav('rightClickMeTab', 'linkContainer');
    videoResetAfterPlay('fullscreenBackgroundVideo'); 
    pausePlayVideo('playableVideo', 'btnPlayPause');
});

var videoResetAfterPlay = function(videoClassName){
  var videoClassName = $('.' + videoClassName);
    videoClassName.on('ended', function(){
      $(this).get(0).load();
      $(this).get(0).pause(); 
    });
};

var pausePlayVideo = function(videoClassName, buttonClassName){
  var videoClassName = $('.' + videoClassName);
  var buttonClassName = $('.' + buttonClassName);
  var buttonIcon = buttonClassName.find('i');
  
  
    buttonClassName.on('click', function(event){
      event.preventDefault();
      $(this).toggleClass('active');
        if($(this).hasClass('active')){
          $(this).addClass('adjustVideoControls');
          $(this).find(buttonIcon).removeClass('fa-play').addClass('fa-stop');
          $(this).next(videoClassName).get(0).load();
          $(this).next(videoClassName).get(0).play();

        }else{
          $(this).removeClass('adjustVideoControls');
          $(this).find(buttonIcon).removeClass('fa-stop').addClass('fa-play');
          $(this).next(videoClassName).get(0).load();
          $(this).next(videoClassName).get(0).pause();
        }
    });
};

var scrollPage = function(className, className2){
    var className = className;
    var className2 = className2;
    var buttonNext = $('.' + className);
    var buttonPrevious = $('.' + className2);

    buttonNext.click(function(event){
        scrollDown();
        event.preventDefault();
    });
    buttonPrevious.click(function(event){
        scrollUp();
        event.preventDefault();
    });
};

var scrollToId = function(){
     
     $(document).on('click', 'a[href^="#"]', function(e) { // handle links with @href started with '#' only
         var id = $(this).attr('href');
         var $id = $(id);

         if ($id.length === 0) {
             return;
         }

         e.preventDefault();

         var pos = $(id).offset().top;

     $('body, html').animate({scrollTop: pos});
     });
};

var sideNav = function(className, className1, linkClassName){
  var className = className;
  var className1 = className1;

  var elementToClick = $('.' + className);
  var elementToMove = $('.' + className1);

  var linkClassName = linkClassName;
  var clickLink = $('.' + linkClassName);

  elementToClick.click(function(){
    var that = $(this);
    that.toggleClass('sideNavActive');
    if(that.hasClass('sideNavActive')){
      elementToMove.animate({'left': '0'}, 300);
    }else{
      that.removeClass('sideNavActive');
      elementToMove.animate({'left': '-212px'}, 300);
    }
  });

  clickLink.click(function(){
    var that = $(this);
    that.toggleClass('sideNavActive');
    if(that.hasClass('sideNavActive')){
      elementToMove.animate({'left': '-212px'}, 300);
    }else{
      elementToClick.addClass('sideNavActive');
      elementToMove.animate({'left': '0'}, 300);

    }
  });
};

var rightSideNav = function(className, className1, linkClassName){
  var className = className;
  var className1 = className1;

  var elementToClick = $('.' + className);
  var elementToMove = $('.' + className1);

  var linkClassName = linkClassName;
  var clickLink = $('.' + linkClassName);

  elementToClick.click(function(){
    var that = $(this);
    that.toggleClass('sideNavActive');
    if(that.hasClass('sideNavActive')){
      elementToMove.animate({'right': '0'}, 300);
    }else{
      that.removeClass('sideNavActive');
      elementToMove.animate({'right': '-240px'}, 300);
    }
  });

  clickLink.click(function(){
    var that = $(this);
    that.toggleClass('sideNavActive');
    if(that.hasClass('sideNavActive')){
      elementToMove.animate({'right': '-240px'}, 300);
    }else{
      elementToClick.addClass('sideNavActive');
      elementToMove.animate({'right': '0'}, 300);

    }
  });
};


