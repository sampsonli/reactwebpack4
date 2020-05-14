export default (src, attr = '') => {
    if (!window.__loaded) {
        window.__loaded = {};
    }
    return new Promise((resolve, reject) => {
        if (!window.__loaded[src]) {
            const element = document.createElement('script');
            document.body.appendChild(element);
            element.src = src;
            element.onload = () => {
                window.__loaded[src] = true;
                resolve(attr && window[attr]);
            };
            element.onerror = (e) => {
                reject(e);
            };
        } else {
            resolve(attr && window[attr]);
        }
    });
};
