$(document).ready(function() {
    var actitle = $(".actitle").val();
    var actsummary = $(".actsummary").val();
    var actlink = $(".actlink").val();
    var linkpage = $(".linkpage").val();
    var appId = $("#appId").val();
    var timestamp = $("#timestamp").val();
    var nonceStr = $("#nonceStr").val();
    var signature = $("#signature").val();
    wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
    });
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: actitle,
            link: linkpage,
            imgUrl: actlink,
            success: function() {},
            cancel: function() {}
        });
        wx.onMenuShareAppMessage({
            title: actitle,
            desc: actsummary,
            link: linkpage,
            imgUrl: actlink,
            type: "",
            dataUrl: "",
            success: function() {},
            cancel: function() {}
        });
        wx.onMenuShareQQ({
            title: actitle,
            desc: actsummary,
            link: linkpage,
            imgUrl: actlink,
            success: function() {},
            cancel: function() {}
        });
        wx.onMenuShareWeibo({
            title: actitle,
            desc: actsummary,
            link: linkpage,
            imgUrl: actlink,
            success: function() {},
            cancel: function() {}
        });
        wx.onMenuShareQZone({
            title: actitle,
            desc: actsummary,
            link: linkpage,
            imgUrl: actlink,
            success: function() {},
            cancel: function() {}
        })
    });
    wx.error(function(res) {});
    setShareInfo({
        title: actitle,
        summary: actsummary,
        pic: actlink,
        url: linkpage,
        WXconfig: {
            swapTitleInWX: true,
            appId: appId,
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature
        }
    });
});




