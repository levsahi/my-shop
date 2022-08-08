"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changekeysfromSongIdToProduct = void 0;
const changekeysfromSongIdToProduct = (orderItems) => {
    const newOrderItems = [];
    for (let i = 0; i < orderItems.length; i++) {
        let newWordsObject = {};
        let oldObject = orderItems[i];
        Object.keys(oldObject).forEach(key => {
            if (key === 'songId') {
                let newPair = { ['product']: oldObject['songId'] };
                newWordsObject = { ...newWordsObject, ...newPair };
            }
            else {
                newWordsObject = { ...newWordsObject, [key]: oldObject[key] };
            }
        });
        newOrderItems.push(newWordsObject);
    }
    return newOrderItems;
};
exports.changekeysfromSongIdToProduct = changekeysfromSongIdToProduct;
