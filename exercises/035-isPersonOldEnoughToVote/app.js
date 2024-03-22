function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age <= 17) {
    return false;
  }
  else {
    return true;
  }
}