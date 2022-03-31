const dragList = document.querySelector('#drag-list');
const checkOrder = document.querySelector('#check');

const richPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Bernard Arnault",
    "Carlos Slim Helu",
    "Larry Ellison"
];

const listItems=[];
let dragStartIndex;

[...richPeople].forEach((person,index)=>{
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index',index);
    listItem.innerHTML = `
    <span class="number">${index+1}</span>
    <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill" viewBox="0 0 16 16">
  <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
</svg>
    </div>
    `;
    listItems.push(listItem);
    dragList.appendChild(listItem)

});
checkItem();

function checkItem(){
    const draggables = document.querySelectorAll('.draggable');
    const draglistItem = document.querySelectorAll('.drag-list li');

    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart',dragStart);
    });

    draglistItem.forEach(item =>{
        item.addEventListener('dragenter',dragEnter);
        item.addEventListener('drop',dragDrop);
        item.addEventListener('dragover',dragOver);
        item.addEventListener('dragleave',dragLeave);

    });

}
function dragStart(){
    dragStartIndex =+ this.closest('li').getAttribute('data-index');
}
function dragEnter(){
    // this.classList.add('over');
}
function dragDrop(){
    dragEndIndex =+ this.closest('li').getAttribute('data-index');
    swapItem(dragStartIndex ,dragEndIndex);
}
function dragOver(e){
    e.preventDefault();   
}
function dragLeave(){
    // this.classList.remove('over');
    
}
function swapItem(fromIndex, toIndex){
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

checkOrder.addEventListener('click',()=>{
    listItems.forEach((item,index)=>{
        const personName = item.querySelector('.draggable').innerText;
        if(personName !== richPeople[index]){
            item.classList.add('wrong')
        }else{
            item.classList.remove('wrong');
            item.classList.add('right');
        }
    });
});         