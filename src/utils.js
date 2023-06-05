// Communication with back end 
const domain = "http://localhost:8080";

export const login = (credential, asHost) => {
    const loginUrl = `${domain}/authenticate/${asHost ? "host" : "guest"}`;
    return fetch(loginUrl, {
        method: "P0ST", 
        headers: {
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(credential),
    }).then((response) => {
        if(response.status !== 200) {
            throw Error("Fail to log in");
        }

        return response.json();
    });
};

export const register = (credential, asHost) => {
    const registerUrl = `${domain}/register/${asHost ? "host" : "guest"}`;
    return fetch(registerUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(credential), 
    }).then((response) => {
        if(response.status !== 200) {
            throw Error("Fail to register");
        }
    });
};

export const getReservations = () => {
    const authToken = localStorage.getItem("authToken");
    const listReservationsUrl = `${domain}/reservations`;

    return fetch(listReservationsUrl, {
        headers: {
            Authorization: `Bearer ${authToken}`, 
        }, 
    }).then((response) => {
        if(response.status !== 200) {
            throw Error("Fail to get reservation list");
        }

        return response.json();
    });
};

export const getStaysByHost = () => {
    const authToken = localStorage.getItem("authToken");
    const listStaysUrl = `${domain}/stays/`;

    return fetch(listStaysUrl, {
        headers: {
            Authorization: `Bearer ${authToken}`, 
        }, 
    }).then((response) => {
        if(response.status !== 200) {
            throw Error("Fail to get stay list");
        }

        return response.json();
    });
}; 

