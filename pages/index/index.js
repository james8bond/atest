// index.js

import { User } from "../../model/user";
import { cache } from "../../utils/util";


// 获取应用实例
const app = getApp()

Page({
  data: {
    hello: 'Hello World',
  },

  onLoad() {},

  bond() {
    let a = cache('name');
    console.log(a);
  },

  bond2() {
    cache('name', 'James');
  },

  james: async function () {
    let result = await User.init()
  },

  jj: async function () {
    let result = await User.init()
  },





})