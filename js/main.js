// Local Storge
Object.keys(window.localStorage).forEach(key => {
    document.documentElement.style.setProperty(key, window.localStorage.getItem(key))
})


// Header Scroll 
let header = document.querySelector('#header')
let lastScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.cssText = 'opacity: 0; top: -30%; '
    } else if (currentScroll < lastScroll) {
        header.style.cssText = 'top: 30px; opacity: 1;'
    }
    lastScroll = currentScroll;
});