// Local Storge
Object.keys(window.localStorage).forEach(key => {
    document.documentElement.style.setProperty(key, window.localStorage.getItem(key))
})