function acivateItem() {
    const item = document.querySelectorAll('.about__features-item');

    function noneActive() {
        item.forEach(el => {
            el.style.transform = 'translateY(0)';
            el.style.transition = "all .5s ease";
        });
    }

    item.forEach(el => {
        el.addEventListener('click', () => {
            noneActive();
            el.style.transform = 'translateY(10px)';
        });
    });
}


export default acivateItem;



