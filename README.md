# autoFormValidate
Uma pequena lib javascript para validação automática de formulários html

## Dependências
A **autoFormValidate** tem como dependência a lib [validate.js](https://github.com/diogolimafranco/validate.js)

## Instalação
```javascript
<script src='dist/auto-form-validade.min.js'></script>
```

## Implementação
Após a importação, a lib fica acessível globalmente através da propriedade **autoFormValidate**

```js
<script>
  window.autoFormValidate()
</script>
```
## Modos de uso
Temos duas forma de utilizar o **autoFormValidate**:
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

## Definindo o modo de validação
A lib autoFormValidate pode facilitar muito a sua vida com alguns recursos úteis, como:

`data-alert="true"` Faz com que seja apresentado um alert `javascript` na tela com a lista de erros

`data-feedback="true"` Faz com que o campo errado receba um feedback visual, uma borda vermelha

`data-debug="true"` Faz um `console.log` apresentando a lista de erros no console do Navegador

> Utilize o modo `data-debug="true"` enquanto estiver desenvolvendo, remova este atributo em produção.

```html
<form id="formId" data-feedback="true" data-alert="true" data-debug="false">
<!-- Caso você não queira utilizar algum ou todos os atributos de definição -->
<form id="formId" data-alert="true">
```

*Você pode mudar o modo de feedback e alert através dos métodos `done(event)` ou `fail(event, errors)` na função de execução, descrito mais abaixo*

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

## Definindo o title dos campos validados para o alert de aviso
Por padrão, a lib autoFormValidate utiliza o atributo `name="NomeDoCampo"` para definir mensagens amigáveis ao usuário. Acontece que sem sempre desejamos utilizar o atributo `name` para isso. Então, você deve utilizar o atributo `data-title="Nome do Campo"` para mensagens de erro personalizadas.
```html
<input type="text" required name="address" data-title="Endereço">
<!--Retorna: O campo Endereço não pode estar vazio-->

<input type="text" required name="Address">
<!--Retorna: O campo Address não pode estar vazio-->
```

## Tipos de Validação / Validation Types
Para setar o tipo de validação de um elementForm, basta adicionar o atributo `data-validity=""`, definindo o nome da validação a ser utilizado. Veja a lista de validações disponíveis:

### cellphone
Valida se o valor informado é um número de celular válido no formato **(99) 99999-9999**
```html
<input type="text" data-validity="cellphone">
```

### color 
Validar se o valor informado é uma cor hexadecimal válido
```html
<input type="text" data-validity="color">
```

### cpf
Validar se o valor informado é um cpf válido
```html
<input type="text" data-validity="cpf">
```

### date
Validar se o valor informado é uma data válido no formato **dd/mm/yyyy**
```html
<input type="text" data-validity="date">
```

### email
Validar se o valor informado é endereço de email válido
```html
<input type="text" data-validity="email">
```

### pdf
Validar se o valor informado no campo string ou file possuí extensão **.pdf**
```html
<input type="text" data-validity="pdf">
```

### video
Validar se o valor informado no campo string ou file possuí extensão **.avi|.mov|.wmv|.mp4|.flv|.mkv|.rm**.
```html
<input type="text" data-validity="video">
```

### image
Validar se o valor informado no campo string ou file possuí extensão **.jpg|.gif|.png**.
```html
<input type="text" data-validity="image">
```

### phone
Validar se o valor informado corresponde a um telefone fixo no padrão **(99) 9999-9999**
```html
<input type="text" data-validity="phone">
```

### rangechars
Validar se o valor informado no campo do tipo string atende o número de caracteres definidos no atributo `min`, `max` ou ambos
```html
<input type="text" data-validity="rangechars" min="10">
<input type="text" data-validity="rangechars" max="20">
<input type="text" data-validity="rangechars" min="10" max="20">
<input type="text" data-validity="rangechars" minlength="10" maxlength="20">
```

### rangewords
Validar se o valor informado no campo do tipo string atende o número de palavras definidos no atributo `min`, `max` ou ambos
```html
<input type="text" data-validity="rangewords" min="10" max="50">
```

### required
Validar se o campo foi preenchido
```html
<input type="text" required>
<input type="text" data-validity="required">
```

### time
Validar se o valor informado é um hora válida no formato **hh:mm** ou **h:mm**
```html
<input type="text" data-validity="time">
```

### url
Validar se o valor informado no campo do tipo string é uma url válido
```html
<input type="text" data-validity="url">
```

### zip
Validar se o valor informado no campo do tipo é um número de CEP válido no formato **99999-999**
```html
<input type="text" data-validity="zip">
```

## Callbacks
Por padrão, o autoFormValidate apenas valida os campos do formulário, evitando seu submit até que todos os campos estejam preenchidos corretamente. Caso seu formulário seja enviado via **AJAX**, utilize os médotos `.done()` e `.fail()` passados como parâmetro em um objeto options.

> O parâmetro `event` deve ser fornecido em ambos os métodos para evitar o defaulEvent do formulário e ter acesso aos elementos do formulário validado

```js
<script>
  window.autoFormValidate(document.querySelector('#formId'), {
    done: (event) => {
      event.preventDefault()
      alert(**Passou na validação**) 
    }
  })
</script>

> O parâmetro `errors` deve ser fornecido ao método `.fail()` para ter acesso ao `array` de erros encontrados

```js
<script>
  window.autoFormValidate(document.querySelector('#formId'), {
    fail: (event, errors) => {
      event.preventDefault()
      alert(**Reprovou na validação**)
    }
  })
</script>

> O modelo abaixo atua com os dois modos de feedback

```js
<script>
  window.autoFormValidate(document.querySelector('#formId'), {
    done: (event) => {
      event.preventDefault()
      alert(**Passou na validação**) 
      // $.ajax() Aqui vai seu método ajax
    },
    fail: (event, errors) => {
      event.preventDefault()
      alert(**Reprovou na validação**)
      // $.modal() Aqui vai sua apresentação personalizada dos erros
    }
  })
</script>
```

## Retorno da validação
O autoFormValidate não retorna nenhum dado através de sua definição;

Para ter acesso a lista de erros, defina na tag **form** o atributo `data-debug="true"` para ver os valores impressos no seu console de desenvolvedor

> Para trabalhar com os erros encontrados, utilize o método `fail(event, errors)` do objeto de configuração autoFormValidate

```javascript
<script>
  autoFormValidate(null,{
    fail: (event, errors) {
      // Bloqueia o envio do formulário
      event.preventDefault()
      // Apresenta o lista de erros no seu console
      console.log(errors)
    }
  })
</script>
```
A variável `errors` fornecido como parâmetro à função `fail(event, errors)` é um array, onde cada index possui um objeto com duas propriedades
`errors`:  Um array de erros com respostas pré definidas
`el`: O nodeElement validado

```json
<script>
  [{
    "errors": [
      "O campo Nome é de preenchimento obrigatório"
    ],
    "el": "[object HTMLInputElement]"
  },
  {
    "errors": [
      "O campo Email é de preenchimento obrigatório",
      "O valor do campo Email não é um endereço de e-mail válido"
    ],
    "el": "[object HTMLInputElement]"
  }]
  })
</script>
```