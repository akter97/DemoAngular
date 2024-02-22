
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Akter Hossain'; 
  duesReschedulingForm:FormGroup;  
  listofNumber:FormArray; 
  totalNumber1:number=0;
  totalNumber2:number=0;
  myForm: FormGroup;
  noOfInstallementval:any;
  noOfInstallementval2:any;
constructor(
  private http: HttpClient,
  private formBuilder:FormBuilder ,  
  private fb: FormBuilder, 
){this.listofNumber=this.formBuilder.array([]);

  this.myForm = this.fb.group({
    steps: this.fb.array([]),
  });
  this.myForm = this.fb.group({
    id:[0,[]],
    Name:[0,[]],   
    noOfInstallement:[0,[]], 
    noOfInstallement2:[0,[]], 
    isChecked:[,[]],
    totalNumber2:[this.totalNumber2],
    totalNumber1:[this.totalNumber1],

    step1:[0,[]],
    step2:[0,[]],
    step3:[0,[]],
    step4:[0,[]],
    step5:[0,[]],
    step6:[0,[]],
    step7:[0,[]],
    step8:[0,[]],
    step9:[0,[]],
    step10:[0,[]],
     
    step21:[0,[]],
    step22:[0,[]],
    step23:[0,[]],
    step24:[0,[]],
    step25:[0,[]],
    step26:[0,[]],
    step27:[0,[]],
    step28:[0,[]],
    step29:[0,[]],
    step210:[0,[]],
  });


  
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
  totlaAmount1(){
    debugger     
   const value1= this.f.step1.value; 
   const value2= this.f.step2.value; 
   const value3= this.f.step3.value; 
   const value4= this.f.step4.value; 
   const value5= this.f.step5.value; 

   // Calculate the total
   this.totalNumber1 =  value1+value2+value3+value4+value5;    
     
     }

     totlaNumber2(){
      debugger     
      const value= this.f.step21.value; 
      const value1= this.f.step22.value; 
     const value2= this.f.step23.value; 
     const value3= this.f.step24.value; 
     const value4= this.f.step25.value; 
     const value5= this.f.step26.value; 
     const value6= this.f.step27.value; 
  
     // Calculate the total
     this.totalNumber2 =  value+value1+value2+value3+value4+value5+value6;    
       
       } 

  oncheckedall(isSelect: any){
    if(isSelect){
      this.listofNumber.controls.forEach(c=>c['controls'].isChecked.patchValue(isSelect))
    }else{
      this.listofNumber.controls.forEach(c=>c['controls'].isChecked.patchValue(isSelect))
    }
    }
get f(){ 
  return this.myForm.controls;
}

get formVal(){ 
  return this.myForm.value;
} 
addNewItemInstallement1(): void { 
  this.noOfInstallementval = []; 
 const val= this.f.noOfInstallement.value;
  
    for (let i = 0; i < val; i++) {
      this.noOfInstallementval.push(0); 
     
    }
    console.log('test',this.noOfInstallementval)
  
  
  }
  addNewItemInstallement2(): void { 
    this.noOfInstallementval2 = []; 
   const val= this.f.noOfInstallement2.value;
    
      for (let i = 0; i < val; i++) {
        this.noOfInstallementval2.push(0); 
       
      }
      console.log('test',this.noOfInstallementval2)
    
    
    }
reset(){
  this.myForm.reset();
}

    save()
  {
    debugger
    const bodyData = this.myForm.value;

    this.http.post("https://localhost:7251/api/Home/AddAllNumber",bodyData).subscribe((resultData: any)=>
    {
      //if(this.f.id.value==0){  
      console.log(resultData);
        alert("Successfully");
        this.reset()
      // }
      // else{
      //   alert("update.......")
      // }
        
    });  

  }
}