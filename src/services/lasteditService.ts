
import http from '../api/APISettings.js'

const lasteditService = {
    loadLastEdit,
    loadBrands,
    loadRegions,
    loadDistricts,
    loadStores
}
export async function loadLastEdit() {
    const response={
        data:[
            {
                "AREALIST": "Main",
                "CHANGEDDATA": "primary phone",
                "CHANGETYPE": "Edited contact",
                "CHANGEUSERID": "12344",
                "CONTACTNAME": "Test",
                "GLOBALID": "1233",
                "LASTUPDATEDATE": "2023-10-30T05:19:59.0Z",
                "STORENUM": "123",
                "USERID": "1233"
            },{
                "AREALIST": "Main",
                "CHANGEDDATA": "primary phone",
                "CHANGETYPE": "Edited contact",
                "CHANGEUSERID": "12344",
                "CONTACTNAME": "Test",
                "GLOBALID": "1233",
                "LASTUPDATEDATE": "2023-10-30T05:19:59.0Z",
                "STORENUM": "123",
                "USERID": "1233"
            },{
                "AREALIST": "Main",
                "CHANGEDDATA": "primary phone",
                "CHANGETYPE": "Edited contact",
                "CHANGEUSERID": "12344",
                "CONTACTNAME": "Test",
                "GLOBALID": "1233",
                "LASTUPDATEDATE": "2023-10-30T05:19:59.0Z",
                "STORENUM": "123",
                "USERID": "1233"
            },{
                "AREALIST": "Main",
                "CHANGEDDATA": "primary phone",
                "CHANGETYPE": "Edited contact",
                "CHANGEUSERID": "12344",
                "CONTACTNAME": "Test",
                "GLOBALID": "1233",
                "LASTUPDATEDATE": "2023-10-30T05:19:59.0Z",
                "STORENUM": "123",
                "USERID": "1233"
            },{
                "AREALIST": "Main",
                "CHANGEDDATA": "primary phone",
                "CHANGETYPE": "Edited contact",
                "CHANGEUSERID": "12344",
                "CONTACTNAME": "Test",
                "GLOBALID": "1233",
                "LASTUPDATEDATE": "2023-10-30T05:19:59.0Z",
                "STORENUM": "123",
                "USERID": "1233"
            },
          
        ]
    }
    return response;
}


export async function loadBrands() {
     const response={
        data:[
            
        ]}
     return response;
}
export async function loadRegions() {
     const response={
        data:[
           
        ]}
     return response;
}
export async function loadDistricts() {
     const response={
        data:[
           
        ]
    }
     return response;
}
export async function loadStores() {
     const response={
        data:[
            
        ]
    }
     return response;
}

export default lasteditService;
