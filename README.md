# autoFormValidate
Uma pequena lib javascript para validação automática de formulários html

## Dependências
A *autoFormValidate* tem como dependência a lib [validate.js](https://github.com/diogolimafranco/validate.js)

## Instalação
```js
<script src="dist/auto-form-validade.min.js"></script>
```

## Implementação
Após a importação, a lib fica acessível globalmente através da propriedade *autoFormValidate*

```js
<script>
  window.autoFormValidate()
</script>
```
## Modos de uso
Temos duas forma de utilizar o *autoFormValidate*:
* Validar todos os formulários da página
* Validar um formulário específico

```js
<script>
  // Validar todos os formulários da página
  window.autoFormValidate()

  // Validar um formulário específico
  window.autoFormValidate(document.querySelector('#formId'))
</script>
```

## Definindo o tipo de validação / tipo de dado
A lib autoFormValidate utiliza as validações da lib [validate.js](https://github.com/diogolimafranco/validate.js) para validação dos formulários, mas você pode extender editando o arquivo existente dentro da pasta src.

Para definir uma validação, basta adicionar o data-attribute `data-validiy="type-validation"` ao seu form element
```html
<input type="text" data-validity="email">
```

Você também pode adicionar mais de uma validação, de forma que o primeiro tipo definido será o primeiro a ser executado.

Validar se o campo email foi preenchido e se o valor preenchido é um email válido
```html
<input type="text" data-validity="required email">
```
| O autoFormValidate aceita o atribute `required` em sua validação, assim, se o campo é de preenchimento obrigatório, basta utilizar o attribute html5 `required`
```html
<input type="text" required>
```

## Callbacks
Por padrão, o autoFormValidate apenas valida os campos do formulário, evitando seu submit até que todos os campos estejam preenchidos corretamente. Caso seu formulário seja enviado via *AJAX*, utilize os médotos .done() e .fail() passados como parâmetro em um objeto options.

| O parâmetro `event` deve ser fornecido para evitar o defaul event do formulário e ter acesso aos elementos do formulário validado

```js
<script>
  window.autoFormValidate(document.querySelector('#formId'), {
    done: (event) => {
      event.preventDefault()
      alert(*Passou na validação*) 
    },
    fail: (event) => {
      event.preventDefault()
      alert(*Reprovou na validação*)
    }
  })
</script>
```
## Retorno da validação
O autoFormValidate retorna um array contendo em cada index, um objeto com duas propriedades: `errors` e `el`

* errors:  Um array de erros com respostas pré definidas
* el: O nodeElement validado

```json
<script>
  [{
    "errors": [
      "O campo Email é de preenchimento obrigatório"
    ],
    "el": "[object HTMLInputElement]"
  }]
  })
</script>
```

## Tipos de Validação / Validation Types
*cellphone* Valida se o valor informado é um número de celular válido no formato *(99) 99999-9999*
```html
<input type="text" data-validity="cellphone">
```

*color* Validar se o valor informado é uma cor hexadecimal válido
```html
<input type="text" data-validity="color">
```

*cpf* Validar se o valor informado é um cpf válido
```html
<input type="text" data-validity="cpf">
```

*date* Validar se o valor informado é uma data válido no formato *dd/mm/yyyy*
```html
<input type="text" data-validity="date">
```

*email* Validar se o valor informado é endereço de email válido
```html
<input type="text" data-validity="email">
```

*pdf* Validar se o valor informado no campo string ou file possuí extensão *.pdf*
```html
<input type="text" data-validity="pdf">
```

*video* Validar se o valor informado no campo string ou file possuí extensão *.avi|.mov|.wmv|.mp4|.flv|.mkv|.rm*.
```html
<input type="text" data-validity="video">
```

*image* Validar se o valor informado no campo string ou file possuí extensão *.jpg|.gif|.png*.
```html
<input type="text" data-validity="image">
```

*phone* Validar se o valor informado corresponde a um telefone fixo no padrão *(99) 9999-9999*
```html
<input type="text" data-validity="phone">
```

*rangechars* Validar se o valor informado no campo do tipo string atende o número de caracteres definidos no atributo `min`, `max` ou ambos
```html
<input type="text" data-validity="rangechars" min="10">
<input type="text" data-validity="rangechars" max="20">
<input type="text" data-validity="rangechars" min="10" max="20">
<input type="text" data-validity="rangechars" minlength="10" maxlength="20">
```

*rangewords* Validar se o valor informado no campo do tipo string atende o número de palavras definidos no atributo `min`, `max` ou ambos
```html
<input type="text" data-validity="rangewords" min="10" max="50">
```

*required* Validar se o campo foi preenchido
```html
<input type="text" required>
<input type="text" data-validity="required">
```

*time* Validar se o valor informado é um hora válida no formato *hh:mm* ou *h:mm*
```html
<input type="text" data-validity="time">
```

*url* Validar se o valor informado no campo do tipo string é uma url válido
```html
<input type="text" data-validity="url">
```

*zip* Validar se o valor informado no campo do tipo é um número de CEP válido no formato *99999-999*
```html
<input type="text" data-validity="zip">
```