export default function KimaiRequest(apiPath) {
    return fetch("https://kimai.teichman.me/api/"+apiPath,
        {
            headers: {
                "X-AUTH-USER": "kimaiapi@teichman.me",
                "X-AUTH-TOKEN": "SeniorProject"
            }
        }
    ).then((resp) => {
        return resp.json().then((json) => {
            return new Promise((resolve) => {
                resolve([json, resp.headers])
            })
        })
    })
}