const pre = (dataArray) => {
    const newArray = []
    dataArray.map(string=>newArray.push({option:string,votes:0}))
    return newArray
}

module.exports = pre;
