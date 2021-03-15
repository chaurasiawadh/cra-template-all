
class ApplicationDetail {

  private static _instance: ApplicationDetail = new ApplicationDetail();
  private static userDetail: any;

  constructor() {
    if (ApplicationDetail._instance) {
      throw new Error('Use ApplicationDetail.instance');
    }
    ApplicationDetail._instance = this;
  }

  static get instance(): ApplicationDetail {
    return ApplicationDetail._instance;
  }

  getUserDetail(): any {
    return ApplicationDetail.userDetail;
  }

  getAccessToken(): string {
    // return Cookies.get('token') || '';
    return 'xxxxxxxxxxxxxxxxxx';
  }
}

export default ApplicationDetail;
