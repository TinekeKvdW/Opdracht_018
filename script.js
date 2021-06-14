const checkOfHijAchttienIs = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};
// console.log(checkOfHijAchttienIs(17));

const checkOfHijVolwassenIs = function (age) {
    const hijIsAchtien = checkOfHijAchttienIs(age);
    if (age >= 18) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};
console.log(checkOfHijVolwassenIs(19));






/*  if (age >= 18) {
    return "Hello there";
} else {
    return "Hey kiddo";
}
};
console.log(checkOfHijVolwassenIs(17));*/
