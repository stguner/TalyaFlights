const searchInput = document.getElementById("searchInput");
const autocompleteList = document.getElementById("autocompleteList");
let staticValues = [{ CountryName: "United States", CountryCode: "US", AirportName: "John F. Kennedy International Airport", AirportCode: "JFK" },
{ CountryName: "United States", CountryCode: "US", AirportName: "Los Angeles International Airport", AirportCode: "LAX" },
{ CountryName: "United States", CountryCode: "US", AirportName: "Chicago O'Hare International Airport", AirportCode: "ORD" }];

function displayAutocompleteList(airports) {
  const html = airports.map(airport => `<li>${airport.AirportName}</li>`).join("");
  autocompleteList.innerHTML = html;
}

function updateAutocompleteList(searchTerm) {
    
  const apiUrl = `https://localhost:32768/api/HttpClient/AutoComplete?keyword=${encodeURIComponent(searchTerm)}&limit=20`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const filteredAirports = data; // Assuming the API response is an array of objects similar to your staticValues
      displayAutocompleteList(filteredAirports);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      autocompleteList.innerHTML = ''; // Clear the autocomplete list in case of an error
    });
}

// Initially show the static values to the user
displayAutocompleteList(staticValues);

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  // If the search term has at least 3 characters, send an API request
  if (searchTerm.length >= 3) {
    updateAutocompleteList(searchTerm);
  } else {
    // Otherwise, show the static values
    displayAutocompleteList(staticValues);
  }
});

autocompleteList.addEventListener("click", function (event) {
  if (event.target.nodeName === "LI") {
    searchInput.value = event.target.innerText;
    autocompleteList.innerHTML = "";
  }
});
