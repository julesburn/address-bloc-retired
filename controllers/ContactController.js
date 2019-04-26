const inquirer = require("inquirer");
const Contact = require("../db/models").Contact;

module.exports = class ContactController{
  constructor(){
    this.contacts = [];
    this.addContactQuestions = [
      {
        type: "input",
        name: "name",
        message: "Contact's name -",
        validate(val){
          return val !== "";
        }
      },
      {
        type: "input",
        name: "phone",
        message: "Contact's phone number - ",
        validate(val){
          return val !== "";
        }
<<<<<<< HEAD
=======
      },
      {
        type: "input",
        name: "email",
        message: "Contact's email address - ",
        validate(val){
          return val !== "";
        }
>>>>>>> 012c825d29f0d1aa809cf60f7d240a10a67e6537
      }
    ];
}

<<<<<<< HEAD
  addContact(name, phone){
    return Contact.create({name, phone});
=======
  addContact(name, phone, email){
    return Contact.create({name, phone, email});
>>>>>>> 012c825d29f0d1aa809cf60f7d240a10a67e6537
  };
};
