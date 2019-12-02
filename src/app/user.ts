export class User{
    username : string;
    password : string;
    displayName : string;
    age : number;
    gender : string;
    birthday : Date;
    profileImage : string;
    constructor(pUsername?: string, pPassword?: string, pDisplayName?: string, pAge?: number,pGender?: string,pBDate?: Date, pProfileImg?: string){
        this.username = pUsername;
        this.password = pPassword;
        this.displayName = pDisplayName;
        this.age = pAge;
        this.gender = pGender;
        this.birthday = pBDate;
        this.profileImage = pProfileImg;
    }
}