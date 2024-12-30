import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.page.html',
  styleUrls: ['./create-question.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class CreateQuestionPage implements OnInit {
  questionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      type: ['', Validators.required],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      correctOption: [''],
      answer: [''],
    });

    this.onTypeChange();
  }

  onTypeChange() {
    const type = this.questionForm.get('type')?.value;
    if (type === 'mcq') {
      this.questionForm.get('option1')?.setValidators([Validators.required]);
      this.questionForm.get('option2')?.setValidators([Validators.required]);
      this.questionForm.get('option3')?.setValidators([Validators.required]);
      this.questionForm.get('option4')?.setValidators([Validators.required]);
      this.questionForm.get('correctOption')?.setValidators([Validators.required]);
      this.questionForm.get('answer')?.clearValidators();
    } else if (type === 'fill-in-the-blanks') {
      this.questionForm.get('answer')?.setValidators([Validators.required]);
      this.questionForm.get('option1')?.clearValidators();
      this.questionForm.get('option2')?.clearValidators();
      this.questionForm.get('option3')?.clearValidators();
      this.questionForm.get('option4')?.clearValidators();
      this.questionForm.get('correctOption')?.clearValidators();
    }
    this.questionForm.get('option1')?.updateValueAndValidity();
    this.questionForm.get('option2')?.updateValueAndValidity();
    this.questionForm.get('option3')?.updateValueAndValidity();
    this.questionForm.get('option4')?.updateValueAndValidity();
    this.questionForm.get('correctOption')?.updateValueAndValidity();
    this.questionForm.get('answer')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log('Form Submitted', this.questionForm.value);
      // Handle form submission logic here
    }
  }
}
