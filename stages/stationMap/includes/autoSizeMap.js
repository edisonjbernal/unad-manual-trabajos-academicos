 function resizeMap (){

    let imgOfStations = document.getElementById('imgMapOfStations');
    
    //imgOfStations =
     /* console.log('IMG Height:'+imgOfStations.offsetHeight);
    
    console.log('Height:'+window.innerHeight);
    console.log('IMG Width:'+imgOfStations.offsetWidth);
    console.log('Width:'+window.innerWidth);
    console.log(imgOfStations);  */

    if(imgOfStations.offsetHeight>=window.innerHeight&&imgOfStations.offsetWidth<=window.innerWidth){

      
            imgOfStations.style.width='auto';
            imgOfStations.style.height='100vh';
             /* console.log('Péqguelo al alto 1');  */

       
    }else if(imgOfStations.offsetHeight<=window.innerHeight&&imgOfStations.offsetWidth>=window.innerWidth){
       
            imgOfStations.style.width='100%';
            imgOfStations.style.height='auto';
             /* console.log('Péqguelo al Ancho 2');  */
        
    }

}
resizeMap();
window.addEventListener('resize', resizeMap);