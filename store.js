import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {
  stationWithEvaId:{}, 
  

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
 
    case 'LATITUDE':
      return {
        ...state,
        stationWithEvaId: initialState.location.latitude,
      }
    case 'LONGITUDE':
      return {
        ...state,
        stationWithEvaId: initialState.location.longitude,
      }
    case 'STATIONNUMBER':
      return {
        ...state,
        stationWithEvaId: initialState.stationNumber,
      }
    case 'URL':
      return {
        ...state,
        stationWithEvaId: initialState.picture.url,
      }
  



    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)


  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
   
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
