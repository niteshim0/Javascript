const buttons = document.querySelectorAll(".button"); // selection by class name returns NodeList
const body = document.querySelector("body"); //selecting by tag name

buttons.forEach((button) => {

  button.addEventListener('click',(event)=>{

    if(event.target.id === "grey"){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === "white"){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === "blue"){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === "yellow"){
      body.style.backgroundColor = event.target.id;
    }
  })
})