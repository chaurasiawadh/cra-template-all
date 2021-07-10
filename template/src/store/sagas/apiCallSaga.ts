import { takeLatest, put } from 'redux-saga/effects';
import { GET_JSON_PLACEHOLDER_URL, POST_JSON_PLACEHOLDER_URL } from 'src/shared/constants/urls';
import { fetchGetApiDataExample, fetchPostApiDataExample } from '../actions/exampleAction';
import FetchSendRequest from 'src/shared/services/fetchSendRequestService';
import actionTypes from '../types/exampleTypes';

const sendRequest = FetchSendRequest.instance;

function* getAPICallSagaExample(): any {
  const response: any = yield sendRequest.MakeAPICall({ url: GET_JSON_PLACEHOLDER_URL });
  if (response) {    
    yield put(fetchGetApiDataExample(response));
  }
}

function* postAPICallSagaExample({ payload }: any): Generator {

  try {
    const response: any = yield sendRequest.MakeAPICall({ url: POST_JSON_PLACEHOLDER_URL, body: payload });
    if (response) {
      yield put(fetchPostApiDataExample(response));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* watchApiCallSagaExample(): any {
  yield takeLatest(actionTypes.GET_API_CALL, getAPICallSagaExample)
  yield takeLatest(actionTypes.POST_API_CALL, postAPICallSagaExample);
}

export default watchApiCallSagaExample;
