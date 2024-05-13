import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'calculator';

  calValue: number = 0;
  calNumber:string = 'noValue';
  funcT:any = 'noFunction';
  firstNumber:number = 0;
  secondNumber:number = 0;
  public onClickValue(val:string, type:string) {
    if(type == 'number') {
      this.onNumberClick(val);
    } else {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val:string) {
  if(this.calNumber !== 'noValue') {
    this.calNumber = this.calNumber + val;
    console.log(this.calNumber)
  } else {
    this.calNumber = val;
  }
  this.calValue = parseFloat(this.calNumber);
  }
  
  onFunctionClick(val:string) {
    
  if(val == 'c') {
      this.onClear();
    } else if(this.funcT == 'noFunction') {
    this.firstNumber = this.calValue;
    this.calValue = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if(val == '=') {this.onEqualPress()}

  } else if(this.funcT !== 'noFunction') {
    this.secondNumber = this.calValue;
    this.calculateValue(val);
    }
  }
  calculateValue(val: string) {
    if(this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber;
      this.assignValues(Total ,val);
    }
    else if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber;
      this.assignValues(Total ,val);
    }
    else if(this.funcT == '*'){
      const Total = this.firstNumber * this.secondNumber;
      this.assignValues(Total ,val);
    }
    else if(this.funcT == '/'){
      const Total = this.firstNumber / this.secondNumber;
      this.assignValues(Total ,val);
    }
    else if(this.funcT == '%'){
      let sum = this.firstNumber * this.secondNumber;
      const Total = sum/100;
      this.assignValues(Total ,val);
    }
  }
  assignValues(Total: number, val: string) {
    this.calNumber = 'noValue';
      this.calValue = Total;
      this.firstNumber = Total;
      this.secondNumber = 0;
      this.funcT = val;
      this.calNumber ='noValue';
      if(val == '=') {this.onEqualPress()}
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'noValue'
  }
  onClear(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.calValue = 0;
    this.funcT = 'noFunction'; 
  }
  }




