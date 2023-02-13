import { takeLatest } from "redux-saga/effects";
import { loginSuccessAction } from "./auth";

export function* abcSaga() {
    yield takeLatest(loginSuccessAction, function*() {
        console.log('abc Saga loginSuccessAction')
    })
}