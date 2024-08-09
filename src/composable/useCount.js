// 計算總金額
const totalPrice = (arr = []) => {
    const total = arr.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
    }, 0);

    return total;
};

export { totalPrice };