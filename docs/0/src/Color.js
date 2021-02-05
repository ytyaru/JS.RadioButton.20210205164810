class Color {
    static setMainColor(color) {
        if (!chroma.valid(color)) { throw new Error(`不正な値の色です。: ${color}`); }
        let bgColor = chroma(color).name();
        let fgColor = Color.#getForegroundColor(bgColor);
        if (chroma.contrast(bgColor, fgColor) < 4.5) { alert('見づらい。contrastが4.5未満です。'); }
        // https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties
        document.body.style.setProperty('--rb-back-color', bgColor);
        document.body.style.setProperty('--rb-fore-color', fgColor);
        document.body.style.setProperty('--rb-hover-back-color', chroma.mix(bgColor, fgColor, 0.6, 'rgb'));
        document.body.style.setProperty('--rb-hover-fore-color', Color.#getForegroundColor(document.body.style.getPropertyValue('--rb-hover-back-color')));
        document.body.style.setProperty('--rb-checked-back-color', fgColor);
        document.body.style.setProperty('--rb-checked-fore-color', bgColor);
        console.log(`--rb-back-color: ${bgColor}`);
        console.log(`--rb-fore-color: ${fgColor}`);
        console.log(`--rb-hover-color: ${chroma.mix(bgColor, fgColor, 0.6, 'rgb')}`);
        console.log(`--rb-checked-back-color: ${fgColor}`);
        console.log(`--rb-checked-fore-color: ${bgColor}`);
    }
    static #getForegroundColor(bgColor) {
        return (chroma.contrast(bgColor, 'white') <= chroma.contrast(bgColor, 'black')) ? 'black' : 'white';
    }

}
