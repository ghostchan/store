/**
 * 邮箱，邮编，手机号等常用验证模块
 */

var commonValidate = {};

/**
 * 手机号验证
 * @param val
 * @returns
 */
commonValidate.isMobile = function (val) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return (myreg.test(val));
};

/**
 * 有区域前缀的手机号验证
 * @param val
 * @returns
 */
commonValidate.isMobileNew = function (val) {
    var myreg = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}$|15[0-9]\d{8}$|17[0-9]\d{8}$|18[0-9]\d{8}$/;
    return (myreg.test(val));
};

/**
 * 验证固定电话是否可用
 */
commonValidate.isTelephone = function (val) {
    var reg = /^((0\d{2,3})-?)(\d{7,8})(-?(\d{1,5}))?$/;
    return reg.test(val);
};

/**
 * 固定电话验证
 * @param val
 * @returns
 */
commonValidate.isTelNew = function (val) {
    var myreg = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
    return (myreg.test(val));
};

/**
 * 验证电话（开放数字、减号、分号、逗号，多个电话）
 */
commonValidate.checkTelphone = function (val) {
    var telreg = /^[0-9]+[0-9|;|,|\-]*$/;
    return (telreg.test(val));
};


/**
 * 邮箱验证
 * @param val
 * @returns {Boolean}
 */
commonValidate.isEmail = function (val) {
    var pass = 0;
    if (window.RegExp) {
        var tempS = "a";
        var tempReg = new RegExp(tempS);
        if (tempReg.test(tempS)) {

            pass = 1;
        }
    }
    if (!pass) {

        return (val.indexOf(".") > 2) && (val.indexOf("@") > 0);
    }
    var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
    var r2 = new RegExp("^[a-zA-Z0-9\\.\\!\\#\\$\\%\\&\\??\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\}\\~]*[a-zA-Z0-9\\!\\#\\$\\%\\&\\??\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\}\\~]\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3})(\\]?)$");
    return (!r1.test(val) && r2.test(val));
};

/**
 * 邮政编码验证
 * @param val
 * @returns
 */
commonValidate.isPostcode = function (val) {
    var myreg = /^[0-9]\d{5}$/;
    return (myreg.test(val));
};

/**
 * 是否有包含汉字
 * @param val
 * @returns true包含；false不包含
 */
commonValidate.isContainZH = function (val) {
    var myreg = /[^\x00-\xff]/g;
    return (myreg.test(val));
};

/**
 * 验证是否有非法字符
 * @param str
 * @returns "":验证通过；其他：验证失败
 *
 */
commonValidate.checkStr = function (str) {
    if (!str) {
        return "不能为空！";
    }
    var checkString = "`~!@#$%^&*()+-=[]{}\\|;':\",./<>?";
    for (var j = 0; j < checkString.length; j++) {
        if (str && str.indexOf(checkString.substring(j, j + 1)) != -1) {
            //  return "不能有非法字符:\"" + checkString.substring(j, j + 1) + "\"";
            return checkString.substring(j, j + 1);
        }
    }
    return "";
};

/**
 * 验证是否有非法字符
 * @param str
 * @returns
 */
commonValidate.checkStrA = function (str, checkString) {
    if (!str) {
        return "不能为空！";
    }
    if (!checkString) {
        checkString = "`~!@#$%^&*+=\\|'\",./<>?";
    }
    for (var j = 0; j < checkString.length; j++) {
        if (str && str.indexOf(checkString.substring(j, j + 1)) != -1) {
            //  return "不能有非法字符:\"" + checkString.substring(j, j + 1) + "\"";
            return checkString.substring(j, j + 1);
        }
    }
    return "";
};

/**
 * 验证waf特殊字符
 * @param str
 * @returns "":验证通过；其他：验证失败
 *
 */
commonValidate.checkWafStr = function (str) {

    var returnVal = null;
    if (str) {
        var checkString = "\'\\";
        for (var j = 0; j < checkString.length; j++) {
            if (str.indexOf(checkString.substring(j, j + 1)) != -1) {
                return checkString.substring(j, j + 1);
            }
        }

        if (str.indexOf("--") != -1) {
            returnVal = '--';
        }
    }

    return returnVal;
};

