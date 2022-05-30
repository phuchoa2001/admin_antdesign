function CheckAccount(key, value, name, list) {
    const ListNew = [...list]
    if (key) {
        const indexKey = ListNew.findIndex((user) => user.key === key);
        ListNew.splice(indexKey, 1);
    }
    const index = ListNew.findIndex((user) => user[name] === value);
    if (index === -1) {
        return Promise.resolve();
    } else {
        return Promise.reject(`${name} đã tồn tại !`);
    }
}
export default CheckAccount;