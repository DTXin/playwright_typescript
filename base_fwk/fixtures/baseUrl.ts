export function getBaseUrl(env = process.env.ENVIRONMENT) {

    if (env === 'qa') {
        return 'https://google.com';
    } else if (env === 'dev') {
        return 'https://bing.com';
    } else {
        return "https://rahulshettyacademy.com/client/";
    }
}