import { Action, GetFakeDataList, PostFakeDataObject } from 'src/store/models/actionModel';
import { updateAction } from 'src/utils/utility';
import actionTypes from 'src/store/types/exampleTypes';

export const fetchGetApiCallExample = (): Action<GetFakeDataList> => {
  return updateAction(actionTypes.GET_API_CALL);
};

export const fetchGetApiDataExample = (payload: GetFakeDataList): Action<GetFakeDataList> => {  
  return updateAction(actionTypes.GET_API_DATA, payload);
};

export const fetchPostApiCallExample = (requestJSON: PostFakeDataObject): Action<PostFakeDataObject> => {  
  return updateAction(actionTypes.POST_API_CALL, requestJSON);
};

export const fetchPostApiDataExample = (postResponseData: PostFakeDataObject): Action<PostFakeDataObject> => {  
  return updateAction(actionTypes.POST_API_DATA, postResponseData);
};

