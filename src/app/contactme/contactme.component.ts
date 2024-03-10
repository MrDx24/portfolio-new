import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {

  contactfrm!: FormGroup


  constructor(private fb: FormBuilder) {

    this.contactfrm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });

  }

  onSubmit() {
    var res = {
      "email" : this.email?.value,
      "subject" : this.subject?.value,
      "message" : this.message?.value
    };

    console.log(res);
  }

  get email() {
    return this.contactfrm.get('email');
  }

  get subject() {
    return this.contactfrm.get('subject');
  }

  get message() {
    return this.contactfrm.get('message');
  }
}
