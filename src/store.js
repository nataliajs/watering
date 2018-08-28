import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from 'reducers/index'

const middleware = routerMiddleware(browserHistory)

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware, thunkMiddleware)),
)

export default store