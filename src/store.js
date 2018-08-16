const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)