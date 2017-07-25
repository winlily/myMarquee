(function($) {
    $.fn.extend({
        myMarquee: function(option) {
            var _this = this;
            //默认参数
            var defaultSetting = {
                height: "",
                time: 2000,
                movetime: 1000
            }
            var setting = $.extend(defaultSetting, option);

            //向左滑动动画
            function AutoScroll() {
                _this.children("li:first").animate({ "margin-left": -setting.height }, setting.movetime, function() {
                    $(this).css("margin-left", 0).appendTo(_this);
                })
            }
            //自动间隔时间向左滑动
            var setAutoScroll = setInterval(AutoScroll, setting.time);

            //悬停时停止滑动，离开时继续执行
            _this.children("li").hover(function() {
                clearInterval(setAutoScroll); //清除自动滑动动画
            }, function() {
                setAutoScroll = setInterval(AutoScroll, setting.time); //继续执行动画
            })
        }
    })
})(jQuery)
