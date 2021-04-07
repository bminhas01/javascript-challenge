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
};

// Create a dictionary to log the id of and value entered in each filter
var dict_filters = {}
d3.selectAll(".form-control").on("change", function() {
    dict_filters[this.id] = d3.select(this).property("value");
});

// Get a reference to the filter button on the page (id property = 'filter-btn')
var filter_button = d3.select("#filter-btn");

// Get a reference to the form on the webpage
var form = d3.selectAll("form");

// Create event handlers for the clear button
var clear_button = d3.select("#clear-btn").on("click", function(){
    // Remove existing records in tbody
    tbody.html("");
    return default_table();
});

// Create event handlers
filter_button.on("click", runEnter);
form.on("submit", runEnter);

// Create the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    Object.entries(dict_filters).forEach(([key, value]) => {

        var inputValue = value;

        // Check if the input field is blank, if blank then run default_table function
        if (inputValue == 0){

            // Remove existing records in tbody
            tbody.html("");

            // run the default_table function
            return default_table();
        }
        
        // if input field is not blank then filter the output
        else {

            var filteredData = tableData.filter(results => results[key] === inputValue);

            // Remove existing records in tbody
            tbody.html("");

            // Loop through 'filteredData' and use d3 to add data to webpage
            filteredData.forEach((sightings) => {
                var record = tbody.append("tr");
                Object.entries(sightings).forEach(([key, value]) => {
                    var data_value = record.append("td");
                    data_value.text(value);
                });
            });
        
        };
    });

};





