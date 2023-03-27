const getQueryParams = () => {
    const search = window.location.search;
    const params = {};
    const keyValueArray = search.substring(1).split('&');
    keyValueArray.map((value, index, array) => {
        const key = value.split('=')[0];
        const val = value.split('=')[1];
        params[key] = val;
    });
    return params;
};
export default getQueryParams