function toggleClass(elementArray, visible) {
    elementArray.forEach((element) => {
        element.classList.remove('visible');
    });

    var contentElement = document.getElementById('tabContent');
    elementArray[visible].classList.add('visible');
}

document.addEventListener("DOMContentLoaded", (event) => {
    var clickElement = document.getElementById('tabHeaders');

    var elArray = [];
    elArray[0] = document.getElementById('tab1');
    elArray[1] = document.getElementById('tab2');
    elArray[2] = document.getElementById('tab3');
    elArray[3] = document.getElementById('tab4');


    elArray[0].classList.add('visible');

    clickElement.addEventListener('click', (event) => {
        switch(event.target.outerText) {
            case 'tab 1':
                toggleClass(elArray, 0);
                break;
            case 'tab 2':
                toggleClass(elArray, 1);
                break;
            case 'tab 3':
                toggleClass(elArray, 2);
                break;
            case 'tab 4':
                toggleClass(elArray, 3);
                break;
        };
    });
});
