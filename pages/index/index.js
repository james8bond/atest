// index.js

import { User } from "../../model/user";
import { cache } from "../../utils/util";


// 获取应用实例
const app = getApp()

Page({
  data: {
    hello: 'Hello World',
    modalHidden: true,
  },

  onLoad() {},

  bond() {
    wx.showModal({
      title: 'Hello',
    })
  },






})