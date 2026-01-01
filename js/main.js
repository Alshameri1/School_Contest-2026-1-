// Local Storge
Object.keys(window.localStorage).forEach(key => {
    document.documentElement.style.setProperty(key, window.localStorage.getItem(key))
})


// Header Scroll 
let header = document.querySelector('#header');
let nav = header.querySelector('ul');
let lastScroll = 0;
const scrollThreshold = 10;

window.addEventListener('scroll', () => {
    const currentScroll = Math.max(window.pageYOffset, 0);

    // Background
    if (currentScroll === 0) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = 'var(--bg-primary-20)';
    }

    const diff = currentScroll - lastScroll;

    if (diff > scrollThreshold) {
        // scroll down
        header.style.opacity = '0';
        header.style.top = '-30%';
    } 
    else if (diff < -scrollThreshold) {
        // scroll up
        header.style.opacity = '1';
        header.style.top = '30px';
    }

    lastScroll = currentScroll;
}, { passive: true });
