// from data.js
var tableData = data;

// Create a variable to reference the table body
var tbody = d3.select("tbody");

// Loop through 'tableData' and use d3 to add data to webpage
tableData.forEach((sightings) => {
    var record = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var data_value = record.append("td");
        data_value.text(value);
    });
});

// Get a reference to the filter button on the page (id property = 'filter-btn')
var button = d3.select("#filter-btn");

// Get a reference to the form on the webpage
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get a reference to the input element (class = 'form-control')
    var inputField = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    var filteredData = tableData.filter(date_filtered => date_filtered.datetime === inputValue);

    console.log(filteredData);


}





