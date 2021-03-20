// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const celeb = "birthday";
function writeCards(names, celeb) {
  const cardMessages = []
  for (let i = 0; i < names.length; i++) {
    const Note = `Thank you, ${names[i]}, for the wonderful ${celeb} gift!`;
    cardMessages.push(Note);
  }
  return cardMessages;
}
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i)
  }
}