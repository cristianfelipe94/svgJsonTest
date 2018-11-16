// Function will run as Json is loaded.
function dataReceived(event) {
  const responseDimensions = event.target.response.dimensions;
  const responseElements = event.target.response.elements;
  const domContainer = document.getElementById('container');
  const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  domContainer.appendChild(svgContainer);
  const containerWidth = responseDimensions.width;
  const containerHeight = responseDimensions.height;
  svgContainer.setAttribute('width', `${containerWidth}`);
  svgContainer.setAttribute('height', `${containerHeight}`);
  /* eslint-disable-next-line */
  responseElements.forEach(elementType => {
    if (elementType.type === 'circle') {
      const elementFigure = elementType.type;
      const svgShape = document.createElementNS('http://www.w3.org/2000/svg', `${elementFigure}`);
      svgContainer.appendChild(svgShape);
      const cxElement = elementType.attributes.cx;
      const cyElement = elementType.attributes.cy;
      const rElement = elementType.attributes.r;
      const fillElement = elementType.attributes.fill;
      svgShape.setAttribute('cx', `${cxElement}`);
      svgShape.setAttribute('cy', `${cyElement}`);
      svgShape.setAttribute('r', `${rElement}`);
      svgShape.setAttribute('fill', `${fillElement}`);
    } else {
      const elementFigure = elementType.type;
      const svgShape = document.createElementNS('http://www.w3.org/2000/svg', `${elementFigure}`);
      svgContainer.appendChild(svgShape);
      const xElement = elementType.attributes.x;
      const yElement = elementType.attributes.y;
      const widthElement = elementType.attributes.width;
      const heightElement = elementType.attributes.height;
      const fillElement = elementType.attributes.fill;
      svgShape.setAttribute('x', `${xElement}`);
      svgShape.setAttribute('y', `${yElement}`);
      svgShape.setAttribute('width', `${widthElement}`);
      svgShape.setAttribute('height', `${heightElement}`);
      svgShape.setAttribute('fill', `${fillElement}`);
    }
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
  // Run the Function DataReceived as the Page Loads.
  request.addEventListener('load', dataReceived);
}

// Set the Event to the Load Window to run the Function.
window.addEventListener('load', getElements);
