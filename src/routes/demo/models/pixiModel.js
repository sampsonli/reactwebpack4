import {deliver} from 'react-deliverer';
import loadjs from '~/common/loadjs';

@deliver('konva')
class PixiModel {
    #loading = false;

    iscroll;

    init() {
        this.#loading = false;
    }

    * initList(el) {
        if (el) {
            const PIXI = yield loadjs('https://pixijs.download/v5.3.0/pixi.min.js', 'PIXI');
            const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
            el.appendChild(app.view);
            const { stage } = app;

// prepare circle texture, that will be our brush
            const brush = new PIXI.Graphics();
            brush.beginFill(0xffffff);
            brush.drawCircle(0, 0, 50);
            brush.endFill();
            app.loader.add('t1', require('../assets/bg_grass.jpg').default);
            app.loader.add('t2', require('../assets/bg_rotate.jpg').default);
            app.loader.load((loader, resources) => {
                const background = new PIXI.Sprite(resources.t1.texture);
                stage.addChild(background);
                background.width = app.screen.width;
                background.height = app.screen.height;

                const imageToReveal = new PIXI.Sprite(resources.t2.texture);
                stage.addChild(imageToReveal);
                imageToReveal.width = app.screen.width;
                imageToReveal.height = app.screen.height;

                const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

                const renderTextureSprite = new PIXI.Sprite(renderTexture);
                stage.addChild(renderTextureSprite);
                imageToReveal.mask = renderTextureSprite;

                app.stage.interactive = true;

                let dragging = false;

                function pointerMove(event) {
                    if (dragging) {
                        brush.position.copyFrom(event.data.global);
                        app.renderer.render(brush, renderTexture, false, null, false);
                    }
                }

                function pointerDown(event) {
                    dragging = true;
                    pointerMove(event);
                }

                function pointerUp() {
                    dragging = false;
                }
                app.stage.on('pointerdown', pointerDown);
                app.stage.on('pointerup', pointerUp);
                app.stage.on('pointermove', pointerMove);
            });
        }
    }
}
export default new PixiModel();
