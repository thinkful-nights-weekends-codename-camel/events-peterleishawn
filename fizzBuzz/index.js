$(function () {     // when DOM is ready
console.log('js working');  // check that js is linked right
    $('#number-chooser').submit(function(event) {
        event.preventDefault();
        $('.js-results').empty();       // empties results div, not input
        const userNumber = parseInt($(this).find('#number-choice').val()); //get user #
        let results = [];   // results array
        for (let i = 0; i <= userNumber; i++) {
            if (i % 15 === 0) {
                results.push(
                    $('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
            } else if (i % 5 === 0) {
                results.push(
                    $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
            } else if (i % 3 === 0) {
                results.push(
                    $('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
            } else {
                results.push(
                    $(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
            }
        }
        $('.js-results').append(results);
    });
});


/*
- create event listener  - for when user submits form 
    -> get the number the user typed  <-----  
    - indicate how high to count (taking a user number)
- event must cause program to create FizzBuzz sequence up to user num

- for each element in FizzBuzz sequence
    - code should insert an element into  .js-results  div:
        <div class="fizz-buzz-item">
            <span>1</span>
        </div>

1 If element's content = "fizz"
    - div with  .fizz-buzz-item  should get class  .fizz
        .append(?) or .appendTo(?):
        <div class="fizz-buzz-item fizz">
            <span>fizz</span>
        </div>

2 If element's content = "buzz"
    - div  should get  class  .buzz
        .append(?) or .appendTo(?):
            <div class="fizz-buzz-item buzz">
                <span>buzz</span>
            </div>

3 If element's content = "fizzbuzz"
    - div  should get  class  .fizzbuzz
        .append(?) or .appendTo(?):
            <div class="fizz-buzz-item fizzbuzz">
                <span>fizzbuzz</span>
            </div>

Your function should append resulting HTML to  .js-results  DOM element
*/