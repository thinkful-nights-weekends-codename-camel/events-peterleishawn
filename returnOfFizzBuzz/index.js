$(function(){
// create an event listener when the user submits the form
    $('form').submit(function(event){
      event.preventDefault();
      // grab the input number and store it in a variable
      let inputNum = $('input').val();
      // create the fizz buzz sequence up to the number submitted by writing a for loop using the variable that adds
      for(var i = 1; i <= inputNum; i++){
        let insertFizzBuzzElement = `<div class='fizz-buzz-item'><span>${i}</span></div>`;
        if(i % 3 === 0 && i % 5 === 0){
            $('.js-results').append(`<div class='fizz-buzz-item fizzbuzz'><span>fizzbuzz</span></div>`);
        }  
        else if (i % 3 === 0){
            $('.js-results').append(`<div class='fizz-buzz-item fizz'><span>fizz</span></div>`);
        }
        else if (i % 5 ===0) {
            $('.js-results').append(`<div class='fizz-buzz-item buzz'><span>buzz</span></div>`);
        }
        else {
            $('.js-results').append(insertFizzBuzzElement);
        }
      }
    })
  }
);
