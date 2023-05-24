export class Autor {
    public id_user:number;
    public name: string;
    public surname: string;
    public email:string;
    public photo:string;
    public password:string;

    constructor(
        id_user:number, name:string, surname:string, email:string, photo:string, password:string){

        this.id_user = id_user;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.photo = photo,
        this.password = password;

    }
    
}
