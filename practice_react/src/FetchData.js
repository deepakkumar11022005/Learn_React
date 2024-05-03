
const FetchData = async (API_URL, methodObj, errMsg) => {

    try {
        const response = await fetch(API_URL, methodObj)
        if (!response.ok) throw Error("Error")
    }
    catch (err) {
        errMsg = err.Message;
    }
    finally {
        return errMsg;
    }
}

export default FetchData