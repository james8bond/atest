import { Http } from "../utils/http";

class User
{
  static code = '';
  static async login() {
    return await Http.request({
      url: 'wechat/index/login',
      data: {
        code: User.code,
      }
    })
  }

  static async init() {
    return await Http.request({
      url: 'wechat/index/init',
      data: {}
    })
  }

}

export { User };