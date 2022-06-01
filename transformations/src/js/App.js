import Button from './Button';
import transforms from './transforms';

export default class App {

    constructor() {
        this.applied_transforms = [];
    }

    render() {
        const div = document.createElement('div');
        div.innerHTML = (`
            <div class="transforms-app">
                <div class="stage">
                    <div class="box">BOX</div>
                </div>
                <div class="controls"></div>
            </div>
        `).trim();
        this.element = div.firstChild;

        this.box = this.element.querySelector('.box');

        let buttons = [];

        // reset button
        const reset_button = this.createButton('reset', () => {
            this.resetTransformations();
        }, 'button--reset');
        buttons.push(reset_button);

        // create a button from each of the transformations
        transforms.forEach(transform => {
            buttons.push(this.createButton(transform, () => {
                this.applyTransformation(transform);
            }));
        })

        // append all the buttons into the controls element
        const controls = this.element.querySelector('.controls');
        buttons.forEach(button => {
            controls.appendChild(button.mount())
        });
    }


    mount(container) {
        this.render();
        this.update();
        container.appendChild(this.element);
        return this.element;
    }

    update() {

    }

    createButton(text, action) {
        const button = new Button(text, action);

        return button;
    }

    resetTransformations() {
        this.box.style.transform = 'none';
    }

    applyTransformation(transform) {
        if (this.box.style.transform === 'none') {
            this.box.style.transform = '';
        }

        this.box.style.transform += ` ${transform}`;
    }

}