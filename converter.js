
// FUNCTIONS FOR CONVERTING CELSIUS AND FAHRENHEIT
function toCelsius( temperature ) {
  var convertedTemp = ( ( ( temperature - 32 ) * 5 ) / 9 );
  if ( convertedTemp <= 0 ) {
    document.getElementById("convertedTemp").style.color = 'blue';
  } else if ( convertedTemp >= 32 ) {
    document.getElementById("convertedTemp").style.color = 'red';
  } else {
    document.getElementById("convertedTemp").style.color = 'green';
  }
  return convertedTemp;
}

function toFahrenheit( temperature ) {
  var convertedTemp = ( ( ( temperature * 9 ) / 5 ) + 32 )
  if ( convertedTemp <= 32 ) {
    document.getElementById("convertedTemp").style.color = 'blue';
  } else if ( convertedTemp >= 90 ) {
    document.getElementById("convertedTemp").style.color = 'red';
  } else {
    document.getElementById("convertedTemp").style.color = 'green';
  }
  return convertedTemp;
}

// EVENT HANDLER FOR CONVERT BUTTON
var convert = document.getElementById("convertButton");
convert.addEventListener("click", determineConverter);

// FUNCTION FOR DETERMINING WHICH CONVERSION WILL HAPPEN
function determineConverter( event ) {
  // event.preventDefault(); nullifies page reset.
  event.preventDefault();
  var temperature = document.getElementById("temp").value;
  if ( document.getElementById("fahrenheit").checked ) {
    var newTemp = toCelsius( temperature );
    document.getElementById("convertedTemp").innerHTML = newTemp;
  } else if ( document.getElementById("celsius").checked ) {
    var newTemp = toFahrenheit( temperature );
    document.getElementById("convertedTemp").innerHTML = newTemp;
  } else {
    alert("Please pick a conversion type.");
  }
}

// FUNCTION AND EVENT HANDLER FOR PAGE RESET
function resetFields() {
  document.getElementById("convertedTemp").innerHTML = '';
}

var reset = document.getElementById("resetButton");
reset.addEventListener("click", resetFields);


