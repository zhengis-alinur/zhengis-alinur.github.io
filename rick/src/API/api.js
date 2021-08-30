export const getProfile = async (userName) => await fetch(`http://173.249.20.184:7001/api/Account/GetProfile?userName=${userName}`);
export const updateProfile = async (data) => {
    const request = await fetch('http://173.249.20.184:7001/api/Account/UpdateProfile', {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        },
        body: JSON.stringify(data)
    });
    return request;
}
export const createProfile = async (data) => {
        const request = await fetch('http://173.249.20.184:7001/api/Account/Register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return request;
}
export const login = async (data) => {
    const request = await fetch('http://173.249.20.184:7001/api/Account/Login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return request;
}

export const fetchCharacters = async (page, size) => await fetch(`http://173.249.20.184:7001/api/Characters/GetAll?PageNumber=${page}&PageSize=${size}`);
export const fetchLocations = async (page, size) => await fetch(`http://173.249.20.184:7001/api/Locations/GetAll?PageNumber=${page}&PageSize=${size}`);
export const fetchEpisodes = async (page, size) => await fetch(`http://173.249.20.184:7001/api/Episodes/GetAll?PageNumber=${page}&PageSize=${size}`);
