// 时间装换格式
Date.prototype.format = function (format) {
    let o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'H+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'f+': this.getMilliseconds() // 毫秒
    };

    if (/(y+)/.test(format)) {
        // 若是有yyyy, 就把y+替换为【this.getFullYear() + ''】
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    // 除了年份外的其他时间格式
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            // RegExp.$1  MM dd
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1 ? (o[k]) : ('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return format;
}

// console.log(new Date().format('MM/dd/yyyy 第q季度 HH:mm:ss.f'));