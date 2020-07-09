export default (src) => {
    if (!window.__loadedCss) {
        window.__loadedCss = {};
    }
    if (window.__loadedCss[src]) {
        return window.__loadedCss[src];
    }
    window.__loadedCss[src] = new Promise((resolve, reject) => {
        const element = document.createElement('link');
        element.setAttribute('rel', 'stylesheet');
        element.href = src;
        document.head.appendChild(element);
        element.setAttribute('rel', 'stylesheet');
        element.onload = () => {
            resolve(() => {
                delete window.__loadedCss[src];
                document.head.removeChild(element);
            });
        };
        element.onerror = (e) => {
            reject(e);
        };
    });
    return window.__loadedCss[src];
};
