!function(){var o=document.querySelector(".main-nav"),e=document.querySelector(".main-nav__toggle"),n=document.querySelector("#map"),t=document.querySelector(".contacts__map-wrapper");if(e&&(e.classList.remove("main-nav__toggle--hidden"),o.classList.add("main-nav--closed"),e.addEventListener("click",(function(){o.classList.toggle("main-nav--opened"),o.classList.toggle("main-nav--closed")}))),n){var a="";function g(){google.maps.event.trigger(a,"resize");var o=parseInt(getComputedStyle(t).minHeight,10),e=parseInt(getComputedStyle(t).paddingBottom,10);400===o||396===e?a.setZoom(17):a.setZoom(16),400===o?a.panTo(new google.maps.LatLng(59.938993,30.319356)):a.panTo(new google.maps.LatLng(59.93879,30.323199))}google.maps.event.addDomListener(window,"load",(function(){var o={zoom:16,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_TOP},streetViewControl:!1,center:new google.maps.LatLng(59.939181,30.321469)};a=new google.maps.Map(n,o);var e={url:"img/map-pin.png",size:new google.maps.Size(124,106),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(62,106)};new google.maps.Marker({position:new google.maps.LatLng(59.93879,30.323199),map:a,optimized:!1,icon:e});g()})),google.maps.event.addDomListener(window,"resize",g)}}();