function CheckAccount(value, name, list) {
    const index = list.findIndex((user) => user[name] === value);
    if(index === -1) {
        return Promise.resolve();
    }else{
        return Promise.reject(`${name} đã tồn tại !`);
    }
}
export default CheckAccount;