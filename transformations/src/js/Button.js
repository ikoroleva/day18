export default class Button {
    constructor(text, action, className = null) {
        this.text = text;
        this.action = action;
        this.className = className;
    }

    render() {
        this.element = document.createElement('button');
        this.element.innerHTML = this.text;
        this.element.classList.add('button');
        if (this.className) {
            this.element.classList.add(this.className);
        }
        this.element.addEventListener('click', this.action);
    }

    mount() {
        this.render();
        this.update();
        return this.element;
    }

    update() {
        // no state to update
    }
}