
// Take one number and find out whether it's divisible by
// only 3, only 5, 3 AND 5, or neither 3 or 5. Returns a
// nice little block of html that we will append to the
// div with class 'js-results'
function getFizzBuzz(num) {
    // If it's divisible by 3 and 5:
    if(num % 3 === 0 && num % 5 === 0) {
        // Return 'fizzbuzz'
        return '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>';
    }

    // If it's only divisible by 3:
    if(num % 3 === 0) {
        // Return 'fizz'
        return '<div class="fizz-buzz-item fizz"><span>fizz</span></div>';
    }
    
    // If it's only divisible by 5:
    if(num % 5 === 0) {
        // Return 'buzz'
        return '<div class="fizz-buzz-item buzz"><span>buzz</span></div>';
    }

    // Otherwise just return the original number
    return `<div class="fizz-buzz-item"><span>${num}</span></div>`;
}


$('.fizzbuzz-button').click(
    function(event) {
        // If user has previously clicked the button, we'l want to
        // remove the previous fizz-buzz results. The 'empty' function
        // removes any child elements from the specified parent
        $('.js-results').empty();

        // The preventDefault function stops the button from doing
        // its default behavior... (The default behavior is something
        // like reloading or navigating away from the current page?)
        event.preventDefault();

        // Get the value of the input field with class name. The input
        // is a string, like "25". We should use parseInt to convert
        // that string into a regular integer.
        let num = parseInt($('#user-input').val());

        // Start at 1 and count up to 'num' that the user has entered
        for(let i = 1; i <= num; i++) {
            // getFizzBuzz will give us a div with the correctly
            // formatted result
            let result = getFizzBuzz(i);
            
            // Now add the result to the end of the js-results div 
            $('.js-results').append(result);
        }
    }
);