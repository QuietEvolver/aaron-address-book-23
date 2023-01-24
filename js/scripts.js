// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

// Cathy's Suggested Course of Action: "You will need to create a way to target a contact (such as addressBook.contacts[1] and then update the property that is desired like addressBook.contacts[1].firstName = "newname"

// She referenced using the .findContact method as a good place to start.

// Which seems like a good example to start from (changing the name from .findContact to .Update) because you need to be able to find the correct contact before you can update any information. I am not sure how the lessons are suggestion you use Contact prototype but since this.contacts is part of the AddressBook prototype I would start there"

//update ? // WIP: 
/* update: addressBook.contacts[id]:  undefined
scripts.js:94 Uncaught TypeError: Cannot read properties of null (reading 'value')
  at HTMLButtonElement.handleUpdate (scripts.js:94:73) 
*/
AddressBook.prototype.updateContact = function(id){ 
    // let contact = this.contacts[id]; 
    console.log("update: addressBook.contacts[id]: ", addressBook.contacts[id]);
    if(this.contact !== undefined){
    // console.log("this.contacts[id] ", this.contacts[id]);
    this.contacts[id].firstName = editedFirstName;
    this.contacts[id].lastName = editedLastName;
    this.contacts[id].phoneNumber = editedPhoneNumber;
    this.contacts[id].editedEmail = editedEmail;
  }
  return false;
}
AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, emailAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(streetAddress, city, state, zipCode) {
  this.streetAddress = streetAddress;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

Address.prototype.fullAddress = function() {
  return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode;
};
// User Interface Logic ---------
let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}

function displayContactDetails(event){
  // console.log("The id of this <li> is " + event.target.id + ".");
  const contact = addressBook.findContact(event.target.id);
  document.querySelector(".first-name").innerText = contact.firstName;
  document.querySelector(".last-name").innerText = contact.lastName;
  document.querySelector(".phone-number").innerText = contact.phoneNumber;
  document.querySelector(".email").innerText = contact.emailAddress;
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
}

function handleUpdate(event){
  // const contact = 
  addressBook.updateContact(event.target.id);
  const editedFirstName = document.querySelector("input.new-first-name").value;
  const editedLastName = document.querySelector("input.new-last-name").value;
  const editedPhoneNumber = document.querySelector("input.new-phone-number").value;
  const editedEmail = document.querySelector("input.email").value;
  // call instance on the parent constructor
  addressBook.updateContact(editedFirstName, editedLastName, editedPhoneNumber, editedEmail);
  let cl = addressBook.updateContact(editedFirstName, editedLastName, editedPhoneNumber, editedEmail);
  console.log("address edit? ", cl);
  listContacts(addressBook);
}
// Cathy's Suggested Course of Action: "You will need to create a way to target a contact (such as addressBook.contacts[1] and then update the property that is desired like addressBook.contacts[1].firstName = "newname

// She referenced using the .findContact method as a good place to start.

// Which seems like a good example to start from (changing the name from .findContact to .Update) because you need to be able to find the correct contact before you can update any information. I am not sure how the lessons are suggestion you use Contact prototype but since this.contacts is part of the AddressBook prototype I would start there"

function handleDelete(event) {
  addressBook.deleteContact(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#contact-details").setAttribute("class", "hidden");
  listContacts(addressBook);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmail = document.querySelector("input#new-email").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail);
  addressBook.addContact(newContact);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email").value = null;
}

window.addEventListener("load", function (){
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
  document.querySelector("button.update").addEventListener("click", handleUpdate);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});
