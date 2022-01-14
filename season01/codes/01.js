function checkAvailableRegisterReceiveRule(mailboxId) {
  return mailboxId === 0 || mailboxId === 1 || mailboxId === 2 || mailboxId === 4 || mailboxId === 5 ? 'available' : 'unavailable';  
}

console.log(checkAvailableRegisterReceiveRule(0));
console.log(checkAvailableRegisterReceiveRule(1));
console.log(checkAvailableRegisterReceiveRule(2));
console.log(checkAvailableRegisterReceiveRule(3));
console.log(checkAvailableRegisterReceiveRule(4));
console.log(checkAvailableRegisterReceiveRule(5));
console.log(checkAvailableRegisterReceiveRule(6));