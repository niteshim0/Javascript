    const body = document.querySelector('body');
    const form = document.querySelector('form');
    const weight = form.querySelector('input[name="weight"]');
    const height = form.querySelector('input[name="height"]');
    const submit = form.querySelector('button[name="submit"]');
    const bmi = document.querySelector('h2:nth-of-type(1)');
    const status = document.querySelector('h2:nth-of-type(2)');
    const range = document.querySelector('h2:nth-of-type(3)');
    const meaning = document.querySelector('h2:nth-of-type(4)');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const weightValue = parseFloat(weight.value);
      const heightValue = parseFloat(height.value);
      if (isNaN(weightValue) || isNaN(heightValue)) {
        alert('Please enter a valid number');
        return;
      }
      const bmiValue = (weightValue / ((heightValue / 100) ** 2)).toFixed(2);
      bmi.textContent = `Your BMI is: ${bmiValue}`;
      if (bmiValue < 18.5) {
        status.textContent = 'You are: Underweight';
        range.textContent = 'Normal BMI range: 18.5 - 24.9';
        meaning.textContent = 'This means: You are underweight. You should gain some weight.';
        meaning.style.color = 'red';
        body.style.backgroundColor = 'lightpink';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        status.textContent = 'You are: Normal';
        range.textContent = 'Normal BMI range: 18.5 - 24.9';
        meaning.textContent = 'This means: You are healthy. Keep it up!';
        meaning.style.color = 'green';
        body.style.backgroundColor = 'lightgreen';

      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        status.textContent = 'You are: Overweight';
        range.textContent = 'Normal BMI range: 18.5 - 24.9';
        meaning.textContent = 'This means: You are overweight. You should lose some weight.';
        meaning.style.color = 'red';
        body.style.backgroundColor = 'lightpink';
      } else {
        status.textContent = 'You are: Obese';
        range.textContent = 'Normal BMI range: 18.5 - 24.9';
        meaning.textContent = 'This means: You are obese. You should lose a lot of weight.';
        meaning.style.color = 'red';
        body.style.backgroundColor = 'lightpink';
      }
});