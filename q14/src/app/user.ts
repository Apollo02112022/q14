export class User {

    name: string | null;
    email:string | null;
    password: string | null;
    street: string | null;
    county: string | null;
    city: string | null;

    constructor(name: string | null, email: string | null, password: string | null, street: string | null, county: string | null, city: string | null) {
      
        this.name = name;
        this.email = email;
        this.password = password;
        this.street = street;
        this.county = county;
        this.city = city;

      }

}
  