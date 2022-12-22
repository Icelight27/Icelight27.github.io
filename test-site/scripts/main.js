const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gnome.jpg") {
    myImage.setAttribute("src", "images/gnome1.jpg");
  } else {
    myImage.setAttribute("src", "images/gnome.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Gnomes are cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Gnomes are cool, ${storedName}`;
  }

  myButton.onclick = ()=> {
    setUserName();
  }