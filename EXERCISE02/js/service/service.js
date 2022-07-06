const serviceContentHeight = () => {
    const serviceArray = document.getElementsByClassName('service');
    const serviceBodyArray = document.getElementsByClassName('service__body');

    
    const serviceBodyTopMargin = 70;
    const serviceBottomMargin = 50;
    
    window.addEventListener('DOMContentLoaded', () => {
        let windowSize = window.innerWidth;
        let targetElementHeight = Math.round(serviceBodyArray[0].getBoundingClientRect().height);
        if (windowSize > 767) {
            const padding = targetElementHeight + serviceBodyTopMargin + serviceBottomMargin;
            serviceArray[0].style.height = `${padding}px`;
        } else {
            window.addEventListener('resize', () => {
                windowSize = window.innerWidth;
                targetElementHeight = Math.round(serviceBodyArray[0].getBoundingClientRect().height);
                const padding = targetElementHeight + serviceBodyTopMargin + serviceBottomMargin;
                if (windowSize > 767) {
                    console.log(padding);
                    serviceArray[0].style.height = `${padding}px`;
                } else {
                    serviceArray[0].style.height = 'auto';
                }
            });
        }
    })

};

serviceContentHeight();