/**
 * 判断字符串是否包含空格
 * @param str
 */
commonValidate.isContainBlank = function (str) {
    var returnVal = "";
    var reg = /\s/;
    if (reg.exec(str)) {
        returnVal = '包含空格';
    }
    return returnVal;
};

//RegExt Test  
function regExpTest(source, re) {
    var result = false;

    if (!source)
        return false;

    if (source == re.exec(source))
        result = true;

    return result;
}

/**
 * 对输入域是否是整数的校验,即只包含字符0123456789
 * @param strValue
 * @returns
 */
commonValidate.isInteger = function (strValue) {
    return regExpTest(strValue, /\d+/);
};

//数字检查
commonValidate.isNumeric1 = function (strValue) {
    var result = regExpTest(strValue, /\d*[.]?\d*/g);
    return result;
};

/**
 * 只输入数字和字母的正则
 * @param str
 * @returns
 */
commonValidate.checkRentName = function (str) {
    var re = /^[0-9a-zA-Z]{1,16}$/;
    return re.test(str);
};

/**
 * 字符串里是否包含空格
 * @param str
 * @returns true:包含；false:不包含
 */
commonValidate.containBlank = function (str) {
    var flag = false;
    if (str) {
        for (var j = 0; j < str.length; j++) {
            if (str.substring(j, j + 1) == " ") {
                flag = true;
                break;
            }
        }
    }

    return flag;
};

/**
 * 是否是图片格式
 * @param str
 * @returns true:是；false:否
 */
commonValidate.isImage = function (str) {
    var reg = /^.+\.(gif|jpg|bmp|png)$/i;
    return reg.test(str);
};

/**
 * 输入的数据是否是日期
 * @param intYear
 * @param intMonth
 * @param intDay
 * @returns {Boolean}
 */
commonValidate.isdate = function (intYear, intMonth, intDay) {
    if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) {
        return false;
    }
    if (intMonth > 12 || intMonth < 1) {
        return false;
    }
    if (intDay < 1 || intDay > 31) {
        return false;
    }
    if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intDay > 30)) {
        return false;
    }
    if (intMonth == 2) {
        if (intDay > 29) {
            return false;
        }
        if ((((intYear % 100 == '0') && (intYear % 400 != '0')) || (intYear % 4 != '0')) && (intDay > '28')) {
            return false;
        }
    }
    return true;
};
/**
 * 身份证校验
 * @param str
 * @returns
 */
commonValidate.isIDNumber = function (str) {
    var reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
    return reg.test(str);
}

commonValidate.password = function (str) {
    var reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/;
    return reg.test(str);
}

//判断身份证号码格式函数
//公民身份号码是特征组合码，
//排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码
commonValidate.checkIDCard = function (idcard) {
    if (typeof(idcard) != "string") {
        return 1;
    }
    idcard = idcard.toUpperCase();
    var Errors = new Array("身份证号码验证通过!", "您的身份证号码不正确，请重新输入!", "您的身份证号码不正确，请重新输入!", "您的身份证号码不正确，请重新输入!", "您的身份证号码不正确，请重新输入!");
    var area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门"
    };
    var Y, JYM;
    var S, M;
    var str;
    var idcard_array = [];
    idcard_array = idcard.split("");
    if (!area[parseInt(idcard.substr(0, 2))]) {
        return 1;
    }
    switch (idcard.length) {
        case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == "0" || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == "0" && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == "0" )) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性      
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性      
            }
            if (ereg.test(idcard)) {
                return 0;
            } else {
                return 1;
            }
            break;
        case 18:
            if (parseInt(idcard.substr(6, 4)) % 4 == "0" || (parseInt(idcard.substr(6, 4)) % 100 == "0" && parseInt(idcard.substr(6, 4)) % 4 == "0" )) {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式      
            } else {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式      
            }
            if (ereg.test(idcard)) {
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1);
                if (M == idcard_array[17]) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
            break;
        default:
            return 1;
    }
};

     
