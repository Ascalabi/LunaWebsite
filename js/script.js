function openSlideMenu() {
    if(window.innerHeight < window.innerWidth) {
        document.getElementById('menu').style.right = '0%';
        document.getElementById('content').style.marginRight = '25%';
    } else {
        document.getElementById('menu').style.right = '0%';
        document.getElementById('menu').style.width = '100vw';
        document.getElementById('content').style.marginRight = '25%';
    }
}

function closeSlideMenu() {
    document.getElementById('menu').style.width = '20vw';
    document.getElementById('menu').style.right = '-25%';
    document.getElementById('content').style.marginRight = '0';

}

function surprise() {
    document.getElementById('marsIm').style.visibility = 'visible';
    document.getElementById('foot').style.bottom = '0%';
    document.getElementById('footerContent').style.marginBottom = '11%';

    if(window.innerHeight < window.innerWidth) {
        document.getElementById('surprise').style.bottom = '14vh';
    } else {
        document.getElementById('surprise').style.bottom = '22vh';
    }
    
    document.getElementById('surprise').style.opacity = '0';
    document.getElementById('surprise').style.zIndex = '5';

    if(window.innerHeight < window.innerWidth) {
        document.getElementById('surpriseClose').style.bottom = '14%';
    } else {
        document.getElementById('surpriseClose').style.bottom = '22vh';
    }
    
    document.getElementById('surpriseClose').style.opacity = '1';
    document.getElementById('surpriseClose').style.zIndex = '6';

    if(window.innerHeight < window.innerWidth) {
        document.getElementById('marsIm').style.bottom = '10.9%';
        document.getElementById('marsTxt').style.bottom = '65%';
    } else {
        document.getElementById('marsIm').style.bottom = '16.5vh';
        document.getElementById('marsTxt').style.bottom = '70vh';
    }

    document.getElementById('surpriseBackground').style.zIndex = '4';
    document.getElementById('surpriseBackground').style.visibility = 'visible';

    document.getElementById('closeSurprise').style.visibility = 'visible';

    document.getElementById('contactArrow').style.visibility = 'hidden';
}

function closeSurprise() {
    
    
    document.getElementById('foot').style.bottom = '-11%';
    document.getElementById('footerContent').style.marginBottom = '0%';

    if(window.innerHeight < window.innerWidth) {
        document.getElementById('surprise').style.bottom = '2vh';
    } else {
        document.getElementById('surprise').style.bottom = '10vh';
    }
    
    document.getElementById('surprise').style.opacity = '1';
    document.getElementById('surprise').style.zIndex = '6'

    document.getElementById('surpriseClose').style.bottom = '1.8%';
    document.getElementById('surpriseClose').style.opacity = '0';
    document.getElementById('surpriseClose').style.zIndex = '5'

    document.getElementById('marsIm').style.bottom = '-100%';
    document.getElementById('marsTxt').style.bottom = '-75%';



    document.getElementById('surpriseBackground').style.zIndex = '-1';
    document.getElementById('surpriseBackground').style.visibility = 'hidden';

    document.getElementById('closeSurprise').style.visibility = 'hidden';

    document.getElementById('contactArrow').style.visibility = 'visible';
}