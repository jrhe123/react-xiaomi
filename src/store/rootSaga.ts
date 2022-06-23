import { all, fork } from 'redux-saga/effects'

import { postsWatcherSaga } from 'features/posts/store/posts.sagas'

export function* rootSaga() {
  // list of saga
  yield all([fork(postsWatcherSaga)])
}

export default rootSaga
