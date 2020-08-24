/*!
 * Start Bootstrap - SB Admin 2 v4.1.1 (https://startbootstrap.com/themes/sb-admin-2)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

!function(s){
    "use strict";
    
    if(s(window).width()<480){
        s("body").addClass("sidebar-toggled");
        s(".sidebar").addClass("toggled");
    }
    s("#sidebarToggle, #sidebarToggleTop").on("click",function(e){
        s("body").toggleClass("sidebar-toggled");
        s(".sidebar").toggleClass("toggled"),
        s(".sidebar").hasClass("toggled") && s(".sidebar .collapse").collapse("hide")
    });
    s(window).resize(function(){
        s(window).width()<768&&s(".sidebar .collapse").collapse("hide");
        s(window).width()<480 &&! s(".sidebar").hasClass("toggled") && (s("body").addClass("sidebar-toggled"),s(".sidebar").addClass("toggled"),s(".sidebar .collapse").collapse("hide"))
    });
    s("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel",function(e){
        if(768<s(window).width()){
                var o = e.originalEvent, l= o.wheelDelta || -o.detail;
                this.scrollTop+=30*(l<0?1:-1);
                e.preventDefault()}});
    s(document).on("scroll",function(){
        100<s(this).scrollTop() ? /*True */ s(".scroll-to-top").fadeIn():/*false */s(".scroll-to-top").fadeOut()
    });
    s(document).on("click","a.scroll-to-top",function(e){
        var o=s(this);
        s("html, body").stop().animate({scrollTop:s(o.attr("href")).offset().top},1e3,"easeInOutExpo"),e.preventDefault()
    });

    }(jQuery);


function findActiveHeader(){
        let head = document.getElementById("head");
        console.log(head);
        let pageHeader = head.dataset.head;
        console.log(pageHeader);
        let listItems = document.querySelectorAll(".sidebar > .nav-item");
        listItems.forEach((listItem)=>{
            let innerhtml = listItem.innerText;
            if(listItem.classList.contains("active") && innerhtml != pageHeader){
                listItem.classList.remove("active");
            }else if(innerhtml == pageHeader){
                if(!listItem.classList.contains("active")){
                    listItem.classList.add("active");
                    console.log(listItem.classList);
            }
            console.log(innerhtml);
         } 
        });
        console.log(listItems);
    }