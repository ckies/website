import { ckies, CookieType } from '@ckies/library'

const handleEvent = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const type = event.target.getAttribute('data-cookie-type') as CookieType

    if (event.target.checked as Boolean) {
      ckies.allow(type)
    } else {
      ckies.deny(type)
    }
  }
}

const initCheckbox = (item: Element) => {
  const type = item.getAttribute('data-cookie-type') as CookieType

  if (ckies.use(type)) {
    item.setAttribute('checked', 'checked')
  } else {
    item.removeAttribute('checked')
  }

  item.addEventListener('change', handleEvent)
}

document.addEventListener('DOMContentLoaded', 
  event => document.querySelectorAll(`input[data-cookie-type]`).forEach(initCheckbox)
)
