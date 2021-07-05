 function resizeMap (numOfResizesMap = 0){
        
    let imgOfStationsResize = document.getElementById('imgMapOfStations');
    let mapOfStationsResize = document.getElementById('mapOfStations');

    if(window.innerHeight>=window.innerWidth){
        if(imgOfStationsResize.offsetHeight>=window.innerHeight&&imgOfStationsResize.offsetWidth<=window.innerWidth){

      
                imgOfStationsResize.style.width='auto';
                imgOfStationsResize.style.height='100vh';
                  /* console.log('VERTICAL:Péqguelo al alto 1');   */
    
           
        }
        else{
                imgOfStationsResize.style.width='100%';
                imgOfStationsResize.style.height='auto';
                //console.log('VERTICAL: Péqguelo al Ancho 2'); 
                
        }
        mapOfStationsResize.classList.remove('horizontal');
        imgOfStationsResize.setAttribute('src','./images/mapa_estaciones.jpg');
       // console.log('VERTICAL');
        
    }
    else{
        if(imgOfStationsResize.offsetHeight>=window.innerWidth&&imgOfStationsResize.offsetWidth<=window.innerHeight){
                
                imgOfStationsResize.style.width='auto';
                imgOfStationsResize.style.height='100vw';
                
                 // console.log('HORIZONTAL 1');  
    
           
        }
        else {
                
                        imgOfStationsResize.style.width='100vh';
                        imgOfStationsResize.style.height='auto';
                      //  console.log('HORIZONTAL 3'); 
                
                
            
        }
        
        mapOfStationsResize.classList.add('horizontal');
        imgOfStationsResize.setAttribute('src','./images/mapa_estaciones_horizontal.jpg');
        
        //console.log('HORIZONTAL');
    }
    if(numOfResizesMap){
        resizeMap();
    }
}

resizeMap(1);
window.addEventListener('resize', resizeMap);