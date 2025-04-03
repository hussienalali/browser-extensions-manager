
let extension_continer=document.querySelector(".extension-continer")
let data = new XMLHttpRequest();
data.open("get","data.json");
data.send();
let activButton= document.querySelectorAll(".in-avtive-button")
let activButtonfilter= document.querySelectorAll(".extension-list button")

let filterActive=document.getElementById("Active")
let filternonActive=document.getElementById("Inactive")
let filterALL=document.getElementById("all")
let buttonState =document.getElementById("state")

data.onload=function()
{
    let maindataa =JSON.parse(this.responseText)

    maindataa.forEach(ext => {
        let extcard = document.createElement("div")
        let ext_title = document.createElement("h3")
        ext_title.textContent=ext.name
        let ext_icon = document.createElement("img")
        ext_icon.src=ext.logo
        let ext_paragraph =document.createElement("p")
        ext_paragraph.textContent=ext.description
        let remove = document.createElement("button")
        remove.textContent=`remove`
        let acctive =document.createElement("div")
        let text =document.createElement("div")
        let span = document.createElement("span")
let divButtons= document.createElement("div")
acctive.appendChild(span)
divButtons.appendChild(remove)
divButtons.appendChild(acctive)
divButtons.classList="divButtons"
if(ext.isActive)
{
    acctive.classList="avtive-button"  
 
}
else{
    acctive.classList="in-avtive-button"
}

        text.appendChild(ext_title)
        text.appendChild(ext_paragraph)
        extcard.appendChild(ext_icon)
        extcard.appendChild(text)
        extcard.appendChild(divButtons)
        extension_continer.appendChild(extcard)
        acctive.addEventListener(`click`,()=>{
            if( acctive.className==="avtive-button"  )
            {  if(filterActive.className==="active-buttons")
            {
                acctive.parentElement.parentElement.style.display="none"
            }
                acctive.className="in-avtive-button"   }
         else
         { if(filternonActive.className==="active-buttons")
         {
             acctive.parentElement.parentElement.style.display="none"
         }
            acctive.className="avtive-button" 
         }
        })
remove.addEventListener(`click`,()=>{
    extcard.remove()
})
    });
}
let removbutt= document.querySelectorAll("button")

removbutt.forEach(butt => {
    butt.addEventListener(`click`,()=>{
     
    })
});

activButton.forEach(actt =>{
    actt.addEventListener(`click`,()=>{
      
    })
})
filterActive.onclick=function()
{
    let activButton2= document.querySelectorAll(".in-avtive-button")
activButtonfilter.forEach(el=>{
    el.className="notActive"
})
filterActive.classList="active-buttons"
    activButton2.forEach(el=>{
        el.parentElement.parentElement.style.display ="none"
    })
    let activButton3= document.querySelectorAll(".avtive-button")

    activButton3.forEach(el=>{
        el.parentElement.parentElement.style.display ="flex"
    })
}
   
filternonActive.onclick=function()
{let activButton3= document.querySelectorAll(".avtive-button")
    activButtonfilter.forEach(el=>{
        el.className="notActive"
    })
    filternonActive.classList="active-buttons"
    activButton3.forEach(el=>{
        el.parentElement.parentElement.style.display ="none"
    })
    let activButton2= document.querySelectorAll(".in-avtive-button")

    activButton2.forEach(el=>{
        el.parentElement.parentElement.style.display ="flex"
    })
} 

filterALL.onclick=function()
{let activButton4= document.querySelectorAll(".extension-continer >div")
    activButtonfilter.forEach(el=>{
        el.className="notActive"
    })
    filterALL.classList="active-buttons"
    activButton4.forEach(el=>{
        el.style.display ="flex"
    })}

buttonState.onclick=function()
{
    if(buttonState.className==="day")
{    buttonState.style.backgroundImage="url(./assets/images/icon-sun.svg)"
buttonState.className="night"
document.documentElement.style.setProperty(`--Neutral-0`,`hsl(226, 11%, 37%)`)
document.documentElement.style.setProperty(`--Neutral-100`,`hsl(225, 23%, 24%)`)
document.documentElement.style.setProperty(`--Neutral-200`,`hsl(226, 25%, 17%)`)
document.documentElement.style.setProperty(`--Neutral-300`,`hsl(227, 75%, 14%)`)
document.documentElement.style.setProperty(`--Neutral-900`,`hsl(0, 0%, 78%)`)
document.documentElement.style.setProperty(`--Neutral-600`,`hsl(0, 0%, 78%)`)
}
else if(buttonState.className==="night")
{buttonState.style.backgroundImage="url(./assets/images/icon-moon.svg)"
    buttonState.className="day"
    document.documentElement.style.setProperty(`--Neutral-0`,` hsl(200, 60%, 99%)`)
document.documentElement.style.setProperty(`--Neutral-100`,`hsl(0, 0%, 93%)`)
document.documentElement.style.setProperty(`--Neutral-200`,`hsl(217, 61%, 90%)`)
document.documentElement.style.setProperty(`--Neutral-300`,`hsl(0, 0%, 78%)`)
document.documentElement.style.setProperty(`--Neutral-900`,`hsl(227, 75%, 14%)`)
document.documentElement.style.setProperty(`--Neutral-600`,` hsl(226, 11%, 37%)`)
}

}
