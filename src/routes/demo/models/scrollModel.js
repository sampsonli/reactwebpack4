import {deliver} from 'react-deliverer';
import Scroll from '~/common/scroll';

@deliver('scroll')
class ScrollModel {
    #loading = false;

    init() {
        this.#loading = false;
    }

    initList(el) {
        if (el) {
            const target = el.querySelector('.list');
            target.style.willChange = 'transform';
            const transform = typeof target.style.transform !== 'undefined' ? 'transform' : 'webkitTransform';
            const scroller = new Scroll((left, top) => {
                // target.style[transform] = 'translateY(-' + top + 'px)';
                target.style[transform] = `translateY(-${parseInt(top, 10)}px) translateZ(0)`;
            }, {
                scrollingX: false,
                scrollingY: true,
                animating: true,
                bouncing: false,
                frictionFactor: 0.93,
            });
            scroller.setDimensions(el.offsetWidth, el.offsetHeight, el.offsetWidth, el.scrollHeight);
            el.addEventListener('touchstart', (e) => {
                scroller.doTouchStart(e.touches, e.timeStamp);
                // e.preventDefault();
            });
            el.addEventListener('touchmove', (e) => {
                scroller.doTouchMove(e.touches, e.timeStamp);
                e.preventDefault();
            });
            el.addEventListener('touchend', (e) => {
                scroller.doTouchEnd(e.timeStamp);
                // e.preventDefault();
            });
        }
    }
}
export default new ScrollModel();
