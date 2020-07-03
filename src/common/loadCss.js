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
        document.head.appendChild(element);
        element.href = src;
        element.onload = () => {
            resolve();
        };
        element.onerror = (e) => {
            reject(e);
        };
    });
    return window.__loadedCss[src];
};
