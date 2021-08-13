// class MVVM {
//   constructor(el, data) {
//     this.el = document.querySelector(el)
//     this._data = data
//     this.domPool = {}

//     this.init()
//   }

//   init() {
//     this.initData()
//     this.initDom()
//   }

//   initDom() {
//     this.bindDom(this.el)
//     this.bindInput(this.el)

//     console.log(this.domPool)
//   }
//   initData() {
//     const _this = this
//     this.data = {}
//     for (let key in this._data) {
//       Object.defineProperty(this.data, key, {
//         get() {
//           return _this._data[key]
//         },
//         set(newValue) {
//           _this.domPool[key].innerHTML = newValue
//           _this._data[key] = newValue
//         }
//       })
//     }
//   }
//   bindDom(el) {
//     const childNodes = el.childNodes
//     childNodes.forEach(item => {
//       if (item.nodeType === 3) {
//         const _value = item.nodeValue

//         if (_value.trim().length) {
//           let _isValid = /\{\{(.+?)\}\}/.test(_value)
//           if (_isValid) {
//             const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
//             this.domPool[_key] = item.parentNode
//             item.parentNode.innerText = this.data[_key] || undefined
//           }

//         }
//       }
//       item.childNodes && this.bindDom(item)
//     })
//   }

//   bindInput(el) {
//     const _allInputs = el.querySelectorAll('input')

//     _allInputs.forEach(input => {
//       const _vModel = input.getAttribute('v-model')

//       if (_vModel) {
//         input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input))
//       }
//     })
//   }

//   handleInput(key, input) {
//     const _value = input.value
//     this.data[key] = _value

//   }

//   setData(key, value) {
//     this.data[key] = value
//   }
// }

class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el)
    this.data = data
    this.domPool = {}

    this.init()
  }

  init() {
    this.initData()
    this.initDom()
  }

  initDom() {
    this.bindDom(this.el)
    this.bindInput(this.el)

    console.log(this.domPool)
  }

  //data数据代理，改变时候将dompool中的对应值改变
  initData() {
    const _this = this
    this.data = new Proxy(this.data, {
      get(target, key) {
        return Reflect.get(target, key)
      },
      set(target, key, value) {
        _this.domPool[key].innerHTML = value
        return Reflect.set(target, key, value)
      }
    })
  }

  //将dom中的{{}}中的值及其对应节点取出，放入dompool，并且值与data中对应key的值绑定
  bindDom(el) {
    const childNodes = el.childNodes
    childNodes.forEach(item => {
      if (item.nodeType === 3) {
        const _value = item.nodeValue

        if (_value.trim().length) {
          let _isValid = /\{\{(.+?)\}\}/.test(_value)
          if (_isValid) {
            const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
            this.domPool[_key] = item.parentNode
            item.parentNode.innerText = this.data[_key] || undefined
          }

        }
      }
      item.childNodes && this.bindDom(item)
    })
  }

  bindInput(el) {
    const _allInputs = el.querySelectorAll('input')

    _allInputs.forEach(input => {
      const _vModel = input.getAttribute('v-model')

      if (_vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input))
      }
    })
  }

  handleInput(key, input) {
    const _value = input.value
    this.data[key] = _value

  }

  setData(key, value) {
    this.data[key] = value
  }
}

