import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Method - 1

  //   defaultOption = "teacher";
  //   answer = "";
  //   genders = [' Male', ' Female'];
  //   submitted = false;
  //   user = {
  //     email: '',
  //     password: '',
  //     secretQuestion: '',
  //     answer: '',
  //     gender: ''

  //   }

  //   onSubmit(form: NgForm) {
  //     this.submitted = true

  //     this.user.email = form.value.userData.email;
  //     this.user.password = form.value.userData.password;
  //     this.user.secretQuestion = form.value.userData.secret;
  //     this.user.answer = form.value.userData.questionAnswer;
  //     this.user.gender = form.value.userData.gender;

  //     form.reset();
  //   }

  //Method - 2

  // subscriptions = ['Basic', 'Advance', 'Pro'];
  // selectedSubscription = 'Advance';

  // onSubmit(form: NgForm) {
  //   console.log(form.value.email);
  //   console.log(form.value.password);
  //   console.log(form.value.subscription);

  // }

  //Method - 3(Reactive Approch)

  // genders = ['male', 'female'];
  // signupForm: FormGroup;

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormControl([])
    // });
  }

  // onSubmit() {
  //   console.log(this.signupForm.value.username);

  // }
  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }


  //Pipes

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'medium',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ]

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    }
  }
}

