import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isDarkMode = false;

  formData = {
    name: '',
    phone: '',
    flat: '',
    city: ''
  };
  colorName: string = "red";
  message: string = "";
  msg: string = "";
  localPeople :boolean = true;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  displaySubmitButton : boolean = false;

  handleSubmit() {
    console.log('Form Submitted:', this.formData);
    alert(`Address submitted successfully for ${this.formData.name}!`);
    
    this.msg = `Full Name: ${this.formData.name}
    Phone Number: ${this.formData.phone}
    Flat/House No: ${this.formData.flat}
    City: ${this.formData.city}
    
    ✅ Your address is submitted successfully!
  `;

  }
  toggleColor(){
    this.colorName = this.colorName === "red" ? "blue" : "red";
     // update message to show in frontend
    this.message = 'Button is clicked';

  }
  studentData = [
    {name: 'Alice', age: 30, grade: 'A'},
    {name: 'Bob', age: 32, grade: 'B'},
    {name: 'Charlie', age: 41, grade: 'A'},
    {name: 'David', age: 23, grade: 'C'},
    {name: 'Eva', age: 60, grade: 'B'}
  ]

  
}
