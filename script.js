for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    const paiPaletaCor = document.getElementsByTagName('section')[0];
    div.classList.add('color');
    paiPaletaCor.appendChild(div);
}
const paletaCor = document.getElementsByClassName('color')
paletaCor[0].style.backgroundColor = 'black';
paletaCor[1].style.backgroundColor = 'blue';
paletaCor[2].style.backgroundColor = 'green';
paletaCor[3].style.backgroundColor = 'violet';

const bottom = document.createElement('bottom');
bottom.innerText = 'Cores aleatórias';
bottom.id = 'button-random-color'
const paiBottom = document.getElementById('bottom-content');
paiBottom.appendChild(bottom);
bottom.addEventListener('click', () => {
    const cores = ["white", "gold", "orange", "red", "darkred", "purple", "navy", "blue", "lightblue", "forestgreen", "darkgrey", "yellow"];
    paletaCor[1].style.backgroundColor = cores[Math.ceil(Math.random() * 12)];
    paletaCor[2].style.backgroundColor = cores[Math.ceil(Math.random() * 12)];
    paletaCor[3].style.backgroundColor = cores[Math.ceil(Math.random() * 12)];
})