import {deliver} from 'react-deliverer';
import loadjs from '~/common/loadjs';

@deliver('konva')
class KonvaModel {
    #loading = false;

    init() {
        this.#loading = false;
    }

    * initEle(el) {
        if (!el) return;
        const Konva = yield loadjs('lib/konva.min.js', 'Konva');
        const stage = new Konva.Stage({
            container: el,
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // add canvas element
        const layer = new Konva.Layer();
        stage.add(layer);

        // create shape
        const box = new Konva.Rect({
            x: 60,
            y: 50,
            width: 100,
            height: 100,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
        });
        layer.add(box);

        layer.draw();

        // add cursor styling
        box.on('mouseover', () => {
            document.body.style.cursor = 'pointer';
        });
        box.on('mouseout', () => {
            document.body.style.cursor = 'default';
        });
    }
}
export default new KonvaModel();
