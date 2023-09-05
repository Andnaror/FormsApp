import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{
  // public basicForm: FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   price : new FormControl(''),
  //   inStorage : new FormControl(''),
  // });
  public basicForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    price:[0,[Validators.required,Validators.min(0)]],
    inStorage:[0,[Validators.required,Validators.min(0)]]
  })

  constructor(
    private fb: FormBuilder
    ){}


  isNotValidField(field:string):boolean | null{
    return this.basicForm.controls[field].errors
     &&  this.basicForm.controls[field].touched;
  }

  getFieldError(field:string):string | null{
  if(!this.basicForm.controls[field])return null;

  const errors = this.basicForm.controls[field].errors || {};
  for(const key of Object.keys(errors)){
    switch( key ){
      case 'required':
        return 'Este campo es requerido'
      case 'minlength':
        return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    }
  }
  return ''
  }
  ngOnInit(): void {
    this.basicForm.reset({price:0,inStorage:0});

  }

    onSave():void{
      if(this.basicForm.invalid){
        this.basicForm.markAllAsTouched
        return;}
      console.log(this.basicForm.value);

    }
}
