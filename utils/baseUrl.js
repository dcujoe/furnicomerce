const baseUrl = 
    process.env.NODE_ENV === "production" 
    ? 'https://deployment-url.now'
    : 'http://localhost:3000' 


export default baseUrl;