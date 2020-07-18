import {deliver} from 'react-deliverer';
import IScroll from '~/common/iscroll';

@deliver('konva')
class KonvaModel {
    #loading = false;

    iscroll;

    init() {
        this.#loading = false;
    }

    initList(el) {
        if (el) {
            this.iscroll = new IScroll(el, {
                scrollbars: true,
                disablePointer: true,
                disableTouch: false,
                disableMouse: false,
                bounce: false,
            });
        }
    }
}
export default new KonvaModel();
