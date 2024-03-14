// document.getElementById('owl').onclick = function() {
//   alert('You clicked the owl!');
  //not recommended because 
  /* 
  Assigning event handlers directly to DOM elements using onclick like in your provided example is not considered a good practice for several reasons:

Inline JavaScript: This approach mixes HTML markup with JavaScript behavior, making the code harder to read, maintain, and debug. It's generally preferred to separate the structure (HTML), presentation (CSS), and behavior (JavaScript) of a webpage.

Global Namespace Pollution: Assigning event handlers in this manner adds functions directly to the global namespace, which can lead to potential naming conflicts or unintended behavior if multiple scripts are being used on the same page.

Limited Flexibility: Assigning event handlers directly like this limits flexibility for more complex interactions or handling multiple events on the same element. Using event listeners provides more control and allows for attaching multiple event handlers to the same element.*/
//     }
document.getElementById('owl').addEventListener('click', function(event) {
  alert('You clicked the owl!');
  event.stopPropagation(); //this will stop the event from bubbling up to the parent element // it will not get Removed as well since the event is stopped from bubbling up to the parent element
  //best way to add an event listener
  //attachEvent , jQuery are  used earlier
});

document.getElementById('images').addEventListener('click', function(event) {
  alert('You clicked the images ul list!');
},false); // this third parameter is by default false, if you want to capture the event in the capturing phase, you can set it to true otherwise it is false by default which makes the event bubble up to the parent element
//if you want to stop the event from bubbling up to the parent element, you can use event.stopPropagation() method

document.getElementById('google').addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault(); // this will stop the default behavior of the anchor tag
  alert('You clicked the google link whose default behavior is prevented so you will not be redirected!');
});

// if image clicked , remove it alonwith the parent element
document.getElementById('images').addEventListener('click', function(event) {
  if(event.target.tagName === 'IMG'){
    //this check since our list contains a link alongwith images
    let removeItem = event.target.parentNode;
    removeItem.remove();
  }
});