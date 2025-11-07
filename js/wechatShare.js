// 没有后端，页面加载时获取签名
function initWx(title, discription, icons) {
    // 当前URL（不含#）
    var url = location.href.split('#')[0];
    var script = document.createElement('script');
    script.src = 'https://fidelics.cn/wechatSignature.php?url=' + encodeURIComponent(url) + '&callback=wxCallback'; // 你的后端API
    document.head.appendChild(script);

    // 回调函数
    window.wxCallback = function (res) {
        wx.config({
            debug: false, // 生产环境false
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 需要使用的接口
        });

        wx.ready(function () {
            // alert('JS-SDK初始化成功');
            // 分享到朋友（聊天）
            wx.updateAppMessageShareData({
                title: title,
                desc: discription,
                link: location.href,
                imgUrl: icons,
                // success: function () {
                //     alert('感谢您的分享！');
                // },
                // cancel: function () {
                //     alert('分享取消。');
                // }
            });

            // 分享到朋友圈
            wx.updateTimelineShareData({
                title: title,
                link: location.href,
                imgUrl: icons,
                // success: function () {
                //     alert('感谢您的分享！');
                // },
                // cancel: function () {
                //     alert('分享取消。');
                // }
            });
        });

        wx.error(function (err) {
            alert('初始化失败:' + err);
        });
    };
}

