// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded pls wait..' 
    },
    success: {
        title: 'Success',
        message: 'Data is loaded sucessfully' 
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again.' 
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data.' 
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server. pls do check network and try again later..' 
    }
}

// API service calls

export const SERVICE_URLS = {
    userSignup: { url:'/registration' , method: 'POST'},
    userLogin: { url:'/login' , method: 'POST'},
}

