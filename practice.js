//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  "name": "Erin",
  "age": "24"
}

// alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  "band": "Tove Lo",
  "food": "Rice",
  "person": "I hate everyone",
  "book": "Watership Down",
  "movie": "Fantastic Mr. Fox",
  "holiday": "Halloween"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = "Nissan Xterra";
  favoriteThings.brand = "Materialism can suck it";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Gray";

  console.log(favoriteThings);




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = "firstPocket";

  backPack[item] = "chapstick";

 backPack.color = "orange";



//After you do the above, alert your entire backPack object.

// alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

 var alsoMe = {
   "name": "Erin",
   "age": 24,
   "height": "5'7",
   "gender": "Chick",
   "married": "Forever alone",
   "eyeColor": "Grey",
   "hairColor": "Dish shit"
 }



//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

var loopObj = function(obj) {
  for (var item in obj) {
    // alert(obj[item]);
  }
}

console.log(loopObj(alsoMe));


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    "Optimistic nihilism": "3:23",
    "Number of the Pi": "3.14",
    "Lady Wood": "2:37",
    "My Parent's Basement": "4:12",
    "Arbitrary song name": "0:38"
  }

//Now, loop through your album object alerting every song title individually.

var songTitles = function(keys) {
  for (var key in album) {
    // alert(key);

  }
}

console.log(songTitles(album));



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  "Iowa": 3000000,
  "Utah": 2900000,
  "Minnesota": 4200000,
  "Colorado": 25000,
  "California": 55555000
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

var statePop = function(obj) {
  for (var key in obj) {
    if (obj[key] > 30000) {
      alert(key);
    }
  }
}

console.log(statePop(states));

// Check why this isn't working

//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */



var isItTruthy = function(obj) {
  for (var item in obj) {
    if (!obj[item]) {
      delete obj[item];
    }
  }
  return obj;
}

 var truthyUser = isItTruthy(user1);


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

truthyUser.name = "Erin Vaage";
truthyUser.username = "Erin_Rae";

console.log(truthyUser);



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayEmail: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user2.name = "Tyler S. McGinnis";
user2.email = "tyler.mcginnis@devmounta.in";

//Now call the sayEmail method that's on the user object which will alert the users email

// user2.sayEmail();




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert('hello');
}

methodCollection.logHello = function() {
  console.log('hello');
}

//Now call your alertHello and logHello methods.

// methodCollection.alertHello();
// methodCollection.logHello();



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

function makePerson(name, birthday, ssn) {
  var newPerson = {};
  newPerson.name = name;
  newPerson.birthday = birthday;
  newPerson.ssn = ssn;
  return newPerson;
}

console.log(makePerson("Erin", 422, 287))


//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

function makeCard(cardNumber, expirationDate, securityCode) {
  var newCard = {};
  newCard.cardNumber = cardNumber;
  newCard.expirationDate = expirationDate;
  newCard.securityCode = securityCode;
  return newCard;
}

console.log(makeCard(78, 1220, 876));

//NEXT PROBLEM

var Visa = makeCard(78, 1220, 876);
var Me = makePerson("Erin", 422, 099);

/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

function bindCard(person, card) {
  var mergeCard = {};
  for (var item in person) {
    mergeCard[item] = person[item];
  }
  for (var item in card) {
    mergeCard[item] = card[item];
  }
  return mergeCard;
}

console.log(bindCard(Me, Visa));
