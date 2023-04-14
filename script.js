for (let index = 0; index < 4; index += 1) {
    const div = document.createElement('div');
    const paiPaletaCor = document.getElementsByTagName('section')[0];
    div.classList.add('color');
    paiPaletaCor.appendChild(div);
}
const paletaCor = document.getElementsByClassName('color')
paletaCor[0].style.backgroundColor = 'blue';
paletaCor[1].style.backgroundColor = 'red';
paletaCor[2].style.backgroundColor = 'green';
paletaCor[3].style.backgroundColor = 'violet';

