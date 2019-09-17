exports.handler = function (event, context, callback) {
    console.log(event);
    //let variable = 3;
    console.log(variable);
    callback(null, {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {
            "headerName": "headerValue"
        },
        "body": "this is the body"
    });
}