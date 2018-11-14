"use strict";

var _this = void 0;

(function () {
  var autoFormValidate = function autoFormValidate(form, options) {
    // Executa as avalições informadas
    var runValidate = function runValidate(types, el) {
      var title = el.dataset.title || el.name.charAt(0).toUpperCase() + el.name.slice(1);
      var errors = []; //console.log(`- Aplicando validações no campo ${el.tagName}:${title}`)

      types.forEach(function (type) {
        switch (type) {
          case 'cellphone':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isCellphone(el.value)) errors.push("O campo ".concat(title, " n\xE3o possu\xED um n\xFAmero de celular v\xE1lido"));
            break;

          case 'checkbox':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " foi selecionado corretamente"));
            break;

          case 'color':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isHexColor(el.value)) errors.push("O campo ".concat(title, " n\xE3o possu\xED uma cor hexadecimal v\xE1lido"));
            break;

          case 'cpf':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isCpf(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um n\xFAmero de cpf v\xE1lido"));
            break;

          case 'date':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isStringDate(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 uma data v\xE1lida no formato dd/mm/yyyy"));
            break;

          case 'datetime':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 uma data-hora v\xE1lida no formato dd/mm/yyyy hh:mm"));
            break;

          case 'email':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isEmail(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um endere\xE7o de e-mail v\xE1lido"));
            break;

          case 'pdf':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isPdf(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um arquivo do tipo pdf"));
            break;

          case 'video':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isVideo(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um arquivo do tipo v\xEDdeo"));
            break;

          case 'image':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isImage(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um arquivo do tipo imagem"));
            break;

          case 'month':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 uma m\xEAs v\xE1lido no formato n\xFAmero"));
            break;

          case 'number':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isStringNumber(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um numero inteiro v\xE1lido"));
            break;

          case 'password':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 um password v\xE1lido com base no n\xFAmero de caracteres"));
            break;

          case 'phone':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isPhone(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 um n\xFAmero de telefone fixo v\xE1lido"));
            break;

          case 'radio':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 radio vou respondido"));
            break;

          case 'rangechars':
            if (Validate.isEmpty(el.value)) break;
            var minChars = el.min || el.minlength;
            var maxChars = el.max || el.maxlength;
            if (!Validate.isRangeChars(el.value, parseInt(minChars), parseInt(maxChars))) errors.push("O campo ".concat(title, " n\xE3o atende o n\xFAmero min\xEDmo ou m\xE1ximo de caracteres"));
            break;

          case 'rangewords':
            if (Validate.isEmpty(el.value)) break;
            var minWords = el.min;
            var maxWords = el.max;
            if (!Validate.isRangeWords(el.value, parseInt(minWords), parseInt(maxWords))) errors.push("O campo ".concat(title, " n\xE3o atende o n\xFAmero min\xEDmo ou m\xE1ximo de palavras"));
            break;

          case 'required':
            if (Validate.isEmpty(el.value)) errors.push("O campo ".concat(title, " n\xE3o pode estar vazio"));
            break;

          case 'rg':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 RG v\xE1lido"));
            break;

          case 'time':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isTime(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 uma hora v\xE1lido"));
            break;

          case 'url':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isUrl(el.value)) errors.push("O campo ".concat(title, " n\xE3o \xE9 uma url v\xE1lido"));
            break;

          case 'week':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " \xE9 um dia da semana v\xE1lido"));
            break;

          case 'words':
            if (Validate.isEmpty(el.value)) break;
            console.log("-- Valida se o campo ".concat(title, " atende o n\xFAmero min\xEDmo e m\xE1ximo de palavras na string"));
            break;

          case 'zip':
            if (Validate.isEmpty(el.value)) break;
            if (!Validate.isZip(el.value)) errors.push("O campo ".concat(title, " n\xE3o possu\xED um n\xFAmero de cep v\xE1lido"));
            break;

          default:
            break;
        }
      });
      return {
        el: el,
        errors: errors
      };
    }; // Caso feedback esteja ativo, apresenta as mensagens de erro com feedback color red no campo validado


    var feedback = function feedback(errors) {
      // Escuta o evento change dos campos inválidos
      var changeHandler = function changeHandler() {
        event.target.classList.remove('validity-error');
        event.target.removeEventListener('change', changeHandler);
      }; // Abre a janela para apresentação dos erros


      var dialog = function dialog(errors) {
        if (errors.length > 0) {
          var message = 'Ops! Encontramos alguns erros \n\n';
          errors.forEach(function (item) {
            message += item.errors.concat('\n');
          });
          alert(message);
        }
      }; // Mostra os erros


      dialog(errors); // Varre os inputs inválidos para aplicar a class de feedback validity-error

      errors.forEach(function (idx) {
        idx.el.classList.add('validity-error');
        idx.el.addEventListener('change', changeHandler);
      });
    }; // Insere no head da página o style necessário


    var style = function style() {
      var style = document.createElement('style');
      style.innerHTML = ".validity-error {\n          -webkit-box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);\n          -moz-box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);\n          box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);\n        }";
      document.head.append(style);
    }; // Inicia a validação do formulário


    var init = function init(event) {
      var form = event.target;
      var isFeedback = form.dataset.feedback ? true : false;
      var elements = Array.from(form.elements);
      var errors = [];
      elements.forEach(function (el) {
        var types = [];
        if (el.dataset && el.dataset.validity) types = el.dataset.validity.split(' ');
        if (el.hasAttribute('required') && types.indexOf('required') === -1) types.unshift('required');
        var result = runValidate(types, el);
        if (result.errors.length > 0) errors.push(result);
      }); // Se foram encontrados erros

      if (errors.length > 0) {
        event.preventDefault(); // Se uma função de callback erro foi definida

        if (options && options.fail && typeof options.fail === 'function') {
          options.fail.call(_this, errors);
          return;
        }

        if (isFeedback) {
          style();
          feedback(errors);
          return;
        }
      } // Se função de callback de sucesso foi definida


      if (options && options.done && typeof options.done === 'function') {
        options.done.call(_this, event);
        return;
      }
    }; // Se informado um formulário específico


    if (form) form.addEventListener('submit', init); // Se formulário não informado, aplicamos à todos os forms da página

    if (!form) {
      Array.from(document.querySelectorAll('form')).forEach(function (form) {
        if (!window.Validate) throw new Error('Lib Validate.js não foi encontrada neste documento');
        form.addEventListener('submit', init);
      });
    }
  };

  window.autoFormValidate = autoFormValidate;
})();

window.autoFormValidate(null, {
  done: function done(event) {
    event.preventDefault();
    alert('Passou na validação');
  },
  fail: function fail(event) {
    event.preventDefault();
    alert('Reprovou na validação');
  }
});