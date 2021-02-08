window.addEventListener('load', (event) => {
    console.log(RadioButtonTag);
    RadioButtonTag.parse();
    /*
    // <radio id="color">にchangeイベントを実装する
    RadioButtonTag.addChangeEventListener('color', ColorRadio.onChange);
    // チェックボックスに応じてイベント追加・解除する
    document.querySelector('#is-add-event').addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log('add-event', event);
            RadioButtonTag.addChangeEventListener('color', ColorRadio.onChange);
        } else {
            console.log('remove-event', event);
            RadioButtonTag.removeChangeEventListener('color', ColorRadio.onChange);
        }
    });
    */
});
