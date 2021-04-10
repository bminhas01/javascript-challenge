# javascript-challenge

This exercise is designed to create a table dynamically based upon a [dataset](UFO-level-1/static/js/data.js). The data is a collection of eye-witness reports of extra-terrestrial beings. The dataset is too large to search manually, therefore, users must have the ability to filter the table data for specific values. The entire exercise must be completed using only JavaScript, HTML, CSS, and D3.js. 

### Level 1: Automatic Table and Date Search

* Create a basic HTML web page.

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  	* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`