import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myForm: FormGroup  = new FormGroup({
    'first_name': new FormControl('',Validators.required),
    'last_name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'message': new FormControl('', Validators.required),
    'type_of_shoot': new FormControl('', Validators.required),
    'animal': new FormControl('', Validators.required),
    'number_of_animals': new FormControl('', Validators.required),

    

  })
 onSubmit(): void{
  console.log(this.myForm.value)
 }
}
