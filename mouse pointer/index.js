alert("hellow");
// creating elements
const cursor=document.createElement('div');
const tracker=document.createElement('div');

// adding class
cursor.classList.add('cursor');
tracker.classList.add('tracker');
// appending Element in body tag
const body=document.querySelector('body');
body.appendChild(cursor);
body.appendChild(tracker);
// adding event lister 
body.addEventListener('mousemove',(e)=>{
    setPosition(cursor,e);
    setPosition(tracker,e);
})
// creating setpostion function
function setPosition(element,e){
    element.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;}