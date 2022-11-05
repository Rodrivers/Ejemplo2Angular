import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usurios',
  templateUrl: './usurios.component.html',
  styleUrls: ['./usurios.component.css']
})
export class UsuriosComponent implements OnInit {
  form=new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  
  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
  }

}
