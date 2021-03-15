// app.js
import { config } from "./config/config";
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: `${config.apiBaseUrl}wechat/index/login`,
          data: {
            code: res.code,
          },
          success: (res) => {
            wx.setStorageSync('token', res.data.data.token);
          }
        });
      }
    })
  },
  globalData: {
    userInfo: null
  }
})