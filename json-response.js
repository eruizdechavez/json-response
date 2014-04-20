var http = require('http'),
    res = http.ServerResponse.prototype,
    httpStatus = [
        '200:OK',
        '201:Created',
        '202:Accepted',
        '203:Non-Authoritative Information',
        '204:No Content',
        '205:Reset Content',
        '206:Partial Content',
        '400:Bad Request',
        '401:Unauthorized',
        '402:Payment Required',
        '403:Forbidden',
        '404:Not Found',
        '405:Method Not Allowed',
        '406:Not Acceptable',
        '407:Proxy Authentication Required',
        '408:Request Timeout',
        '409:Conflict',
        '410:Gone',
        '411:Length Required',
        '412:Precondition Failed',
        '413:Request Entity Too Large',
        '414:Request-URI Too Long',
        '415:Unsupported Media Type',
        '416:Requested Range Not Satisfiable',
        '417:Expectation Failed',
        '500:Internal Server Error',
        '501:Not Implemented',
        '502:Bad Gateway',
        '503:Service Unavailable',
        '504:Gateway Timeout',
        '505:HTTP Version Not Supported',
    ];

if (res.response) {
    return;
}

res.response = function response(status, data, message) {
    return {
        status: +status,
        data: data || null,
        message: message || null
    };
};


httpStatus.forEach(function(status) {
    var parts = status.split(':'),
        code = +parts[0],
        description = parts[1].replace(/[^a-z]/ig, ' '),
        i = 0,
        name = '',
        length, nameArr;

    var respond = function(data, message) {
        return this.send(this.response(code, data, message));
    };

    res[code] = respond;

    nameArr = description.split(' ');
    length = nameArr.length;

    for (; i < length; i++) {
        if (!i) {
            name += nameArr[i].toLowerCase()
        } else {
            name += nameArr[i];
        }
    }

    res[name] = respond;
});
