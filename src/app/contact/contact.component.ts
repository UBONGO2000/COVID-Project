import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userFirstNameCtrl:FormControl;
  userLastNameCtrl:FormControl;
  userEmailCtrl:FormControl;
  userMessageCtrl:FormControl;

  userForm:FormGroup;

  constructor(fb:FormBuilder){
    this.userFirstNameCtrl=fb.control('',[Validators.required,Validators.minLength(4)]);
    this.userLastNameCtrl=fb.control('',[Validators.minLength(4)]);
    this.userEmailCtrl=fb.control('',[Validators.required,Validators.email]);
    this.userMessageCtrl=fb.control('',[Validators.required,Validators.minLength(2)]);

    this.userForm = fb.group({
      userfirstname:this.userFirstNameCtrl,
      userlastname:this.userLastNameCtrl,
      useremail:this.userEmailCtrl,
      usermessage:this.userMessageCtrl,
    })
  }

  register():void{
    console.log(this.userForm.value);
  }
}
