//import './radio-button.css';
//import './lib/chroma-2.1.0.min.js'
//import ParserFactory from './parser/ParserFactory.js';
//import Color from './Color.js';
class RadioButtonTag {
    static #ELEMENT_NAME = 'radio-button'
    static parse() {
        RadioButtonTag.#parse();
        const storage = StorageFacotry.get();
//        const storage = StorageFacotry.get('Every');
    }
    static #parse() {
        const radios = document.querySelectorAll(RadioButtonTag.#ELEMENT_NAME);
        console.log(radios);
        for (let radio of radios) {
            console.log(radio);
            ParserFactory.get(radio).create(radio);
        }
    }
    // 指定した<radio>のid属性値をもつ<input>に対して、指定したfuncを'change'イベントとして実装する
    static addChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.addEventListener('change', func, options);
        }
    }
    static removeChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.removeEventListener('change', func, options);
        }
    }
}
