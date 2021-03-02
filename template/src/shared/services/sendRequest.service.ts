import ApplicationDetail from './applicationDetail.service';
import store from '../../config/configureStore';

class SendRequest {
  private static _instance: SendRequest = new SendRequest();
  private appDetail: ApplicationDetail = ApplicationDetail.instance;
  countStartApi = 0;
  countEndApi = 0;

  constructor() {
    if (SendRequest._instance) {
      throw new Error('Use DataService.instance');
    }
    SendRequest._instance = this;
  }

  static get instance(): SendRequest {
    return SendRequest._instance;
  }

  async MakeAPICall(data: any) {
    let requestBody = {};

    if (data && data.isLoader !== false) {
      this.countStartApi += 1;
      // store.dispatch({ type: 'REQUEST', status: 'REQUESTED' });
    }

    if (data && data.body) {
      requestBody = data.body;
    }

    const promise = await fetch(data.url, {
      method: data.body ? 'POST' : 'GET',
      headers: new Headers({
        AccessToken: '',   //cookies.get('access_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: data.body ? JSON.stringify(requestBody) : null
    }).then(response => response.json());
    if (promise) {
      if (data && data.isLoader !== false) {
        this.countEndApi += 1;
        if (this.countStartApi === this.countEndApi) {
          // store.dispatch({ type: 'REQUEST', status: 'REQUEST_FULFILLED' });
        }
      }
    }
    return promise;
  }


}
export default SendRequest;
