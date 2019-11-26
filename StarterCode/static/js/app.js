var $tbody      = document.querySelector("tbody");
var $Input      = document.querySelector("#search");
var $searchBtn1 = document.querySelector("#datetime");
var $searchBtn2 = document.querySelector("#city");
var $searchBtn3 = document.querySelector("#state");
var $searchBtn4 = document.querySelector("#country");
var $searchBtn5 = document.querySelector("#shape");
var $searchBtn0 = document.querySelector("#reset");

$searchBtn0.addEventListener("click", reset);
$searchBtn1.addEventListener("click", datetime);
$searchBtn2.addEventListener("click", city);
$searchBtn3.addEventListener("click", state);
$searchBtn4.addEventListener("click", country);
$searchBtn5.addEventListener("click", shape);

var tableData = data;
renderTable();

function reset() {
    $Input.value = "";
    renderTable();
}

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var address = data[i];
        var fields = Object.keys(address);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

function datetime() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteritem = $Input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "datetime" matches the filter
    data = data.filter(function(address) {
      var addressState = address.datetime.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressState === filteritem;
    });
    renderTable();
  }

  function city() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteritem = $Input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    data = data.filter(function(address) {
      var addressState = address.city.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressState === filteritem;
    });
    renderTable();
  }

  function state() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteritem = $Input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    data = data.filter(function(address) {
      var addressState = address.state.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressState === filteritem;
    });
    renderTable();
  }

  function country() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteritem = $Input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    data = data.filter(function(address) {
      var addressState = address.country.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressState === filteritem;
    });
    renderTable();
  }

  function shape() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filteritem = $Input.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    data = data.filter(function(address) {
      var addressState = address.shape.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return addressState === filteritem;
    });
    renderTable();
  }




