export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log('load state from local storage error', err)
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('save state to local storage error', err)
  }
}
