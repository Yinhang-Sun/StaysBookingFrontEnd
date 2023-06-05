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
        if(response.status != 200) {
            throw Error("Fail to log in");
        }

        return response.json();
    });
};

