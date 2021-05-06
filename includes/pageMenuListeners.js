class pageMenuListenersClass{
    constructor(stageId){
        this.stageId =document.getElementById(stageId);
        this.menuElements=this.stageId.querySelectorAll('nav ul li a');
        this.menuButton=this.stageId.getElementsByClassName('button-menu-principal')[0];
        this.menuNavigation=this.stageId.getElementsByClassName('navigation')[0];
        this.menuButtonListener();
        this.clickListener();
        this.dataMenuCurrentIndex=0;
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
                 these.chagePage(element.href,element.getAttribute('data-menu-index'));
                 these.hideMenuMobile();
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
            these.showMenuMobile();
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
   showMenuMobile(){
    this.menuNavigation.classList.remove('hide');
   }
   hideMenuMobile(){
    this.menuNavigation.classList.add('hide');
   }
    
}