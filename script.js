const criarItem = (item) => {
   item = document.createElement('div');
   item.classList.add('Menulateral');
   
   item.innerHTML = `
   
   <ul>
        <li>Teste</li>
        <li>Teste</li>
        <li>Teste</li>
    </ul>
   `

   document.querySelector('.container').appendChild(item);


}   
const removerItem = (item) => {
    item = document.querySelector('.Menulateral');
    item.classList.remove('Menulateral');
   
}


const botao = document.querySelector('.abrirmenu');
botao.addEventListener('click', criarItem, removerItem);

