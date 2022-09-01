 const menuItemArray = document.querySelectorAll(".menu-item")
 const base = document.querySelector('.home-web__absolute-div-right > .base')
 const menuItems = [...menuItemArray]


 // MOUVE OVER RIGHT MENU
 menuItems.forEach((menuItem,index) => {
    console.log("width ",menuItem.offsetWidth);
    console.log("height ",menuItem.offsetHeight);
    menuItem.style.animation = ''
     menuItem.addEventListener("mousemove", (e) => {
         
        let deg = '11deg'

        switch (index) {
            case 0:
                deg = '0deg'
                break;
            case 1:
                deg = '0deg'
                break;
            case 2:
                deg = '-10deg'
                break;
            case 3:
                deg = '0deg'
                break;
            case 4:
                deg = '0deg'
                break;
 
        }

        
          menuItem.animate([{
            transform:`rotate(${deg})`
          }],{
              duration:1300,
              fill: 'forwards',
              easing:'ease-in'
          })
         
          
     })

     menuItem.addEventListener("mouseleave", (e) => {
        

        let deg = '11deg'

        switch (index) {
            case 0:
                deg = '11deg'
                break;
            case 1:
                deg = '11deg'
                break;
            case 2:
                deg = '0'
                break;
            case 3:
                deg = '-11deg'
                break;
            case 4:
                deg = '-11deg'
                break;
 
        }

        
          menuItem.animate([{
            transform:`rotate(${deg})`
          }],{
              duration:200,
              fill: 'forwards',
              easing:'ease-out'
          })
         
    })
 })

//  MOUVE OVER RIGHT MENU END -->>>>




const eventClicksMenu = (button,targetClass,text) => {
   
    const baseCardTextBottom = document.querySelector('.home-web__absolute_current-page-bottom > .base > .card-container > .card > p')
    const baseCardBottom = document.querySelector('.home-web__absolute_current-page-bottom > .base > .card-container')
    button.addEventListener('click',() => {
        console.log("CLICK");
        [...document.querySelectorAll('.active-button')].forEach(e => e.classList.remove("active-button"))
        button.classList.add("active-button")
      
        const activePage = document.querySelector("main.active")
        const target = document.querySelector(targetClass)
       
        if(!target.classList.contains('active'))
        {
            activePage.animate([{
                top:"-100vh",
                opacicy:0
            }],{
                duration: 300,
                fill: "forwards",
                easing:'ease-in-out'
            })
        
            activePage.animate([{
                top:"100vh",
                opacicy:0
            }],{
                duration: 0,
                fill: "forwards",
                delay:310
            })
        
            target.animate([{
                top:"0",
                opacity:1
            }],{
                duration: 300,
                fill: "forwards",
                easing:'ease-in-out'
              
            })
        }
    
        activePage.classList.remove('active')
        target.classList.add('active')
        
        setTimeout(() => {
            baseCardTextBottom.textContent = text
        }, 150);

        baseCardBottom.animate([{
            transform: 'rotate(-371deg)',
             
        }],{
            duration:500,
            fill: "backwards",
            delay:100
        })

        
        
    })
}

const buttonHome = document.querySelector('.home-web__absolute-div-right > .base > .home')

const buttonProjects = document.querySelector('.home-web__absolute-div-right > .base > .projects')
const buttonEducation = document.querySelector('.home-web__absolute-div-right > .base > .education')
const buttonContact = document.querySelector('.home-web__absolute-div-right > .base > .contact')
const buttonAbout = document.querySelector('.home-web__absolute-div-right > .base > .about')


eventClicksMenu(buttonHome,"main.home","HOME")
eventClicksMenu(buttonProjects,"main.projects","PROJETOS")
eventClicksMenu(buttonEducation,"main.education","EDUCAÇÃO")
eventClicksMenu(buttonContact,"main.contact","CONTATO")
eventClicksMenu(buttonAbout,"main.about","SOBRE")