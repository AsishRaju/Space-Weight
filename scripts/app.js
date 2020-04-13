const userW = document.querySelector('#userW')
const userS = document.querySelector('#Select01')
const mercuryW_span= document.querySelector('.mercuryW')
const venusW_span= document.querySelector('.venusW')
const moonW_span= document.querySelector('.moonW')
const marsW_span= document.querySelector('.marsW')
const jupiterW_span= document.querySelector('.jupiterW')
const saturnW_span= document.querySelector('.saturnW')
const uranusW_span= document.querySelector('.uranusW')
const neptuneW_span= document.querySelector('.neptuneW')
const plutoW_span= document.querySelector('.plutoW')
const grids = document.querySelector('.grids')
const para = document.querySelector('.para')



function calcW(userW,unit){
    
    const fixed = (userW/9.81)
    const mercuryW =  (fixed*3.70).toFixed(2)
    const venusW = (fixed*8.87).toFixed(2)
    const moonW = (fixed*1.62).toFixed(2)
    const marsW = (fixed*3.71).toFixed(2)
    const jupiterW = (fixed*24.79).toFixed(2)
    const saturnW = (fixed*10.44).toFixed(2)
    const uranusW = (fixed*8.87).toFixed(2)
    const neptuneW = (fixed*11.15).toFixed(2)
    const plutoW = (fixed*0.62).toFixed(2)


    mercuryW_span.innerText=`${mercuryW} ${unit}`
    venusW_span.innerText=`${venusW} ${unit}` 
    moonW_span.innerText=`${moonW} ${unit}` 
    marsW_span.innerText=`${marsW} ${unit}` 
    jupiterW_span.innerText=`${jupiterW} ${unit}`
    saturnW_span.innerText=`${saturnW} ${unit}` 
    uranusW_span.innerText=`${uranusW} ${unit}` 
    neptuneW_span.innerText=`${neptuneW} ${unit}`
    plutoW_span.innerText=`${plutoW} ${unit}` 
}



userS.addEventListener('change',(e)=>{
    e.preventDefault()
    if(userS.value==1 && userW.value!=='')
    {
        grids.classList.remove('d-none')
        grids.classList.add('animated','fadeInUp')
        para.classList.add('d-none')
        calcW(userW.value,'kg') 
        
    }
    else if(userS.value==2 && userW.value!=='')
    {
        grids.classList.remove('d-none')
        grids.classList.add('animated','fadeInUp')
        para.classList.add('d-none')
        calcW(userW.value,'lbs') 
    }
    else
    {
        grids.classList.add('d-none')
    }

})

userW.addEventListener('keyup',(e)=>{
    e.preventDefault()
    if(userS.value==1)
    {
        grids.classList.remove('d-none')
        grids.classList.add('animated','fadeInUp')
        para.classList.add('d-none')
        calcW(userW.value,'kg') 
        
    }
    else if(userS.value==2)
    {
        grids.classList.remove('d-none')
        grids.classList.add('animated','fadeInUp')
        para.classList.add('d-none')
        calcW(userW.value,'lbs') 
    }
    
})