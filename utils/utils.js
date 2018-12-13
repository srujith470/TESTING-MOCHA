
module.exports.add = (a,b) => {
    return a + b ;
};


module.exports.Square = (a) => {
    return a*a ;
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split('');
    user.firstname = names[0];
    user.lastname = names[1]
    return user; 
};

module.exports.asyncAdd = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, );
};

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x*x)
    }, 1000);
};