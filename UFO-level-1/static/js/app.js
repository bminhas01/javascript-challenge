// from data.js
var tableData = data;

// Create a variable to reference the table body
var tbody = d3.select("tbody");

d3.select(window).on("load", default_table);

// Loop through 'tableData' and use d3 to add data to webpage
function default_table(){
tableData.forEach((sightings) => {
    var record = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var data_value = record.append("td");
        data_value.text(value);
    });
});
}

var dict_filters = {}
d3.selectAll(".form-control").on("change", function() {
dict_filters[this.id] = d3.select(this).property("value");
})

console.log(dict_filters)



// Get a reference to the filter button on the page (id property = 'filter-btn')
var button = d3.select("#filter-btn");

// Get a reference to the form on the webpage
var form = d3.selectAll("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get a reference to the input element in the datetime filter
    var inputField_date = d3.select("#datetime");

    // Get the value property of the input element in the datetime filter
    var inputValue_date = inputField_date.property("value");

    // Check if the input field is blank, if blank then run default_table function
    if (inputValue_date == 0){

        // Remove any children from the tbody
        tbody.html("");

        // run the default_table function
        return default_table();
    }
    
    // if input field is not blank then filter the output
    else {

    var filteredData = tableData.filter(date_filtered => date_filtered.datetime === inputValue_date);

    // Remove any children from tbody
    tbody.html("");

    // Loop through 'filteredData' and use d3 to add data to webpage
    filteredData.forEach((sightings) => {
        var record = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var data_value = record.append("td");
            data_value.text(value);
        });
    });
        
    }
}





