const deepcopy = (obj) => {
        return JSON.parse(JSON.stringify(obj))
    }
export default deepcopy;