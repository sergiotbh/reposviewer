import { callGetWs } from "./WebServiceCalls";
import { baseUrl } from "../Utils/globals";

export const getUserRepositories = (username) => new Promise((resolve, reject) => {

    let requestUrl = baseUrl+'users/'+username+'/repos'

    callGetWs(requestUrl).then((response) => {
        resolve(response)
    }).catch(e => {
        reject(e)
    })

    
})

export const getReadMe = (username, repo) => new Promise((resolve, reject) => {

    let requestUrl = baseUrl+'repos/'+username+'/'+repo+'/readme'

    callGetWs(requestUrl).then((response) => {
        resolve(response)
    })
})