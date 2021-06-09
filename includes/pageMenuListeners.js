class pageMenuListenersClass{
    constructor(stageId){
        this.stageId =document.getElementById(stageId);
        this.menuElements=this.stageId.querySelectorAll('nav ul li a');
        this.menuLastElementClicked=this.menuElements[0];
        this.menuButton=this.stageId.getElementsByClassName('button-menu-principal')[0];
        this.menuNavigation=this.stageId.getElementsByClassName('navigation')[0];
        this.menuNavigationParent=this.menuNavigation.parentElement;
        this.menuButtonListener();
        this.clickListener();
        this.dataMenuCurrentIndex=0;
        this.menuNavigationClicked=false;
    }
    back(){
        let dataMenuCurrentIndex=this.dataMenuCurrentIndex;
        dataMenuCurrentIndex--;
        let menuToSelect = this.menuElements[dataMenuCurrentIndex];
        if(menuToSelect){
            this.dataMenuCurrentIndex--;
            menuToSelect.click();
        }
       }
    clickListener(){
        for (var i = 0; i < this.menuElements.length; i++) {
            let element = this.menuElements[i];
            let these = this;
            this.menuElements[i].setAttribute('data-menu-index',i);
            this.menuElements[i].addEventListener('click',
             function () {
                 event.preventDefault();
                 if(these.menuLastElementClicked==element){

                 }
                 else{
                    these.menuLastElementClicked.classList.remove('active');
                    element.classList.add('active');
                    these.menuLastElementClicked=element;
                 }
                 
                 these.chagePage(element.href,element.getAttribute('data-menu-index'));
                 console.log("STYLE SIETH");
                 let computedMenuNavigationLeft=window.getComputedStyle(these.menuNavigation,null).getPropertyValue('left');
                 if(these.menuNavigationParent.classList.contains('clicked-menu')&&computedMenuNavigationLeft=='0px'){
                    these.menuGeneralUnClicked();
                 }
                 console.log(these.menuNavigation.style);
                 element.scrollIntoView({ block: 'center', behavior: 'smooth' });
                 
             }
             
             , false);
        }
        
    }
    chagePage(pages,dataMenuIndex){
        this.dataMenuCurrentIndex=dataMenuIndex;
        let page=pages.split('#')[1];
        stagePage.get(page);
    }
    menuButtonListener(){
        let these = this;
        this.menuButton.addEventListener('click',
        function () {
            event.preventDefault();
            console.log('clik');
            if(these.menuNavigationClicked){
                these.menuGeneralUnClicked();
                console.log('clikUNED');
             }else{
                these.menuGeneralClicked();
                console.log('clikED');
             }
        }
        
        , false);
   }
   next(){
    let dataMenuCurrentIndex=this.dataMenuCurrentIndex;
        dataMenuCurrentIndex++;
        let menuToSelect = this.menuElements[dataMenuCurrentIndex];
        if(menuToSelect){
            this.dataMenuCurrentIndex++;
            menuToSelect.click();
        }
   }
   menuGeneralClicked(){
    this.menuNavigationParent.classList.add('clicked-menu');
    this.menuNavigationClicked=true;
    console.log('menuCliked');
    console.log(this.menuNavigationClicked);
   }
   menuGeneralUnClicked(){
    this.menuNavigationParent.classList.remove('clicked-menu');
    this.menuNavigationClicked=false;
   }
    
}