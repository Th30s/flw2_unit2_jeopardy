let numCategories = categories.length;
let questionValues = [100, 200, 300, 400, 500];

/* TODO: Program the following: 
 *  Print a column of questions for each category.
 *
 * 1. Loop over each category.
 *      HINT: Loop from 0 till numCategories using a for loop.
 *      Need more help? Check out https://mzl.la/2YSY7ud or ask a volunteer.
 * 
 * 2. Inside the category loop, loop over the `questionValues` array.
 *      HINT: Use a for/of loop 
 *      Need more help? Check out https://mzl.la/3lDHxIq or ask a volunteer.
 * 
 * 3. Create an HTML string for each question. It should look like this:
 *      <div class='question-column'><div class='question-cell'>VALUE</div></div>
 * 
 * 4. Replace VALUE in each string with the question's value.
 *      For example, the $500 question would be:
 *          <div class='question'><div class='question-title'>$500</div></div>
 *      HINT: Use the + operator on a string and a variable to join them!
 *      Need more help? Check out https://bit.ly/2EIsD3b or ask a volunteer.
 * 
 * 5. Use jQUery's append function to add your HTML string to the #questions div.
 *      HINT: Use $(selector).append(html);
 *      Need more help? Check out https://api.jquery.com/append/ or ask a volunteer.
 * 
 * 6. Update the <div> with class='question-cell' to include an attribute data-category.
 *      The value for data-category should be the value of 'i' from your loop. 
 *      The resulting <div> for i = 0 should look like this:
 *          <div class='question-cell' data-category='0'>VALUE</div>
 *      For i = 1,
 *          <div class='question-cell' data-category='1'>VALUE</div>
 *      HINT: Use the + operator on a string and a variable to join them!
 *      Need more help? Check out https://bit.ly/2EIsD3b or ask a volunteer.
 *
 */
for(let i=0; i<questionValues.length; i++) {
    console.log(i); //i is an index that helps us access values
    console.log(questionValues[i]);

}
function renderQuestions() {
    // Add code here
    for(let i =0; i < numCategories; i++) { 
        let questionHtml = "<div class='questions-column'>"
        for(let z = 0; z <questionValues.length; z++){
            questionHtml += "<div class='question-cell' data-category='" + i +"'>" + questionValues[z] + "</div>"
        }
            questionHtml += '</div>'
        $("#questions").append(questionHtml)
    }

}

/*first iteration in first loop: i=0
    <div class='questions-column'>
    //first iteration in second loop: z=0
        "<div class='question-cell' data-category='" + i +"'>" + questionValues[z] + "</div>
    </div>
      //second iteration in second loop: z=1
        "<div class='question-cell' data-category='" + i +"'>" + questionValues[z] + "</div>
        </div>
    //third iteration in second loop: z=2
        "<div class='question-cell' data-category='" + i +"'>" + questionValues[z] + "</div>
        </div>



*/
/*
<div class='questions-column'></div>
<div class='question-cell ....></div>

This is what we want:
<div class='questions-column'>
    <div class='question-cell' data-category='" + i +"'>" + questionValues[z]></div>
</div>


*/