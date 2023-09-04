import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  // public basicForm: FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   price : new FormControl(''),
  //   inStorage : new FormControl(''),
  // });
  public basicForm: FormGroup = this.fb.group({
    name:[''],
    price:[0],
    inStorage:[0]
  })

  constructor(
    private fb: FormBuilder
    ){}

    onSave():void{
      console.log(this.basicForm.value)
    }
}
