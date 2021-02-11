//import BareRadio from './bare.js';
//import FieldsetRadio from './fieldset.js';
//import UlRadio from './ul.js';
class ParserFactory {
    static get(dom_radio) {
        if (dom_radio.hasAttribute('bare')) { return BareRadio; }
        else if (dom_radio.hasAttribute('label')) { return FieldsetRadio; }
        else if (dom_radio.hasAttribute('ul')) { return UlRadio; }
        else { return UlRadio; }
    }
}
