import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'
import logger from 'redux-logger'

import { Env } from 'config/Env'
// list of reducers
import postsReducer from 'features/posts/store/posts.slice'
// saga
import { rootSaga } from 'store/rootSaga'

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: Env.isDev(),
  savePreviousLocations: 1,
})

const makeStore = () => {
  //
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, routerMiddleware]
  if (!Env.isProd) middlewares.push(logger)
  //
  const store = configureStore({
    reducer: {
      posts: postsReducer,
      router: routerReducer,
    },
    devTools: Env.isDev(),
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(middlewares),
  })
  sagaMiddleware.run(rootSaga)
  return store
}

// store & history
export const store = makeStore()
export const history = createReduxHistory(store)

// types
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
