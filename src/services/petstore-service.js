export default class PetstoreService {

    _key = 'aRavLyOFWKDUbWqSfJa2YhIVg2TiXiKhvju81mIHdqedt1kBM1';
    _secret = '32C6fvdzQlWOdvKAe4v250VBsGrM5lAZRcCWflwX';
    _apiBase = 'https://api.petfinder.com/v2/';

    getResource = async (url) => {
        const token = await fetch(`${this._apiBase}oauth2/token`, {
                    method: 'POST',
                    body: 'grant_type=client_credentials&client_id=' + 
                        this._key + '&client_secret=' + this._secret,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }});

        const data = await token.json();

                    console.log(data);
        
        const res = await fetch(`${this._apiBase}${url}`, {
            headers: {
                'Authorization': data.token_type + ' ' + 
                                 data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
		}})
        

        return await res.json();
    };

    getAllAnimals = async () => {
        const res = await this.getResource('animals?status=adoptable&type=Dog&type=Cat');
        console.log(res);
        return res.results;
    }

    getAllDogs = async () => {
        const res = await this.getResource('animals?status=adoptable&type=Dog');
        console.log(res);
        return res.results;
    }

    getAllCats = async () => {
        const res = await this.getResource('animals?status=adoptable&type=Cat');
        console.log(res);
        return res.results;
    }
}

const petstore = new PetstoreService();

petstore.getAllAnimals();
petstore.getAllDogs();
petstore.getAllCats();