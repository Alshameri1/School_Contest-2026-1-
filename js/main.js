// Local Storge
Object.keys(window.localStorage).forEach(key => {
    document.documentElement.style.setProperty(key, window.localStorage.getItem(key))
})


// Header Scroll 
let header = document.querySelector('#header')
let nav = header.querySelector('ul');
let lastScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll == 0 || currentScroll < 0 ||  0 > lastScroll) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = 'var(--bg-primary-20)';
    }
    if (currentScroll > lastScroll) {
        header.style.cssText = 'opacity: 0; top: -30%; '
    } else if (currentScroll < lastScroll) {
        header.style.cssText = 'top: 30px; opacity: 1;'
    }
    lastScroll = currentScroll;
});