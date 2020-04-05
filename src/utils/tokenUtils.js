import jwt from 'jsonwebtoken';

export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// 设置cookie   
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    // d.setTime(d.getTime() + 5000);
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// 清除cookie 
export function clearCookie(name) {
    console.log('clear cookie');
    setCookie(name, "", -1);
}

export function tokenVertify(token) {
    let flag = jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            throw err;
        } else {
            console.log('解码token', decoded);
        }
    });

    return flag ? true : false;

}