// grab all the tabs
const tabs = document.querySelectorAll(".tab");

// grab all the panels
const panels = document.querySelectorAll(".panel");

// Tabs menu event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
     
//   Deactivate all tabs
  tabs.forEach((tab) => {
    // console.log(tab.children[0]); take it's first children
    tab.children[0].classList.remove(
        'border-b-4',
        'border-red-500',
    )
  });
// Hide all panels
panels.forEach((panel)=>panel.classList.add('hidden'))


// Activate a new tab and panel based on the target
e.target.classList.add('border-red-500','border-b-4')
const classString = e.target.getAttribute('data-target')
document.getElementById('panels')
.getElementsByClassName(classString)[0]
.classList.remove('hidden')
}



// ------------- hamburger menu -----------------

const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
 
menuBtn.addEventListener('click',toggleBtn)

//----------------- Swapping Logo -------------------

const logo = document.getElementById('logo')

function toggleBtn(){
  menuBtn.classList.toggle('open')
  menu.classList.toggle('hidden')
  menu.classList.toggle('white-logo')
  if(menu.classList.contains('white-logo')){
    logo.setAttribute('src','./images/logo-bookmark-footer.svg')

  }
  else{
    logo.setAttribute('src',"./images/logo-bookmark.svg")
  }
  
  
}  

