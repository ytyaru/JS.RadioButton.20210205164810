//import Unique from './id/Unique.js';
//import Input from './tag/Input.js';
//import Label from './tag/Label.js';
class UlRadio {
    static create(radio) {
        const ul = UlRadio.#createUl(radio);
        UlRadio.#createOptions(radio, ul);
        radio.parentNode.insertBefore(ul, radio);
        radio.remove();
    }
    static #createUl(radio) {
        const ul = document.createElement('ul');
        const class_value = radio.getAttribute('ul') || 'radio-button-group';
        ul.setAttribute('class', class_value);
        return ul;
    }
    static #createOptions(radio, ul) {
        const inputLabels = Option.create(radio); 
        for (let inputLabel of inputLabels) {
            const li = document.createElement('li');
            for (let element of inputLabel) {
                li.appendChild(element);
            }
            ul.appendChild(li);
        }
        /*
        const options = radio.querySelectorAll('option');
        const input_name = Unique.getInputName(radio);
        for (let option of options) {
            const li = document.createElement('li');
            const input_id = Unique.getInputId(input_name, option);
            li.appendChild(Input.create(radio, option, input_name, input_id));
            li.appendChild(Label.create(radio, option, input_id));
            ul.appendChild(li);
        }
        */
    }
}
