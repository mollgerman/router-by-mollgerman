import { EVENT } from './consts'

export function navigate (href) {
  // change url
  window.history.pushState({}, '', href)
  // create event
  const navigationEvent = new Event(EVENT.PUSHSTATE)
  // dispatch event
  window.dispatchEvent(navigationEvent)
}

const styles = {
  'padding-right': '1rem'
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} style={styles} href={to} target={target} {...props} />
}
