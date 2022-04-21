export const isArray = array => {
    if(typeof array === 'object' && array.length > 0)return true
    return false
}