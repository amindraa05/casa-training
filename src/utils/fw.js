const fw = async ( {url, endpoint, method, body, headers } ) => {

    const NETWORK_ERROR = "Please try again later"
    let resRaw

    try {
        resRaw = await fetch (`${url}${endpoint}`, {
            method,
            body,
            headers,
        })
        if (resRaw.ok) {
            return await resRaw.json() // Returns a promise, so we need to await it.  Also, json() turns a buffer into a string.  This is
        }

        if (resRaw.status === 401) {
            return {
                data: null,
                unAuthorized: true,
                message: "Unauthorized"
            }
        }

        const restTxt = await resRaw.text() // Returns a promise, so we need to await it.  Also, text() turns a buffer into a string.
        const errObj = JSON.parse(restTxt)

        if (errObj) {
            return {
                data: null,
                unAuthorized: false,
                message: resObj.message
            }
        }
    } catch (error) {
        console.log(error)
        return {
            data: null,
            unAuthorized: false,
            message: NETWORK_ERROR,
        }
    }
}

export { fw };