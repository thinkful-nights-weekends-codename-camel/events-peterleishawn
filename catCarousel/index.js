$(function() {

    $('.thumbnail').on('click', function(event) {
      const imgClicked = $(this).find('img').attr('src');
      const imgClickedAlt = $(this).find('img').attr('alt');

      $('.hero img').attr('src', imgClicked).attr('alt', imgClickedAlt);
    });
  });

/*
- when user clicks thumbnail of cat (any of the cat thumbnails)
- copy / put image and alt text of clicked cat to top (hero)
*/

