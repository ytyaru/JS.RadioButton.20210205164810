class Label {
    static create(radio, option, input_id) {
        const label = document.createElement('label');
        label.innerHTML = Label.#getInneHTMLValue(option);
        label.setAttribute('for', input_id);
        return label;
    }
    static #getInneHTMLValue(option) {
        if (0 < option.innerHTML.trim().length) { return option.innerHTML; }
        return option.getAttribute('value');
    }
}
