const input = document.querySelector('.input');
const table = document.querySelector('.books-table');
const tableInfo = document.querySelector('.table-info');

input.addEventListener('submit', addFunc);
function addFunc(e){
  e.preventDefault();
  const titles = document.getElementById('title').value;
  const authors = document.getElementById('author').value;
  const subjects = document.getElementById('subject').value;
  const prices = document.getElementById('price').value;

  const tables = document.createElement('table');
  tables.className = 'table-info';

  const td1 = document.createElement('td');
  td1.innerText = titles.slice(0,16) + "...";

  const td2 = document.createElement('td');
  td2.innerText = authors;

  const td3 = document.createElement('td');
  td3.innerText = subjects;

  const td4 = document.createElement('td');
  td4.innerText = prices;

  const td = document.createElement('td');
  td.className = 'close';
  td.innerText = 'X';


  tables.append(td1, td2, td3, td4, td);


  table.appendChild(tables);

  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#subject').value = '';
  document.querySelector('#price').value = '';

}


const tableRemove = document.querySelector('.books-table');
tableRemove.addEventListener('click', removeFunc);
function removeFunc(e){
  if (e.target.classList.contains('close')) {

    const tbl = e.target.parentElement;
    tbl.remove(tableInfo);
  }
}

const search = document.querySelector('.search-books');
search.addEventListener('keyup', filterFunc);

function filterFunc(e){
  const text = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.table-info');

  items.forEach((item) => {
    var itemName = item.innerText;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
