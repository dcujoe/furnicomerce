function catchErrors(error, displayError) {
    let errorMsg;
    if (error.response) {
        // The request was made and the server responded with a status code of
        // that is not in the range of 2XX

        errorMsg = error.response.data;
        console.error("Error response", errorMsg);

        // For Cloudinary image uploads, 
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message

            
        }
    } else if (error.request) {
        // the request was made, but no response was received

        errorMsg = error.request;
        console.error("Error request", errorMsg)
    } else {
        // something else happened in making the request that triggered an error
        errorMsg = error.message;
        console.error("Error message", errorMsg);
    }

    displayError(errorMsg)
}

export default catchErrors;