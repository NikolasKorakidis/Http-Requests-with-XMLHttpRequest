const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// Basically here we are setting a function which will take two params, the method we would like to use and the url we will fetch the data

// We are setting up a promise as well for our async action and dont forget to return it in the end. Took me sometime to figure out what i was doing wrong :P
const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.send();
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};

const sendData = () => {};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
