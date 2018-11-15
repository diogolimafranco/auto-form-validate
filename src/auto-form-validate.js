(() => {
  const autoFormValidate = (form, options) => {

    // Executa as avalições informadas
    const runValidate = (types, el) => {
      const title = el.dataset.title || el.name.charAt(0).toUpperCase() + el.name.slice(1);
      let errors = []
      //console.log(`- Aplicando validações no campo ${el.tagName}:${title}`)
      types.forEach(type => {
        switch (type) {
          case 'cellphone':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isCellphone(el.value))
              errors.push(`O campo ${title} não possuí um número de celular válido`)
            break
          case 'checkbox':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} foi selecionado corretamente`)
            break
          case 'color':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isHexColor(el.value))
              errors.push(`O campo ${title} não possuí uma cor hexadecimal válido`)
            break
          case 'cpf':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isCpf(el.value))
              errors.push(`O campo ${title} não é um número de cpf válido`)
            break
          case 'date':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isStringDate(el.value))
              errors.push(`O campo ${title} não é uma data válida no formato dd/mm/yyyy`)
            break
          case 'datetime':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é uma data-hora válida no formato dd/mm/yyyy hh:mm`)
            break
          case 'email':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isEmail(el.value))
              errors.push(`O campo ${title} não é um endereço de e-mail válido`)
            break
          case 'pdf':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isPdf(el.value))
              errors.push(`O campo ${title} não é um arquivo do tipo pdf`)
            break
          case 'video':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isVideo(el.value))
              errors.push(`O campo ${title} não é um arquivo do tipo vídeo`)
            break
          case 'image':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isImage(el.value))
              errors.push(`O campo ${title} não é um arquivo do tipo imagem`)
            break
          case 'month':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é uma mês válido no formato número`)
            break
          case 'number':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isStringNumber(el.value))
              errors.push(`O campo ${title} não é um numero inteiro válido`)
            break
          case 'password':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é um password válido com base no número de caracteres`)
            break
          case 'phone':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isPhone(el.value))
              errors.push(`O campo ${title} não é um número de telefone fixo válido`)
            break
          case 'radio':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é radio vou respondido`)
            break
          case 'rangechars':
            if (Validate.isEmpty(el.value))
              break
            let minChars = el.min || el.minlength
            let maxChars = el.max || el.maxlength
            if (!Validate.isRangeChars(el.value, parseInt(minChars), parseInt(maxChars)))
              errors.push(`O campo ${title} não atende o número minímo ou máximo de caracteres`)
              break
          case 'rangewords':
            if (Validate.isEmpty(el.value))
              break
            let minWords = el.min
            let maxWords = el.max
            if (!Validate.isRangeWords(el.value, parseInt(minWords), parseInt(maxWords)))
              errors.push(`O campo ${title} não atende o número minímo ou máximo de palavras`)
              break
          case 'required':
            if (Validate.isEmpty(el.value))
              errors.push(`O campo ${title} não pode estar vazio`)
            break
          case 'rg':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é RG válido`)
            break
          case 'time':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isTime(el.value))
              errors.push(`O campo ${title} não é uma hora válido`)
            break
          case 'url':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isUrl(el.value))
              errors.push(`O campo ${title} não é uma url válido`)
            break
          case 'week':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} é um dia da semana válido`)
            break
          case 'words':
            if (Validate.isEmpty(el.value))
              break
            console.log(`-- Valida se o campo ${title} atende o número minímo e máximo de palavras na string`)
            break
          case 'zip':
            if (Validate.isEmpty(el.value))
              break
            if(!Validate.isZip(el.value))
              errors.push(`O campo ${title} não possuí um número de cep válido`)
            break
          default:
            break
        }
      })
      return {
        el: el,
        errors: errors
      }
    }

    const alertModal = errors => {

      // Abre a janela para apresentação dos erros
      const dialog = errors => {
        if (errors.length > 0){
          let message = 'Ops! Encontramos alguns erros \n\n'
          errors.forEach(item => {
            message += item.errors.concat('\n')
          })
          alert(message)
        }
      }
      // Mostra os erros
      dialog(errors)
    }

    // Caso feedback esteja ativo, apresenta as mensagens de erro com feedback color red no campo validado
    const feedback = errors => {
      // Escuta o evento change dos campos inválidos
      const changeHandler = () => {
        event.target.classList.remove('validity-error')
        event.target.removeEventListener('change',changeHandler)
      }
      // Varre os inputs inválidos para aplicar a class de feedback validity-error
      errors.forEach(idx => {
        idx.el.classList.add('validity-error')
        idx.el.addEventListener('change', changeHandler)
      })
    }

    // Insere no head da página o style necessário
    const style = () => {
      let style = document.createElement('style')
      style.innerHTML = `.validity-error {
          -webkit-box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);
          -moz-box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);
          box-shadow: 0px 0px 5px 1px rgba(255,5,5,1);
        }`
      document.head.append(style)
    }

    // Inicia a validação do formulário
    const init = event => {
      const form = event.target
      const isFeedback = form.dataset.feedback ? true : false
      const isAlert = form.dataset.alert ? true : false
      const isDebug = form.dataset.debug ? true : false
      const elements = Array.from(form.elements)
      const errors = []
      elements.forEach(el => {
        let types = []
        if (el.dataset && el.dataset.validity)
          types = el.dataset.validity.split(' ')

        if (el.hasAttribute('required') && types.indexOf('required') === -1)
          types.unshift('required')

        let result = runValidate(types, el)
        if (result.errors.length > 0)
          errors.push(result)
      })

      // Se foram encontrados erros
      if (errors.length > 0) {
        event.preventDefault()

        if (isDebug)
          console.log(errors)

        // Se uma função de callback erro foi definida
        if (options && options.fail && typeof options.fail === 'function') {
          options.fail.call(this, event, errors)
          return
        }

        if (isAlert)
          alertModal(errors)

        if (isFeedback) {
          style()
          feedback(errors)
          return
        }
      }

      // Se função de callback de sucesso foi definida
      if (options && options.done && typeof options.done === 'function') {
        options.done.call(this, event)
        return
      }
    }

    // Se informado um formulário específico
    if (form) 
      form.addEventListener('submit', init)

    // Se formulário não informado, aplicamos à todos os forms da página
    if (!form) {
      Array.from(document.querySelectorAll('form')).forEach(form => {
      if(!window.Validate)
          throw new Error('Lib Validate.js não foi encontrada neste documento')
        form.addEventListener('submit', init)
      })
    }
  }
  window.autoFormValidate = autoFormValidate
})()
window.autoFormValidate()
// window.autoFormValidate(null, {
//   done: (event, errors) => {
//     event.preventDefault()
//     alert('Passou na validação') 
//   },
//   fail: event => {
//     event.preventDefault()
//     alert('Reprovou na validação')
//   }
// })