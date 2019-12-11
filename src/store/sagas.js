import { put, takeEvery } from 'redux-saga/effects'
import { GET_INTI_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import Axios from 'axios'

function* fetchUser() {
    try {
        const res = yield Axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action)
    } catch{
        console.log("访问'list.json'失败");
    }
}

function* mySaga() {
    yield takeEvery(GET_INTI_LIST, fetchUser);
}

export default mySaga;