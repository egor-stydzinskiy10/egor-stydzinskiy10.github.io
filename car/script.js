let btnShowDetail = document.querySelectorAll('.show-more-btn');
let characteristicDiv = document.querySelectorAll('.characteristic-div');
let btnCloseAll = document.querySelectorAll('.close');



for (let i = 0; i < btnShowDetail.length; i++) {
    btnShowDetail[i].onclick = () => {
        characteristicDiv[i].style.display = 'block';
        characteristicDiv[i].style.animation = 'showCarDetail 1s';

        setTimeout(() => {
            characteristicDiv[i].style.height = '400px';
        }, 900);
    }


}
for (let i = 0; i < btnCloseAll.length; i++) {
    btnCloseAll[i].onclick = () => {

        characteristicDiv[i].style.animation = 'hideCarDetail 1s';

        setTimeout(() => {
            characteristicDiv[i].style.display = 'none';
            characteristicDiv[i].style.height = '0px';
        }, 900);
    }
}