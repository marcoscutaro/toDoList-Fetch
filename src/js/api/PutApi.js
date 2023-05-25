const marcoUrl = "https://assets.breatheco.de/apis/fake/todos/user/marco";


const PutApi = () => async (data) =>  {
    try {
        const putApiFetch = await fetch (marcoUrl, {
            method: "PUT",
            body:  JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
        })

        return putApiFetch;
    }

    catch (error){
        console.log(error.message)
    }
}

export default PutApi;