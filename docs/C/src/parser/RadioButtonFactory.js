//import BareRadio from './bare.js';
//import FieldsetRadio from './fieldset.js';
//import UlRadio from './ul.js';
class RadioButtonFactory {
    static get(dom_radio) {
        if (dom_radio.hasAttribute('bare')) { return BareRadioButton; }
        else if (dom_radio.hasAttribute('label')) { return FieldsetRadioButton; }
        else if (dom_radio.hasAttribute('ul')) { return UlRadioButton; }
        else { return UlRadioButton; }
    }
}
