import axios from 'axios';

export async function validate(userEmail,lastSignin) {
    console.log(userEmail, lastSignin)
        const validation = await
        axios.get(`http://localhost:3000/validate`, {
        params: {
            userEmail: userEmail,
            last_signin: lastSignin
        }
        });
        console.log("validation", validation)
        return await validation.data;
    }



