/**
 * 计算字符串的字节长度
 */
function getStrLen(str) {
    return str.length + (/[^\x00-\x80]/g.test(str) && str.match(/[^\x00-\x80]/g).length);
}

/**
 * 按字节截取字符串，多余的以...代替
 * */
function cutStr(str, setLen) {
    var newStr = '', newStrLen = 0, i = 0, chars;
    for (; i < setLen; i += 1) {
        chars = str.charAt(i);
        newStr += chars;
        newStrLen += 1;
        if (/[^\x00-\x80]/g.test(chars)) {
            newStrLen += 1;
        }
        console.log(newStrLen);
        if (newStrLen >= setLen) {
            newStr += '…';
            return newStr;
        }

    }
}

/**
 * 特殊字符
 * @param str
 * @returns {Boolean}
 */
function isNotSpecial(str) {
    var pattern = /[`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]/im;
    if (pattern.test(str)) {
        return false;
    }
    return true;
}

//从URL取出各个参数值
function getURLParameter(name) {
    return (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1];
}

/**
 * 取得操作系统类型
 */
function getOSType() {
    var userPlatForm = navigator.platform;
    if (userPlatForm.indexOf("Win") === 0) {
        return "windows";
    } else if (userPlatForm.indexOf("Mac") === 0) {
        return "macos";
    } else if (userPlatForm === "X11" || userPlatForm.indexOf("Linux") === 0) {
        return "linux";
    } else {
        return "else";
    }
}
/**
 * 取得浏览器类型
 */
function getBrowserType() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/msie ([\d.]+)/) !== null) {
        return "ie";
    } else if (userAgent.match(/firefox\/([\d.]+)/) !== null) {
        return "firefox";
    } else if (userAgent.match(/chrome\/([\d.]+)/) !== null) {
        return "chrome";
    } else if (userAgent.match(/version\/([\d.]+)/) !== null) {
        return "safari";
    } else {
        return "else";
    }
}