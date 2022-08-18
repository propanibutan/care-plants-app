import validator from "validator";

//function which make validation magic
export function signValidation(values) {
    const errorMessages = {};

    if (validator.isEmail(values.email) === false) {
        errorMessages.email = "It's not e-mail.";
    }

    if (values.password.length <= 7) {
        errorMessages.password = "Must be longer than 7 characters.";
    }
    
    if (validator.isAlphanumeric(values.password)) {
        errorMessages.password = "Must contains at least one special character and letters or numbers.";
    }

    return Object.keys(errorMessages).length > 0
    ? errorMessages
    : null;
}