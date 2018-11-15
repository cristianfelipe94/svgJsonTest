// Function will run as Json is loaded.
function dataReceived(event) {
  const response = event.target.response.elements[0].type;
  const responseDimensions = event.target.response.dimensions;
  const responseElements = event.target.response.elements;
  console.log(response);
  console.log(responseDimensions);
  console.log(responseElements);
  responseElements.forEach(elementType => {
    console.log(elementType);
  });
}

// getElements(): This will create a Request to get the information from the JSON.
function getElements() {
  // Create a XMLHttpRequest.
  const request = new XMLHttpRequest();
  // Type of response the system is waiting.
  request.responseType = 'json';
  // Starts the request.
  // Set the Path to get the JSON.
  request.open('GET', '../json/datos-svg.json');
  // Sent the request.
  request.send();
  console.log(request);
  // Run the Function DataReceived as the Page Loads.
  request.addEventListener('load', dataReceived);
}

// Set the Event to the Load Window to run the Function.
window.addEventListener('load', getElements);
