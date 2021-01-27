const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  // We declaire our xhr request adn save it to a const
  const xhr = new XMLHttpRequest();
  //   we send a req to get the data from our api liek we would normally do with our first argument to be the kind of req we need and second will be our api
  xhr.open("GET", "https://reqres.in/api/users");
  //   When we do that we dont get a JSOn file so we need to parse it into JSON. One way is to normally parse our data but we will go with the second option which is to declaire our response type.
  xhr.responseType = "json";
  //   Time to add our listener and since not all browsers use .eventLister() we will do an on load function.
  xhr.onload = () => {
    const data = xhr.response;
    console.log(data);
  };
  //   Last spet is to call our send function on our xhr
  xhr.send();

  //   Now if we inspect our website and check our action we will see our console.log
};

const sendData = () => {
  // So here now we could actually do the same thing and it would work just fine, but we have a small issue. At this moment we will reuse tons of the same code. Sow aht we will do we will make a function to deal with all kind of requests and we will pass on each request we want out parameters and that will do!
  // I am gonna do the same think on the xhr2.js file!
  //   Dont forget to change the script in your index.html to the xhr2
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
