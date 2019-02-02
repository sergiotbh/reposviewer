
export const callGetWs = async(requestUrl) => {
    response = await fetch(requestUrl, {
        timeout: 30 * 1000,
        method: 'GET',
        dataType: 'json',
    })

    response = response.json()

    return response
}