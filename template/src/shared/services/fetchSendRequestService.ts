import { RequestApi } from "../models/apiModels";

class FetchSendRequest {
  private static _instance: FetchSendRequest = new FetchSendRequest();
  // private appDetail: ApplicationDetail = ApplicationDetail.instance;
  countStartApi = 0;
  countEndApi = 0;

  constructor() {
    if (FetchSendRequest._instance) {
      throw new Error('Use DataService.instance');
    }
    FetchSendRequest._instance = this;
  }

  static get instance(): FetchSendRequest {
    return FetchSendRequest._instance;
  }

  async MakeAPICall(requestJSON: RequestApi) {
    let requestBody = {};

    if (requestJSON && requestJSON.isLoader !== false) {
      this.countStartApi += 1;
      // store.dispatch({ type: 'REQUEST', status: 'REQUESTED' });
    }

    if (requestJSON && requestJSON.body) {
      requestBody = requestJSON.body;
    }

    const promise = await fetch(requestJSON.url, {
      method: requestJSON.method ? requestJSON.method : requestJSON.body ? 'POST' : 'GET',
      headers: new Headers({
        AccessToken: '',   //cookies.get('access_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: requestJSON.body ? JSON.stringify(requestBody) : null
    }).then(response => response.json());
    if (promise) {
      if (requestJSON && requestJSON.isLoader !== false) {
        this.countEndApi += 1;
        if (this.countStartApi === this.countEndApi) {
          // store.dispatch({ type: 'REQUEST', status: 'REQUEST_FULFILLED' });
        }
      }
    }
    return promise;
  }
}
export default FetchSendRequest;
