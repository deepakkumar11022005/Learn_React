
const FetchData = async (API_URL, setError,setIsLoading) => {

    try {

        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not Recieved")
            const data = await response.json();
        console.log(data)
        return data
                        
    }
    catch (err) {
         setError(err.Message);
    }
    finally{
        setIsLoading(false)
    }
     
}

export default FetchData