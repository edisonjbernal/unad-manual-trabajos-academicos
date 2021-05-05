class pageMenuListenersClass{
    constructor(stageId){
        this.stageId =document.getElementById(stageId);
        this.menuElements=this.stageId.querySelectorAll('nav ul li a');
        this.menuButton=this.stageId.getElementsByClassName('button-menu-principal')[0];
        this.menuNavigation=this.stageId.getElementsByClassName('navigation')[0];
        this.menuButtonListener();
        this.clickListener();
    }
    clickListener(){
        for (var i = 0; i < this.menuElements.length; i++) {
            let element = this.menuElements[i];
            let these = this;
            this.menuElements[i].addEventListener('click',
             function () {
                 event.preventDefault();
                 console.log("Me habéis dao clic");
                 console.log(element);
                 these.chagePage(element.href);
                 these.hideMenuMobile();
             }
             
             , false);
        }
        
    }
    chagePage(pages){
        let page=pages.split('#')[1];
        console.log('pageina:'+page);
        stagePage.get(page);
    }
    menuButtonListener(){
        let these = this;
        this.menuButton.addEventListener('click',
        function () {
            event.preventDefault();
            console.log("Me habéis dao clic");
            these.showMenuMobile();
        }
        
        , false);
   }
   showMenuMobile(){
    this.menuNavigation.classList.remove('hide');
   }
   hideMenuMobile(){
    this.menuNavigation.classList.add('hide');
   }
    
}