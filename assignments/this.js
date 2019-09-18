/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - In window binding the "this" keyword binds to the global or parent element. This is the default if none of the other ways are specified.
* 2. Implicit Binding - Here the "this" keyword will bind when called to whatever is to the left of the . of where it is called.
* 3. New Binding - With new, "this" binds to the object created when the new keyword creates it.
* 4. Explicit Binding - Explicit uses a keyword, either .cast, .apply, or .bind, and explicitly binds "this" to whatever follows that keyword in ().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    // function pasta(){
    //     console.log(this.pastaType);
    // }
    // let pastaType = "spaghetti";
    // pasta();
    console.log(this)

// Principle 2

// code example for Implicit Binding
    const pastaDishOne = {
        pastaType: 'ravioli',
        sauceType: 'alfredo',
        servingDish: 'bowl',
        whatsForDinner: function(){
            return `We are eating ${this.pastaType} with ${this.sauceType}. Grab some ${this.servingDish}s.`
        }
    }

    console.log(pastaDishOne.whatsForDinner());

// Principle 3

// code example for New Binding
    function FavoritePasta(favorite){
        this.pasta = favorite;
    }

    let myFavoritePasta = new FavoritePasta('Fusili and Meat Sauce');

    console.log(`My favorite pasta is ${myFavoritePasta.pasta}`);

// Principle 4

// code example for Explicit Binding

    function pastaSelector(){
        console.log(`We will have ${this.pastaTypeOne} tonight`)
    }

    let pastaTypes = {
        pastaTypeOne: 'Angel Hair',
        pastaTypeTwo: 'Penne',
        pastaTypeThree: 'Tortellini'
    }

    pastaSelector.call(pastaTypes);