class InputFactory {
    static get(radio) {
        const options = radio.querySelectorAll('option');
        if (0 < options.length ) { return InputFromOptionElement; }
        const values = radio.getAttribute('value').split(' ');
        if (0 < values.length ) { return InputFromValueAttribute; }
        throw new Error('<radio-button>には選択肢が必要です。<option>かvalue属性値で選択肢を指定してください。');
    }
}
