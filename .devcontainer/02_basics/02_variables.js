const accountId = 144553
let accountEmail = "suryakanta@google.com"
var accountPassword = "12345"
 accountCity = "Bhanjanagar"

// accountId = 2

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Berhampur"
let accountState;

console.log(accountId);



/*
prefer not to use var
becausae of issue in blo0ck scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])
