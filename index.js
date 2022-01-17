// Write your code here!

const Main = document.querySelector('main')
Main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory'

//const headerr = document.getElementsByTagName('h1').innerHTML = `<h1 id=\'victory\'>Maxime is the champion</h1>`

newHeader.innerHTML = `<h1>Maxime is the champion</h1>`