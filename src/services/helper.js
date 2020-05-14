const checkAuth = {
    userID: void (0),

    authorise: async function () {
        const token = window.localStorage.getItem("access_token");
        // console.log(!token)
        if (!token) {
            return false;
        }
        try {
            const verifyToken = await fetch('https://limitless-beach-12582.herokuapp.com/api/verify', {
                method: 'get',
                headers: { 'auth-token': token }
            })
            if (verifyToken.status === 200) {
                const response = await verifyToken.json();
                if (Date.now() < response.exp) {
                    this.userID = response.id;
                    return true;
                }
            }
        }
        catch (err) {
            console.log(err, 'fetch error');
            return false;
        }
        return false;
    }
}

export default checkAuth;