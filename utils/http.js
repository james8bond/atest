import { config } from "../config/config";
import { promisic } from "./util";

class Http {
  static async request({ url, data = {}, method = 'GET' }) {
    let res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
    });
    return res.data; // res 是整个包, 包括 cookie, header, body => data, 应该把body返回, 也就是 res.data
  }
}

export { Http }