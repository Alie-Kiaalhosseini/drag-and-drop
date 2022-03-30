const empty = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);
empty.forEach(e=>{
    e.addEventListener('dragover',dragOver);
    e.addEventListener('dragenter',dragEnter);
    e.addEventListener('dragleave',dragLeave);
    e.addEventListener('drop',dragDrop);
});
function dragStart(){
    setTimeout(()=>{this.className ='';
    this.classList.add('invisible')},0)
}
function dragEnd(){
    this.className = 'fill';
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.classList.add('hovered');
}
function dragLeave(){
    this.className = 'empty';
}
function dragDrop(){
    this.className = 'empty';
    this.append(fill);

}