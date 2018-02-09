# IMPORTADOR.IO
Todo software dá pau, dá erro, dá xabú, dá merda, dá ruim... Isso não significa que somos maus desenvolvedores, apenas que o software não está pronto ou maduro o suficiente. Este aqui é o primeiro plugin que mostra que se importa com você, basta instalar e se permitir o afago.

## Como usar
Insira a tag de `<script>` do plugin depois de todas as suas chamadas de .js, e depois faça uma intervenção nos trexos de seu código aonde vão dar merda. Caso queira pegar todos, use o exemplo abaixo utilizando o `window.onerror`.

Inicialize o plugin.
```html
 <script src="/js/importador.io.js" type="application/javascript"></script>
 ```

Chame o plugin
 ```javascript
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
   var boilerplate = new Boilerplate(document.getElementById('demo'), {
    someDefaultOption: 'Plugin was loaded vanilla style!'
});

boilerplate.doSomething();
}
```



## Como colaborar
Faça um fork e colabora com as frases motivacionais!

```javascript
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    
    alert("Error occured: " + errorMsg);
    return false;
}
```

## License
* Author: Daniel Malkafly | coletivobima.com.br
* License: MIT