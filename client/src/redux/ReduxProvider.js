import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../redux/store/ConfigureStore'
const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider