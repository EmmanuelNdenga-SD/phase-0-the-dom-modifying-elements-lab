// Write your code here!

const name1 = document.querySelector('main');
name1.remove(); 

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);