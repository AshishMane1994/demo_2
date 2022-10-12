// import { Component, OnInit } from '@angular/core';
// import{FormGroup,FormControl,FormBuilder, Validators}from '@angular/forms'
// // import{ CustomvalidationService}from ''

// @Component({
//   selector: 'app-reactive-forms',
//   templateUrl: './reactive-forms.component.html',
//   styleUrls: ['./reactive-forms.component.css']
// })
// export class ReactiveFormsComponent implements OnInit {
//  regForm:FormGroup;
// submitted = false;
//   constructor(private data:FormBuilder) {
 
//    }


//   ngOnInit(): void {
//      this.regForm=new FormGroup({
//       username:new FormControl(),
//       email:new FormControl(),
//      tel:new FormControl(),
//      pass:new FormControl()
//     })
//   }
    

//      this.regForm= this.data.group({
//      username: [
//       '',
//       [
//         Validators.required,
//         Validators.minLength(6),
//         Validators.maxLength(20)
//       ]
//       email:["",[Validators.required]]   , 
//         tel:["",[Validators.required]] ,    
//          pass:["",[Validators.required]]  
//      })
    
  
  
//   }
//    get username(){
//     return this.regForm.get('username'),this.regForm.get('email');
//    }
//    get email(){
//     return this.regForm.get('email');
//    }
  
// reg1() {
// console.log(this.regForm.value)
//  this.submitted = true;
// if(this.regForm.invalid){
//   return
//  }else{
//    console.log("form submitted");
//  }

//   }
//   }


