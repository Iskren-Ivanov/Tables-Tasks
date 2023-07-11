// short random string for ids - not guaranteed to be unique
const randomId = (value: string) => {
    return value + '-' + Date.now().toString(36) + Math.random().toString(36);
}
export default randomId;