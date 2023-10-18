// 这个文件是将post发送的数据处理为application/x-www-form-urlencoded
const handledatas = (obj) => {
    const arr = [];
    for (let key in obj) {
        arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    }
    return arr.join('&');
}

export default handledatas;