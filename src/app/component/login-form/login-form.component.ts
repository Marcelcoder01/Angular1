import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public miFormulario: FormGroup;


    constructor(){}

    ngOnInit() {
      this.miFormulario = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, this.passwordValidator]),
      });
      console.log(this.miFormulario.get('password'))
    }
  
    passwordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.value;
      // Check if all conditions are met.
      const valid = /\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password);
      // Return null if valid and a validation object if not valid.
      return valid ? null : { invalidPassword: true };
    }
    
  
    onSubmit() {
      console.log('Email:', this.miFormulario.get('email').value);
      console.log('Contraseña:', this.miFormulario.get('password').value);
    }
 
  
  

}
