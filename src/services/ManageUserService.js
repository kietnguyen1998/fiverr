import { baseService } from "./baseService";
export class ManageUserService  extends baseService{

    constructor() {
        super();
    }

    signIn = (userInfo) => { 
        return this.post(`/api/auth/signin`,userInfo);
    }
    
    getUserInfo = () => {
        return this.post('/api/users');
    }
  
}



export const manageUserService = new ManageUserService();
