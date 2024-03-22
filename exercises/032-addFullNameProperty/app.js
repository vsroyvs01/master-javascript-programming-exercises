function addFullNameProperty(obj) {
  // Add your code after this line
  if (obj.hasOwnProperty('firstName') && obj.hasOwnProperty('lastName')) {
    obj.fullName = obj.firstName + ' ' + obj.lastName;
  } 
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'