const btnAddLi = document.getElementById('addElem');
const ulList = document.getElementById('list');


btnAddLi.addEventListener('click', function() {
    let liList = ulList.getElementsByTagName('li')
    let newLi = document.createElement('li');
    newLi.innerHTML = "item " + liList.length
    ulList.appendChild(newLi);
})