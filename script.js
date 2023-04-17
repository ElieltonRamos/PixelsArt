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

const bottom = document.createElement('button');
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

const inputPixels = document.createElement('input');
const paiInput = document.getElementById('bottom-content');
paiInput.appendChild(inputPixels)
inputPixels.type = 'number'
inputPixels.min = '1'
inputPixels.max = '50'
inputPixels.id = 'board-size'
const gerarPixels = document.createElement('button')
gerarPixels.innerText = 'VQV'
gerarPixels.id = 'generate-board'
paiInput.appendChild(gerarPixels)

const quadroDiv = document.createElement('p');
quadroDiv.id = 'pixel-board';
const paiQuadro = document.getElementsByTagName('main')[0];
paiQuadro.appendChild(quadroDiv);
quadroDiv.style.width = '210px'
quadroDiv.style.height = '210px'
for (let index = 0; index < 25; index += 1) {
    const divPx = document.createElement('div');
    divPx.classList.add('pixel');
    divPx.id = 'pixel' + index;
    const quadro = document.getElementById('pixel-board');
    quadro.appendChild(divPx);
};

gerarPixels.addEventListener('click', () => {
    let tamanhoPixels = inputPixels.value
    if (tamanhoPixels === '') {
        alert('Board inválido!')
    }
    if (inputPixels.value < 5) {
        tamanhoPixels = 5
    }
    if (inputPixels.value > 50) {
        tamanhoPixels = 50
    }
    quadroDiv.innerHTML = ''
    quadroDiv.style.width = `${(tamanhoPixels * 42)}px`
    quadroDiv.style.height = `${(tamanhoPixels * 42)}px`
    for (let index = 0; index < (tamanhoPixels * tamanhoPixels); index += 1) {
        const divPx = document.createElement('div');
        divPx.classList.add('pixel');
        divPx.id = 'pixel' + index;
        const quadro = document.getElementById('pixel-board');
        quadro.appendChild(divPx);
    };
})

function loadPixels () {
    const pixels = document.getElementsByClassName('pixel')
    const statusDesenho = JSON.parse(localStorage.getItem('pixelBoard'))
    for (let index = 0; index < pixels.length; index += 1) {
        const idPixel = 'pixel' + index
        pixels[index].style.backgroundColor = statusDesenho[idPixel]
    }
}

window.onload = () => {
    if (localStorage.getItem('colorPalette')) {
    loadPallet()
    } if (localStorage.getItem('pixelBoard')){
    loadPixels()
    }
};
function selected (event) {
    const selected = document.querySelectorAll('.color');
    for (let elemento of selected) {
        elemento.classList.remove('selected');
    }
    event.target.classList.add('selected');
};
paleta0.addEventListener('click', selected)
paleta1.addEventListener('click', selected)
paleta2.addEventListener('click', selected)
paleta3.addEventListener('click', selected)

const quadroPixel = document.getElementsByClassName('pixel')
for (let element of quadroPixel) {
    element.addEventListener('click', (event) => {
        let cor = document.getElementsByClassName('selected')[0]
        let corSelecionada = cor.style.backgroundColor
        let div = event.target
        div.setAttribute('style', `background-color: ${corSelecionada}`)
    });
};
//salvar desenho
const statusDesenho = {};
for (let px of quadroPixel) {
    px.addEventListener('click', () => {
        for (let index = 0; index < quadroPixel.length; index += 1){
            const idPixel = 'pixel' + index;
            statusDesenho[idPixel] = quadroPixel[index].style.backgroundColor
        }
        const stringStatusDesenho = JSON.stringify(statusDesenho);
        localStorage.setItem('pixelBoard', stringStatusDesenho);
    })
}
const bottomReset = document.createElement('button');
bottomReset.id = 'clear-board';
bottomReset.innerText = 'Limpar';
paiBottom.appendChild(bottomReset);
bottomReset.addEventListener('click', () => {
    for (let elemento of quadroPixel) {
        elemento.removeAttribute('style', 'background-color');
    }
});