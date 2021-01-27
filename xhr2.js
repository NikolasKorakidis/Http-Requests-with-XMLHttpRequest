const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// Basically here we are setting a function which will take three params, the method we would like to use , the url we will fetch the data and the data which will be the data we will send in our post req. We do not need it for our send, it will just be undefined and its ok.

// we will ad an if statement for our headers alwell so wont get an error in case of not having.

// We are setting up a promise as well for our async action and dont forget to return it in the end. Took me sometime to figure out what i was doing wrong :P
const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => reject("Something went wrong!");

    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => console.log(err));
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
