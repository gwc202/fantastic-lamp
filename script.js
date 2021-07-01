var factList = [
  /*0*/
 "Roughly 200 million animals are killed for human consumption every day", /*1*/
 "The first animal cruelty legislation was passed in 1635, which prohibited tearing wool off of living sheep.",/*2*/
 "In 1824, The Royal Society for the Prevention of Cruelty to Animals, the world’s first animal welfare charity was created.",
 "In the U.S., every circus that uses animals has been cited by the Animal Welfare Act for violations.",
 "<q>The basic principle of equality does not require equal or identical treatment; it requires equal consideration</q>- Peter Singer"]; /*3*/

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
