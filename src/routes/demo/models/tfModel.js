import {deliver} from 'react-deliverer';
import loadjs from '~/common/loadjs';

@deliver('tf-study')
class ScrollModel {
    #loading = false;

    * init() {
        this.#loading = false;
        const tf = yield loadjs('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js', 'tf');
        const average = tf.tidy(() => {
            const y = tf.tensor1d([1.0, 2.0, 3.0, 4.0]);
            const z = tf.ones([4]);

            return y.sub(z).square().mean();
        });

        average.print();
    }
}
export default new ScrollModel();
