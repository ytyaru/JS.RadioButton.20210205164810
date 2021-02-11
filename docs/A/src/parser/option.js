class Option { // <option>またはvalue属性値からinput要素とlabel要素を作って返す
    static create(radio) {
        const inputLabels = [];
        const input_name = UniqueName.get(radio);
        const notation = Option.#jadgeNotation(radio);
        for (let value of notation.values) {
            const input_id = notation.unique.get(input_name, value);
            inputLabels.push([
                notation.input.create(radio, value, input_name, input_id),
                notation.label.create(radio, value, input_id),
            ]);
        }
        return inputLabels;
    }
    static #jadgeNotation(radio) { // 選択肢を指定する記法はどれか判断する。<option>またはvalue属性値のどれか。
        const options = radio.querySelectorAll('option');
        if (0 < options.length ) {
            return {
                values: options, 
                input: InputFromOptionElement, 
                label: LabelFromOptionElement, 
                unique: UniqueIdFromOptionElement
            };
        }
        const values = radio.getAttribute('value').split(' ');
        if (0 < values.length ) {
            return {
                values: values, 
                input: InputFromValueAttribute, 
                label: LabelFromValueAttribute, 
                unique: UniqueIdFromValueAttribute
            };
        }
        throw new Error('<radio-button>には選択肢が必要です。<option>かvalue属性値で選択肢を指定してください。');
    }
}
