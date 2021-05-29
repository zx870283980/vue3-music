import { createApp } from 'vue'
import Loading from './loading'
import { addClass, removeClass } from '../../../assets/js/dom'
const relativeCls = 'g-relative'
const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    console.log(binding)
    console.log(el)
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append (el) {
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
   el.appendChild(el.instance.$el)
}

function remove(el) {
  console.log(el.instance)
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}
export default loadingDirective
