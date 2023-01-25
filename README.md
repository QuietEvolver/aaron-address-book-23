# Address-Book

# Places You've Been (TESTING EXAMPLE)

#### By Aaron Demski, Erin Templin, Mesha Devan, Vera Weikel

#### Places You've Been

## Technologies Used

* Javascript
* CSS
* HTML
* TDD

## Description

_Create a website where you can keep track of all of all addresses. Each address should be an object with multiple properties. Display those addresses when a user clicks on a address' name. Complete the business logic for your address book object. Use test-driven development to write your business logic, and include the tests in your README.md. After every passing test, make sure to commit your code.
* Add functionality to record and display a contact's email address.
* Add functionality to record and display a contact's physical address.
* Then, add functionality that allows a user to record multiple addresses (email or physical) for a single Contact, and what type each address is (ie: "work", "personal", etc.) (Hint: Address will need to be an object with multiple properties saved within the Contact object.)_

## Setup/Installation Requirements

* Copy repo to your desktop.
* Open index.html in your browser.


## TDD Tests
Describe Place(placeName, countryName, seasonVisited, notes);

Test 1: "It should create an object for each place visited that includes the name of the place, country, the season visited, and any notes."
Code: let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
testPlace;
Expected Output: 
Place {
  placeName: "Montana";
  countryName: "US";
  seasonVisited: "winter";
  notes: "EXTREMELY cold, subzero temperatures"
}

<!-- New function -->
Describe Place.prototype.fullDescription()

Test 1: "To print the full description to the console."
Code: let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
testPlace.fullDescription();
Expected Output: 
"Montana, US"

<!-- New function -->
Describe AllPlaces()

Test 1: "It should build an AllPlaces object housing ind'l Places."
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces;
Expected Output: allPlaces = "{}";

<!-- New function -->
Describe AllPlaces.prototype.addPlace()

Test 1: "It should add specified place object to AllPlaces constructor object"
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testPlace);
allPlaces.addPlace(testPlace2);
Expected Output:
allPlaces.places {Montana: Place, Vancouver: Place}

Test 2: "It should add a unique ID to reference the object instance that assignId method is called on"
Code: 
let testPlace = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testPlace);
allPlaces;
Expected Output:
allPlaces.places {1: Place}

<!-- New function -->
Describe AllPlaces.prototype.assignId()

Test 1: "It should assign a unique id to each place added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let allPlaces = new AllPlaces();
allPlaces.assignId(testPlace1);
Expected Output:
allPlaces.places {1}

<!-- New function -->
Describe AllPlaces.prototype.deletePlaceById()

Test 1: "It should delete a place by a unique id previously added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testplace1);
allPlaces.addPlace(testplace2);
allPlaces.deletePlaceById(1);
Expected Output:
allPlaces.places {2: Place}

<!-- New function -->
Describe AllPlaces.prototype.findPlaceById()

Test 1: "It should find a place by a unique id previously added to the AllPlaces object"
Code: 
let testPlace1 = new Place("Montana", "US", "winter", "EXTREMELY cold, subzero temperatures");
let testPlace2 = new Place("Vancouver", "CAN", "winter", "cold, cold temperatures");
let allPlaces = new AllPlaces();
allPlaces.addPlace(testplace1);
allPlaces.addPlace(testplace2);
allPlaces.findPlaceById(1);
Expected Output:
allPlaces.places {1: Place}

## Known Bugs

* _No known issues at this time_

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2023 Aaron Demski, Erin Templin, Mesha Devan, Vera Weikel_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.