class pageMenuListenersClass{
    constructor(stageId){
        this.stageId =document.getElementById(stageId);
        this.mainMenu_NavElements=this.stageId.querySelectorAll('nav ul li a');
        this.mainMenu_NavLastElementClicked=this.mainMenu_NavElements[0];
        this.mainMenu_Button=this.stageId.getElementsByClassName('button-menu-principal')[0];
        this.mainMenu_CloseButton=this.stageId.querySelectorAll('.close-main-menu button')[0];
     
        
        this.menuNavigation=this.stageId.getElementsByClassName('navigation')[0];
        this.menuNavigationParent=this.menuNavigation.parentElement;
        this.menuXXXButtonListener();
        this.clickListener();
        this.dataMenuCurrentIndex=0;
        this.menuNavigationClicked=false;
        this.accesibilityMainMenuAccess();
        
    }
    accesibilityMainMenuAccess(){
        let these = this;
        document.getElementById("accesibility-main-menu-access").addEventListener('click',
        function(){
            if(these.mobileReponsiveDetected()){
                these.mainMenu_Button.click(); 
            }
            these.mainMenu_NavElements[0].focus(); 
        });
    }
    back(){
        let dataMenuCurrentIndex=this.dataMenuCurrentIndex;
        dataMenuCurrentIndex--;
        let menuToSelect = this.mainMenu_NavElements[dataMenuCurrentIndex];
        if(menuToSelect){
            this.dataMenuCurrentIndex--;
            menuToSelect.click();
        }
       }
    clickListener(){
        let these = this;
        for (var i = 0; i < this.mainMenu_NavElements.length; i++) {
            let element = this.mainMenu_NavElements[i];
            
            this.mainMenu_NavElements[i].setAttribute('data-menu-index',i);
            this.mainMenu_NavElements[i].addEventListener('click',
             function () {
                 event.preventDefault();
                 if(these.mainMenu_NavLastElementClicked==element){
           
                    these.mainMenu_Button.focus();
                 }
                 else{
                    these.mainMenu_NavLastElementClicked.classList.remove('active');
                    element.classList.add('active');
                    these.mainMenu_NavLastElementClicked=element;
                    these.chagePage(element.href,element.getAttribute('data-menu-index'));
            
                    /* console.log(these.menuNavigation.style); */
                    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
                 }
                 
                    if(these.mainMenu_ButtonCliked()&&these.mobileReponsiveDetected()){
                        //Aplica cuando el menú en movil esta abierto
                        these.menuGeneralUnClicked();
                    }
                 
                 
                 
             }
             
             , false);
        }

        this.mainMenu_NavElements[0].addEventListener('focus',
             function () {
                if(these.mobileReponsiveDetected()&&!these.mainMenu_ButtonCliked()){
                    these.menuGeneralClicked();
                }
             }
        );

        this.timerOfKeyboardTabFirstMenuMobile = '';

        this.mainMenu_NavElements[0].addEventListener('blur',
             function () {
                if(these.mobileReponsiveDetected()&&these.mainMenu_ButtonCliked()){
                   these.timerOfKeyboardTabFirstMenuMobile= setTimeout(function(){
                    these.menuGeneralUnClicked();
                   },100);
                } 
             }
        );

        this.mainMenu_NavElements[1].addEventListener('focus',
             function () {
                if(these.mobileReponsiveDetected()&&these.mainMenu_ButtonCliked()){
                    clearTimeout(these.timerOfKeyboardTabFirstMenuMobile);  
                }
                 
             }
        );
        
    }
    chagePage(pages,dataMenuIndex){
        this.dataMenuCurrentIndex=dataMenuIndex;
        let page=pages.split('#')[1];
        stagePage.get(page);
    }
    menuXXXButtonListener(){
        let these = this;
        this.mainMenu_Button.addEventListener('click',
        function () {
            event.preventDefault();
            these.menuXXXButtonListenerFunction();
        }
        
        , false);

        this.mainMenu_CloseButton.addEventListener('click',
        function () {
            event.preventDefault();
            these.menuXXXButtonListenerFunction();
        }
        
        , false);
   }
   menuXXXButtonListenerFunction(){

    if(this.menuNavigationClicked){
        this.menuGeneralUnClicked();
    }else{
        this.menuGeneralClicked();
    }

    if(this.mainMenu_ButtonCliked()&&this.mobileReponsiveDetected()){
        this.mainMenu_NavElements[this.dataMenuCurrentIndex].focus();
    } 
    
   }
   next(homePage = null){
        let dataMenuCurrentIndex=this.dataMenuCurrentIndex;
        dataMenuCurrentIndex++;
        let menuToSelect = this.mainMenu_NavElements[0];
        if(!homePage){
                menuToSelect = this.mainMenu_NavElements[dataMenuCurrentIndex];
                if(menuToSelect){
                    this.dataMenuCurrentIndex++;
                }
        }
        if(menuToSelect){
            menuToSelect.click();
        }
   }
   mainMenu_ButtonCliked(){
    if(this.menuNavigationParent.classList.contains('clicked-menu')){
         return true;
    }
    else{
         return false;
    }
    }
   menuGeneralClicked(){
    this.menuNavigationParent.classList.add('clicked-menu');
    this.menuNavigationClicked=true;
    /* console.log('menuCliked'); */
    /* console.log(this.menuNavigationClicked); */
   }
   menuGeneralUnClicked(){
    this.menuNavigationParent.classList.remove('clicked-menu');
    this.menuNavigationClicked=false;
   }
   mobileReponsiveDetected(){
        let ghostMobileMenu=document.getElementById('ghost-mobile-menu');
        let ghostMobileMenuComputed=window.getComputedStyle(ghostMobileMenu,null).getPropertyValue('width');
        /* console.log("ghostMobileMenuComputed");
        console.log(ghostMobileMenuComputed); */
       
        if(ghostMobileMenuComputed=='0px'){
            return true;
        }
        else{
            return false;
        }
    }
    showContentInText(buttonShowText,noScrollIntoView){
        let textContainer = buttonShowText.parentElement.nextElementSibling;
        if(buttonShowText.innerText =="Ocultar texto"){
            buttonShowText.innerText="Mostrar en texto";
            textContainer.classList.remove('show');
        }
        else{
            buttonShowText.innerText="Ocultar texto";
            textContainer.classList.add('show');
            if(!noScrollIntoView){
                textContainer.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }
        }
       
    }
    getFromPageName(e,element){
        e.preventDefault();
        let page= element.getAttribute('href');
        let menuTempSelected= this.stageId.getElementsByClassName('navigation')[0].querySelectorAll(`a[href="${page}"]`)[0];
        menuTempSelected.click();
    }
    unloadMenuToclick(pageName){
        console.log('unloadMenuToclick');
        console.log('this.stageId');
        console.log(this.stageId);
        let menuTempSelected=this.stageId.getElementsByClassName('navigation')[0].querySelectorAll(`a[href="${pageName}"]`)[0];
        menuTempSelected.click();
    }
    
}