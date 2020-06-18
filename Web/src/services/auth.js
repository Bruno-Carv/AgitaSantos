export const isAuthenticated = () => sessionStorage.getItem('userId') !== null;
export const getToken = () => sessionStorage.getItem('userId');

export const setUser = data => {
    const info = JSON.stringify(data);
    sessionStorage.setItem('userData', info);
}

export const getUser = () => {
    const info = sessionStorage.getItem('userData');
    return JSON.parse(info);
}

export const login = token => { 
    const info = JSON.stringify(token); 
    sessionStorage.setItem('userId', info); 
}

export const logout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userData');
};