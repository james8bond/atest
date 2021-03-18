const promisic = function (func) {
  return function (params = {}) {
    return new Promise((resolve, reject) => {
      const args = Object.assign(params, {
        success: (res) => {
          resolve(res);
        },
        fail: (error) => {
          reject(error)
        }
      });
      func(args);
    });
  };
};

const cache = function (argc1, argc2) {
  if (argc2 == null) {
    return wx.getStorageSync(argc1)
  } else {
    wx.setStorageSync(argc1, argc2);
  }
};
export { promisic, cache }