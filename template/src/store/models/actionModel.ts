export interface Action<T> {
  type: string;
  payload?: T;
}

export interface GetFakeDataList {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface PostFakeDataObject {
body: string,
id?: number,
title: string,
userId: number
}

export interface FakeDataModal {
  fakeDataList: GetFakeDataList[];
  postResponseData: PostFakeDataObject;
}
