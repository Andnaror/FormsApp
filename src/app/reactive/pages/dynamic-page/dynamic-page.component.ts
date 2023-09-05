import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public dynamicForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['The Witcher 3',Validators.required],
      ['Rocket League',Validators.required]
    ])
  })

  constructor(private fb: FormBuilder){}

  get favoriteGames(){
    return this.dynamicForm.get('favoriteGames') as FormArray
  }

  onSubmit():void{
    if (this.dynamicForm.invalid)
    {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value)
    this.dynamicForm.reset()
  }

  isNotValidField(field:string):boolean | null{
    return this.dynamicForm.controls[field].errors
     &&  this.dynamicForm.controls[field].touched;
  }

  isNotValidFieldInArray(formArray:FormArray, i:number){
    return formArray.controls[i].errors
     &&  formArray.controls[i].touched;
  }
  getFieldError(field:string):string | null{
  if(!this.dynamicForm.controls[field])return null;

  const errors = this.dynamicForm.controls[field].errors || {};
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


}
