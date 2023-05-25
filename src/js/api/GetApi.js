const marcoUrl = "https://assets.breatheco.de/apis/fake/todos/user/marco";

const GetApi = async () => {
    try {
        const response = await fetch(marcoUrl);
        if(!response.ok){
            throw new Error (`Error. Status error is ${response.status}`)
        };

        const fetchResult = await response.json();
        return fetchResult;
    }

    catch(error) {
        console.log(error.message);
    }
}

export default GetApi;