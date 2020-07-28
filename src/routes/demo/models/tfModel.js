import {deliver} from 'react-deliverer';
import loadjs from '~/common/loadjs';

@deliver('tf-study')
class ScrollModel {
    #loading = false;

    * init() {
        this.#loading = false;
        const tf = yield loadjs('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js', 'tf');
        // Notice there is no 'import' statement. 'tf' is available on the index-page
        // because of the script tag above.

        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train the model using the data.
        model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            // Open the browser devtools to see the output
            model.predict(tf.tensor2d([5], [1, 1])).print();
        });
    }
}
export default new ScrollModel();
