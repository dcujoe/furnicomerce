function catchErrors(error, displayError) {
    let errorMsg;
    if (error.response) {
        // The request was made and the server responded with a status code of
        // that is not in the range of 2XX

        errorMsg = error.response.data;
        console.log("Error response", errorMsg);
    } else if (error.request) {
        // the request was made, but no response was received

        errorMsg = error.request;
        console.log("Error request", errorMsg)
    } else {
        // something else happened in making the request that triggered an error
        errorMsg = error.message;
        console.log("Error message", errorMsg);
    }

    displayError(errorMsg)
}