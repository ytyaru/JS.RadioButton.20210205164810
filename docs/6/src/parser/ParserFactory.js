import BareRadio from './bare.js';
import FieldsetRadio from './fieldset.js';
import UlRadio from './ul.js';
export default class ParserFactory {
    static create(dom_radio) {
        if (dom_radio.hasAttribute('label')) { return FieldsetRadio; }
        else if (dom_radio.hasAttribute('ul')) { return UlRadio; }
        else { return BareRadio; }
    }
}
