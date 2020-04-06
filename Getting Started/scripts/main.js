let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.jpg') {
      myImage.setAttribute ('src','images/altdog.jpg');
    } else {
      myImage.setAttribute ('src','images/dog.jpg');
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null){
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Dogs are Great, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dogs are alright, ' + storedName;
  }

myButton.onclick = function(){
    setUserName();
}
