# gas-translate
Language translation using Google Apps Script

## instalation

First, access https://script.google.com/home and edit code.gs
```js
function doGet(e) {
    var p = e.parameter;
    var contentType = p.contentType != null ? 'text' : p.contentType
    var translatedText = LanguageApp.translate(p.text, p.source, p.target, { contentType: contentType } );
    return ContentService.createTextOutput(translatedText);
}
```
Go to *Publish* -> *Publish as Web Application* and copy `Current web app URL`

Next let's install `@wachaon/gas-translat`

```shell
wes install @wachaon/gas-translate
```

Create account.json and paste the above `Current web app URL`

```json
{
    "api": "Current web app URL"
}
```

## usage

```typescript
function translate (
    api: string,
    sourceLanguage: string,
    targetLanguage: string,
    text: string,
    option: { contentType: "text" | "html" }
): string {}
```
A list of language codes is available [here.](https://cloud.google.com/translate/docs/languages)

```js
const { api } = require( '/account' )
const ja = 'ja'
const en = 'en'
const zh = 'zh'

const translate = require( '@wachaon/translate' ).bind( null, api )

const text = "Hello world."
console.log( translate( ja, text ) ) // => "こんにちわ世界。"
console.log( translate( zh, text ) ) // => "你好，世界。"
```
