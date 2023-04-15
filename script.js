for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    const paiPaletaCor = document.getElementsByTagName('section')[0];
    div.classList.add('color');
    paiPaletaCor.appendChild(div);
}

const paletaCor = document.getElementsByClassName('color');
paletaCor[0].id = 'paleta0';
paletaCor[1].id = 'paleta1';
paletaCor[2].id = 'paleta2';
paletaCor[3].id = 'paleta3';
let paleta1 = document.getElementById('paleta1');
let paleta2 = document.getElementById('paleta2');
let paleta3 = document.getElementById('paleta3')
paleta0.style.backgroundColor = 'black';
paleta0.classList.add('selected');
paleta1.style.backgroundColor = 'blue';
paleta2.style.backgroundColor = 'green';
paleta3.style.backgroundColor = 'violet';

const bottom = document.createElement('bottom');
bottom.innerText = 'Cores aleatórias';
bottom.id = 'button-random-color';
const paiBottom = document.getElementById('bottom-content');
paiBottom.appendChild(bottom);
bottom.addEventListener('click', () => {
    const cores = ["pink", "green", "orange", "red", "darkred", "purple", "navy", "blue", "lightblue", "forestgreen", "darkgrey", "yellow"];
    paleta1.style.backgroundColor = cores[Math.ceil(Math.random() * 12)];
    paleta2.style.backgroundColor = cores[Math.ceil(Math.random() * 12)];
    paleta3.style.backgroundColor = cores[Math.ceil(Math.random() * 12)];

    const statusPaleta = {
        paleta1: document.getElementById('paleta1').style.backgroundColor,
        paleta2: document.getElementById('paleta2').style.backgroundColor,
        paleta3: document.getElementById('paleta3').style.backgroundColor,
    }
    const stringStatusPaleta = JSON.stringify(statusPaleta);
    localStorage.setItem('colorPalette', stringStatusPaleta);
    
});

const loadPallet = () => {
    const statusPaleta = JSON.parse(localStorage.getItem('colorPalette'));
    document.getElementById('paleta1').style.backgroundColor = statusPaleta.paleta1;
    document.getElementById('paleta2').style.backgroundColor = statusPaleta.paleta2;
    document.getElementById('paleta3').style.backgroundColor = statusPaleta.paleta3;
};
window.onload = () => {
    if (localStorage.getItem('colorPalette')) {
    loadPallet()
    }
};
const quadroDiv = document.createElement('p');
quadroDiv.id = 'pixel-board';
const paiQuadro = document.getElementsByTagName('main')[0];
paiQuadro.appendChild(quadroDiv);
for (let index = 0; index < 25; index += 1) {
    const divPx = document.createElement('div');
    divPx.classList.add('pixel');
    const quadro = document.getElementById('pixel-board');
    quadro.appendChild(divPx);
};
function selected (event) {
    const selected = document.querySelectorAll('.color');
    for (let elemento of selected) {
        elemento.classList.remove('selected');
    }
    event.target.classList.add('selected');
    let corSelecionada = event.srcElement.attributes[2].nodeValue
    console.log(corSelecionada)

} 
paleta0.addEventListener('click', selected)
paleta1.addEventListener('click', selected)
paleta2.addEventListener('click', selected)
paleta3.addEventListener('click', selected)

    // corSelecionada = event.srcElement.attributes[2].nodeValue
    // let corSelecionada = 'background-color: black;'
    // let classe = event.srcElement.attributes[0].nodeValue