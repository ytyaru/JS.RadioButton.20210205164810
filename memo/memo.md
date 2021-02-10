# 書式

* `option`要素
* `value`属性
* テキストノード

## `option`要素

```html
<radio-button id="fontSize">
    <option value="small">小</option>
    <option value="medium" selected>中</option>
    <option value="large">大</option>
</radio-button>
```

## `value`属性

```html
<radio-button id="fontSize" value="small medium large" />
```

　`class`も複数つけるときはスペース区切りである。それに合わせてスペースを区切り文字にする。

　optionのテキストノードやtitle属性についてはDomMapperで対処する。

## テキストノード

### 区切り文字=`,`,` `

```html
<radio-button id="fontSize">small,medium,large</radio-button>
```
```html
<radio-button id="fontSize">small medium large</radio-button>
```

### 区切り文字=`\n`

```html
<radio-button>
small
medium
large
</radio-button>
```

