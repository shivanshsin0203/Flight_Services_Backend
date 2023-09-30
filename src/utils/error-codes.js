const ClientErrors=Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORUSED:401,
    NOT_FOUND:404
});
const ServerErrorCode=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,
});
const SuccessCodes=Object.freeze({
    OK:200,
    CREATED:201
});
module.exports={
    ClientErrors,ServerErrorCode,SuccessCodes
}