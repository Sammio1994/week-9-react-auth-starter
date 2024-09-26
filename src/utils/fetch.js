export const signupFetch = async (username, email, password) => {
    
    try {
        const response = await fetch("http://localhost:5001/users/signup", {
            method: "POST", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email, 
                password: password,
                        }),
        });

        const data = await response.json()
        console.log("data in signupFetch:", data);

        return data; 

    } catch (error) {
        console.log(error);
        alert("Error. PLEASE cheack console.");
    }
};

export const loginFetch = async (username, password) => {
    try {
        const response = await fetch("http://localhost:5001/users/logingup", {
            method: "GET", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username, 
                password: password,
                        }),
        });

        const data = await response.json()
        console.log("data in loginFetch:", data);

        return data; 

     } catch (error) { 
        console.log(error);
        alert("error, check console.");
        }
    }
