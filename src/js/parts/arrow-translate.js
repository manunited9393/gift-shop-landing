function arrowtranslate() {
    const rightBtn = document.querySelector('.more-info--right'),
          leftBtn = document.querySelector('.more-info--left'),
          panelRight = document.querySelector('.panel-to-buy--right'),
          panelLeft = document.querySelector('.panel-to-buy--bottom0'),
          wrapper = document.querySelectorAll('.grid__item');


    

    function translateToDefault(btn, element) {
        btn.addEventListener('click', () => {
            element.style.transform = 'translateX(0)';
            btn.style.display = "none";

            setTimeout(function() {
                element.style.transform = '';
                btn.style.display = "block";
            }, 50000);
        });

        
    }

    translateToDefault(rightBtn, panelRight);
    translateToDefault(leftBtn, panelLeft);
    
}

export default arrowtranslate;
