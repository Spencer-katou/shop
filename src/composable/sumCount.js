// 計算購買總數量
const totalCount = (arr = []) => {
    const total = arr.reduce((acc, item) => {
        acc += item.quantity;
        return acc;
    }, 0);

    return total;
};

export { totalCount };