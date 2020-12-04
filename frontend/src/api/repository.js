import axios from 'axios';

export class Repository {

    url = "http://ec2-34-213-29-182.us-west-2.compute.amazonaws.com:8000";   //put ec2 instance here

    config = {//
        headers: {
            Authorization: '*'
        }
    }


    //Account stuff    path = /account
    //POST /account on DB side
    addAccount(state){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/account`, state, this.config).then(resp => {
                if(resp.data == "L")
                {
                    return alert("Email already in use");
                }
                else {
                    resolve(resp.data);
                }
            }).catch(err => alert(err));
        });
    }
    //logging in 
    login(email, password){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, {email: email, password: password}, this.config)
            .then(response => {
                resolve(response);
                
            })
            .catch(e => {
                console.log("error");
                console.log(e);
            });
        })
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/account/${id}`)
            .then(response => {
                resolve(response);
            })
            .catch(e => {
                alert(e);
                reject();
            });
        })
    }

    //deleting account - app.delete
    deleteAccount(){
        return new Promise((resolve, reject) => {
        axios.delete(`${this.url}/account`)
        .catch(e => {
            reject();
        });
    })
}

    editListing(id, listing) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/listings/${id}`, listing, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });   
    }


    //posting a listing - used in PostListing.jsx
    postNewListing(id, listing){
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/listings/${id}`, listing, this.config)
        })
    }


    getAccountInfo(id) {
        return new Promise((resolve, reject) => {
            //axios.get(`${this.url}/account/${id}`)
            axios.get(`${this.url}/account/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        })
    }
    //might need to add params later for searching

    getListing(id) {
        return new Promise((resolve, reject) => {
            
            axios.get(`${this.url}/listings/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getListingParams(params){
        return new Promise((resolve, reject) => {
            if (params) {
                let config = this.config;
                config.params = params;
            }
            axios.get(`${this.url}/listings/`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getDistListings(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/listings/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getListings() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/listings/`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getOrders(uid) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${uid}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    postOrder(listingId, json) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/listings/${listingId}`, json, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        })
    }

    

}//end repository
