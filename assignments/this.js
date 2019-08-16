/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the 
value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, 
the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance 
of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

/* Principle 1
Whenever a function is contained in the global scope, the 
value of this inside of that function will be the window object.
 code example for Window Binding
 */
function greetMe(name) {
    console.log('Good Morning ' + name);
    console.log(this);
}
greetMe('Rodney');//should say "Good Morning Rodney"

/* Principle 2
Whenever a function is called by a preceding dot, 
the object before that dot is this.
code example for Implicit Binding
*/
var greetMe = {
    greeting: 'Good Day ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetMe.speak('Rodney');//should say "Good Day Rodney"

/* Principle 3
Whenever a constructor function is used, this refers to the specific instance 
of the object that is created and returned by the constructor function.
code example for New Binding
 */
function GreetMe(name) {
    this.greeting = 'Good Afternoon ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};
var greetRodney = new GreetMe('Rodney');
var greetMary = new GreetMe('Mary');
greetRodney.speak();//should say "Good Afternoon Rodney"
greetMary.speak();//should say "Good Afternoon Mary"

/*Principle 4
Whenever JavaScript’s call or apply method is used, this is explicitly defined.
code example for Explicit Binding
*/
greetRodney.sayGoodbye.call(greetMary);//should say "Goodbye Rodney"
greetMary.sayGoodbye.apply(greetRodney);//should say "Goodbye Mary"