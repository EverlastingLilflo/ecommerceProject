




// to use autotyping

    // declaring global variables
let sentence=['Save more with coupons and up to 70% off!']
let sectionNew=document.getElementById('displayAutotype');
let arrsentence=0;
let arrWords=0;

// function to start autotype
function autotype() {
    letterword=sentence[arrsentence][arrWords]
    sectionNew.innerHTML+= letterword  
    arrWords++
    setTimeout (function(){
        if (sentence[arrsentence][arrWords]) {
            autotype()   
        } 
        else{
            clear()
        }

    },100);
}
autotype() 
    
// after typing it and you want it to clear
  function clear() {
    if (sectionNew.innerHTML=='') {
        if (sentence[arrsentence+1]) {
            arrsentence++
            arrWords=0;
            autotype()
            
        }
        else{
            arrsentence=0
            arrWords=0
            autotype()
        }
        return;
        
    }
    sectionNew.innerHTML=sectionNew.innerHTML.slice(0,-1)
    setTimeout(function() {
        clear()
        
    },100)
   
    
  }
  
//   autotyping end



// to make the page scroll up on click

window.addEventListener('scroll', ()=>{
    let top = document.getElementById('jumpTop')
    const pageScroll = window.pageYOffset
    if (pageScroll > 500) {
        top.style.display = 'block'
    }else{
        top.style.display = 'none'
    }

    top.addEventListener('click', ()=>{
        scroll(0,0)
    });
});


