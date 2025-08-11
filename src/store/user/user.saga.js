import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    console.log("Google User >>> ", user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    console.warn("Failed sign Google User in >> ", error);
    yield put(signInFailed(error));
  }
}

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    console.log("user Snapshot >> ", userSnapshot);
    console.log("user Snapshot data >>", userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log("user Auth >> ", userAuth);

    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    console.warn("eror signing in >>> ", error);
    yield put(signInFailed(error));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* userSagas() {
  yield all([call(onCheckUserSession), call(onGoogleSignInStart)]);
}
