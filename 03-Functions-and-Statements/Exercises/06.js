function passwordValidator(password) {
    let lengthValidator = true;
    let onlyDigitsAndLetters = /^[A-Za-z0-9]+$/.test(password);
    let mustHaveAtLeats2Digits = true;

    const digits = password.match(/[0-9]/g);

    if (password.length < 6 || password.length > 10) {
        lengthValidator = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!onlyDigitsAndLetters) {
        console.log("Password must consist only of letters and digits");

    };

    if (!digits || digits.length < 2) {
        mustHaveAtLeats2Digits = false;
        console.log("Password must have at least 2 digits");
    }

    if (lengthValidator && onlyDigitsAndLetters && mustHaveAtLeats2Digits) {
        console.log("Password is valid");
        
    }
}


passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
