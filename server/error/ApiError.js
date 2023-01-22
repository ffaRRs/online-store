class ApiError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    };

    static unAuthorizedError() {
        return new ApiError(401, "Пользователь не авторизован!");
    };

    static forbidden(message) {
        return new ApiError(403, message);
    };

    static badRequest(message) {
        return new ApiError(404, message);
    };

    static internal(message) {
        return new ApiError(500, message);
    }; 
};

module.exports = ApiError;