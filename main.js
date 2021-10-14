var headerColors = ['#50A6C2','#5950c2', '#b250c2', '#c25059', '#c2b450'];
var publicationsHeaderHeight;


var main = function(){
    $(".ui-loader").hide()
    $('.block').click(changeBlock);
    $('.publicationLink').click(scrollToPublication);
    $('.presentationLink').click(scrollToPresentation);
    $('.projectLink').click(scrollToProject);

    // Mobile Only
    $('.hamburger').click(showMobileMenu);
    $('.menuClose').click(hideMobileMenu);
    $('.mobileMenuItem').click(changeBlockMobile);

    calculatePublicationsHeight();
    calculateProjectsHeight();
    calculatePresentationsHeight();

    $(window).resize(calculatePublicationsHeight);
    $(window).resize(calculateProjectsHeight);
    $(window).resize(calculatePresentationsHeight);
}

var changeBlock = function () {
        var index = $('.block').index(this);
        var $current = $('.current');
        var textIndex = $('.textbox').index($current);
        
        var $newCurrent = $('.textbox').eq(index);
        
        $('.currentblock').removeClass('currentblock');
        $('.block').eq(index).addClass('currentblock');

        $('.header').css("border-top-color", headerColors[index]);
        
        if(index>textIndex){
            $newCurrent.css({left:"10000px"});
            $newCurrent.addClass('current');


            $newCurrent.animate({left:"0px"},1000,function(){});
            $current.animate({left:"-10000px"},1000,function(){
                $current.removeClass('current');
            });
        }
        
        if (index<textIndex){
            $newCurrent.css({left:"-10000px"});
            $newCurrent.addClass('current');


            $newCurrent.animate({left:"0px"},1000,function(){});
            $current.animate({left:"10000px"},1000,function(){
                $current.removeClass('current');
            });
        }
};

var changeBlockMobile = function () {
    var index = $('.mobileMenuItem').index(this);


    var $current = $('.current');
    var textIndex = $('.textbox').index($current);
    
    var $newCurrent = $('.textbox').eq(index);
    
    $('.currentblock').removeClass('currentblock');
    $('.block').eq(index).addClass('currentblock');

    $('.header').css("border-top-color", headerColors[index]);
    
    if(index>textIndex){
        $newCurrent.css({left:"10000px"});
        $newCurrent.addClass('current');


        $newCurrent.animate({left:"0px"},1000,function(){});
        $current.animate({left:"-10000px"},1000,function(){
            $current.removeClass('current');
        });
    }
    
    if (index<textIndex){
        $newCurrent.css({left:"-10000px"});
        $newCurrent.addClass('current');


        $newCurrent.animate({left:"0px"},1000,function(){});
        $current.animate({left:"10000px"},1000,function(){
            $current.removeClass('current');
        });
    }

    hideMobileMenu();
};

var scrollToProject = function () {
    var index = $('.projectLink').index(this);
    $targetHeader = $('.project').eq(index);
    $(".projects").animate({ scrollTop: $targetHeader[0].offsetTop - projectsHeaderHeight }, "slow"); 
};

var scrollToPublication = function () {
    var index = $('.publicationLink').index(this);
    $targetHeader = $('.publicationSubsection').eq(index);
    $(".publications").animate({ scrollTop: $targetHeader[0].offsetTop - publicationsHeaderHeight }, "slow"); 
};

var scrollToPresentation = function () {
    var index = $('.presentationLink').index(this);
    $targetHeader = $('.presentation').eq(index);
    $(".presentations").animate({ scrollTop: $targetHeader[0].offsetTop - presentationsHeaderHeight }, "slow"); 
};

var calculatePublicationsHeight = function () {
    $('.textbox:nth-child(3)').css("display", "inline-block");
    publicationsHeaderHeight = $('.publicationHead').height();
    $('.textbox:nth-child(3)').css("display", "");

    $('.publications').css({'height': 'calc(100% - ' + (publicationsHeaderHeight + 5) + 'px)'});
};

var calculateProjectsHeight = function () {
    $('.textbox:nth-child(5)').css("display", "inline-block");
    projectsHeaderHeight = $('.projectHead').height();
    $('.textbox:nth-child(5)').css("display", "");

    $('.projects').css({'height': 'calc(100% - ' + (projectsHeaderHeight + 5) + 'px)'});
};

var calculatePresentationsHeight = function () {
    $('.textbox:nth-child(4)').css("display", "inline-block");
    presentationsHeaderHeight = $('.presentationHead').height();
    $('.textbox:nth-child(4)').css("display", "");

    $('.presentations').css({'height': 'calc(100% - ' + (presentationsHeaderHeight + 5) + 'px)'});
};

var showMobileMenu = function () {
    $('.mobileMenu').show();
}

var hideMobileMenu = function () {
    $('.mobileMenu').hide();
}

$(document).ready(main);
