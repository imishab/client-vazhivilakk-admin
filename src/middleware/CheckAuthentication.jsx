export const checkAuthentication = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        const isAuthenticated = !!token;
        return isAuthenticated;
    }
    return false;
};