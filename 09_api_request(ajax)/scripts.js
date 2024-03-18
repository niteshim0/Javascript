const card = document.getElementById('card');
const requestURL = 'https://api.github.com/users/hiteshchoudhary';
const button = document.getElementById('btn');
button.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      card.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" style="width: 20%;height: 20%">
        <h1>${data.name}</h1>
        <p class="title">${data.bio}</p>
        <p>${data.location}</p>
        `;
    }
  }
  xhr.send();
});
