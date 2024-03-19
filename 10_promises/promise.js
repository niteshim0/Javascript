//Promise is an Object
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log('Promise 1');
    resolve(); // it connects this promise to then // if it is not used then it will not connect to then // it can also take arguments and sends the data to then
  },1000);
});

promiseOne.then(() => {
  console.log('Promise One is resolved');
});

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Promise 2');
    resolve();
  },2000);
})
.then(() => {
  console.log('Promise Two is resolved');
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log('Promise 3');
    resolve(
      {
        userName : "Nitesh Kushwaha",
        age : 22,
        email : "example@gmail.com",
        address : "India"
      }
    );
  },3000);
});
promiseThree.then(function(data){
  console.log('Promise Three is resolved', data);
})

//Error handling in Promises

new Promise((resolve, reject) => {
  setTimeout(function(){
    let error = false;
    if(!error){
      console.log('Promise 4');
      resolve(
        {
          userName : "Nitesh Kushwaha",
          age : 22,
          email : "example@gmail.com",
          address : "India"
        }
      );
    }else{
      console.log('Promise 4');
      reject('Error Occured');
    }
  },4000);
})
.then(function(data){
  console.log('Promise Four is resolved', data);
  return data.userName;
})
.then(function(userName){
  console.log('User Name is', userName);
})
.catch(function(error){
  console.log('Error:', error);
})
.finally(function(){
console.log('कुछ तो हुआ है या तो resolve  या reject कर दिया गया है।');
})

//Promise consuming using async and await
const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(function(){
    let error = true;
    console.log('Promise 5');
    if(!error){
      resolve(
        {
          userName : "Nitesh Kushwaha",
          age : 22,
          email : "example@gmail.com",
          address : "India"
        });
    }else{
      reject('Error Occured');
    }
  }
,5000);
});

async function consumePromiseFive(){
  try{
    const data = await PromiseFive; //here parantheses is not needed since PromiseFive is not a function but an object
    console.log('Promise Five is resolved', data);
  }catch(error){
    console.log('Error:', error);
  }
}

consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() ; //this operation takes time so we use await
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers(); //this api call will be first one to get executed before any setTimeout functions


//same api call using promises
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
//internal workings of fetch
// actually in simple terms fetch can be understood in two parts
//first one sends the API request though native node / web browser API
// second one , say a variable named DATA reserved the space in memory , alongwith it contains two array onFulfilled and onRejected and as the response comes back out of these two arrays ,arrays contains the function which gets fired and when fullfilled the DATA variable and this DATA response will fullfilled the value of promise returns to the memory space where promise data is supposed to return
