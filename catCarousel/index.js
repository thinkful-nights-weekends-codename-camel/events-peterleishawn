$(function() {
  $('.thumbnails').on('click','img',function(event){
    // capture the click on the img and id the image
    // select the div to hold and copy the img to .hero class
    $('.hero img').replaceWith($(event.target).clone());
      })
    }
);