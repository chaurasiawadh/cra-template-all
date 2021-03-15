import { Action } from 'src/store/models/action.model';
import { updateAction } from 'src/utils/utility';
import actionTypes from 'src/store/types/exampleTypes';

export const fetchGetApiCallExample = (): Action<any> => {
  return updateAction(actionTypes.GET_API_CALL);
};

export const fetchGetApiDataExample = (payload: any): Action<any> => {
  return updateAction(actionTypes.GET_API_DATA, payload);
};

export const fetchPostApiCallExample = (requestJSON: any): Action<any> => {
  return updateAction(actionTypes.POST_API_CALL, requestJSON);
};

export const fetchPostApiDataExample = (postResponseData: any): Action<any> => {
  return updateAction(actionTypes.POST_API_DATA, postResponseData);
};

