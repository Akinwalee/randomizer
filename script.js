function selectRandomName() {
// Get the list of names from the form
const nameList = document.getElementById("names").value;

// Split the list into an array of names
const names = nameList.split(",");

// Generate a random number between 0 and the number of names in the array
const randomIndex = Math.floor(Math.random() * names.length);

// Select a name from the array using the random number
const randomName = names[randomIndex];

 // Update the page with the selected name
document.getElementById("result").innerHTML = randomName;
}
