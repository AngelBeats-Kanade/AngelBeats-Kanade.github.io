document.querySelector('img').onclick = function() {
  alert('�л�ͼƬ�����û���л����ٵ�һ�Σ�');
  if (document.querySelector('img').getAttribute('src') === 'images/1.jpg') {
    document.querySelector('img').setAttribute('src', 'images/2.png');
  } else {
    document.querySelector('img').setAttribute('src', 'images/1.jpg');
  }
};
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('�������������');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome!' + myName;
  }
};
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedname = localStorage.getItem('name');
  myHeading.textContent = 'Welcome!' + storedname;
}
myButton.onclick = function() {
  setUserName();
}