export const checkToken = () => {
    const isToken = localStorage.getItem('token');
    if(isToken === null ){
        console.log('null');
        return false;
    } else {
        console.log('token is here')
        return true;
    }
}