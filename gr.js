// coofeee categories page

const hea = document.querySelectorAll('.head .head-item')
const content = document.querySelector('.content .content-item')
hea.forEach((item)=>{
    item.addEventListener('click',()=>{
        showdiv(item)
    })
})
function showdiv(item){
    content.querySelector('.content-item img').src = item.querySelector('.head-item img').src
    content.querySelector('.item-content  h2').innerHTML = item.querySelector('.head-content  h2').innerHTML;
    content.querySelector('.item-content  span').innerHTML = item.querySelector('.head-content  span').innerHTML;
    content.querySelector('.item-content  p').innerHTML = item.querySelector('.head-content  p').innerHTML;
    setActiveTab(item)
}
    function setActiveTab(item){
    
    hea.forEach((item)=>{
    item.classList.remove('active');
    })
    item.classList.add('active')
}
   