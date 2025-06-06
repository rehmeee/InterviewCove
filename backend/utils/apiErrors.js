class ApiErrors extends Error {
    constructor(statusCode,message = "something went wrong", stack, errors = []){
        super(message);
        this.stack = stack;
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false;
    }
}
export {ApiErrors}