var flag_menu = 0, flag_popup = 0;
$(document).ready(function(){
    $(".burger__mobile").eq(0).click(function() {
        if (flag_menu == 0) {
            $(".head__mobile").eq(0).css('transform', 'translateY(0)');
            $(".burger__mobile").eq(0).attr("src", "images/burger_close.svg");
            flag_menu = 1;
        } else {
            $(".head__mobile").eq(0).css('transform', 'translateY(-100%)');
            $(".burger__mobile").eq(0).attr("src", "images/burger.svg");
            flag_menu = 0;
        }
    });
    
    $(".footer__link").eq(0).mouseup(function() {
        
        $(".popup__1").eq(0).css("display", "inline");
        flag_popup = 1;
    });
     $(".footer__link").eq(1).mouseup(function() {

        $(".popup__2").eq(0).css("display", "inline");
         flag_popup = 1;
    });     
    $(window).mousedown(function()
                {
        if (flag_popup == 1)
            {
                $(".popup__1").eq(0).css("display", "none");
                $(".popup__2").eq(0).css("display", "none");
                flag_popup = 0;
            }
    });
                                     
});
$("#polzunok").slider({
        animate: "slow",
        range: "min",    
        min: 30,
        max: 10000,
        value: 100,
        step: 10,
        slide : function(event, ui) {    
            $(".block__2__1__first__main__input__i").eq(0).html(ui.value );
            $(".polzunok__window").eq(0).html(ui.value + "$");
            $(".polzunok__window").eq(0).css("left", $(".ui-slider-handle").position().left-30);
            $(".block__2__1__first__main__input__i").eq(1).html(ui.value * 1.3);
        }
    });   
