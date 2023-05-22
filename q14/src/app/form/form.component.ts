import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  action: boolean = false;

  newUser: User | undefined;

  name = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  street = new FormControl("");
  county = new FormControl("");
  city = new FormControl("")

  submit() {

    this.action = true;

    console.log(this.newUser = new User(this.name.value, this.email.value, this.password.value, this.street.value, this.county.value, this.city.value ));
    
  }

}
