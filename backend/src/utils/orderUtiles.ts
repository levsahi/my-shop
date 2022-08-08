
export const changekeysfromSongIdToProduct = (orderItems:any)=>{
    const newOrderItems = []

    for(let i = 0; i < orderItems.length; i++){
        let newWordsObject = {};
        let oldObject = orderItems[i]
        Object.keys(oldObject).forEach(key => {
            if (key === 'songId') {
              let newPair = { ['product']: oldObject['songId'] };
              newWordsObject = { ...newWordsObject, ...newPair }
            } else {
              newWordsObject = { ...newWordsObject, [key]: oldObject[key] }
            }
        });
        newOrderItems.push(newWordsObject)
    }

    return newOrderItems
}

