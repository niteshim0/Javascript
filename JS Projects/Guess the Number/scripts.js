let randomNumber = Math.floor(Math.random() * 100) + 1;
    const submitButton = document.querySelector('.guessSubmit');
    const userInput = document.querySelector('.guessField');
    const guesses = document.querySelector('.guesses');
    const remainingAttempts = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const startOver = document.querySelector('.resultParas');
    
    const p = document.createElement('p');
    let guessCount = 1;
    let prevGuess = [];
    let playGame = true;

    if(playGame){
      submitButton.addEventListener('click',function(e){
        e.preventDefault();
        let userGuess = parseInt(userInput.value);
        validateGuess(userGuess)
      })
    }
    
    function validateGuess(userGuess){
      if(isNaN(userGuess)){
        alert('Please enter a valid number');
      }else if(userGuess<1){
        alert(`Please enter a number greater than 1`);
      }else if(userGuess>100){
        alert(`Please enter a number less than 100`);
      }else{
        prevGuess.push(userGuess);
        if(guessCount === 10){
          displayGuess(userGuess);
          displayMessage(`Game Over! The number was ${randomNumber}`);
          endGame();
        }else{
          displayGuess(userGuess);
          checkGuess(userGuess);
        }
      }
    }
    function checkGuess(userGuess){
      if(userGuess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${guessCount} attempts`);
        endGame();
      }else if(userGuess < randomNumber){
        displayMessage('Too low!');
      }else {
        displayMessage('Too high!');
      }
    }

    function displayGuess(userGuess){
      guesses.textContent = `Previous Guesses: ${prevGuess.join(' ')}`;
      remainingAttempts.textContent = `Remaining Attempts: ${10-guessCount}`;
      guessCount++;
      userInput.value = '';
      userInput.focus();
    }

    function displayMessage(message){
      lowOrHi.innerHTML = `<h2>${message}</h2>`
      lowOrHi.style.backgroundColor = 'red';
    }

    function endGame(){
      userInput.value = '';
      userInput.disabled = true;
      submitButton.disabled = true;
      startOver.appendChild(p);
      playGame = false;
      p.textContent = 'Start new game';
      p.style.backgroundColor = 'green';
      p.style.color = 'white';
      p.style.textAlign = 'center';
      p.style.padding = '10px';
      p.style.borderRadius = '5px';
      p.style.cursor = 'pointer';
      newGame();
    }

    function newGame(){
      p.addEventListener('click',function(){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessCount = 1;
        prevGuess = [];
        userInput.disabled = false;
        submitButton.disabled = false;
        userInput.value = '';
        userInput.focus();
        lowOrHi.innerHTML = '';
        startOver.removeChild(p);
        guesses.innerHTML = '';
        remainingAttempts.innerHTML = '';
        playGame = true;
      })
    }