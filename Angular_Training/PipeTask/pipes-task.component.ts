import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-task',
  templateUrl: './pipes-task.component.html',
  styleUrls: ['./pipes-task.component.css']
})
export class PipesTaskComponent 
{
  public start:number=0;
  public end:number=4;
  public isLoad:boolean=false;
  public isLoadingDone:boolean=true;

  public studentArray:any[]=[
    {sId:1,sname:"Mark",gender:"M",grade:1},
    {sId:2,sname:"Mary",gender:"F",grade:1},
    {sId:3,sname:"Tom",gender:"M",grade:2},
    {sId:4,sname:"Jerry",gender:"M",grade:3},
    {sId:5,sname:"Donald",gender:"M",grade:4},
    {sId:6,sname:"Micky",gender:"M",grade:1},
    {sId:7,sname:"Minnie",gender:"F",grade:2},
    {sId:8,sname:"Bheem",gender:"M",grade:3},
    {sId:9,sname:"Chutki",gender:"F",grade:4},
    {sId:10,sname:"John",gender:"M",grade:1},
    {sId:11,sname:"Jaggu",gender:"M",grade:2},
    {sId:12,sname:"Goofy",gender:"M",grade:3}
   
   
    ];

    // loadItems()
    // {
    //   this.start=0;
    //   this.end=this.end+4;

    //   if(this.end==this.studentArray.length || this.end==this.studentArray.length+1 || this.end==this.studentArray.length+2)
    //   {
    //     this.isLoad=true;
    //   }
      
    // }
    loadItems1()
    {
        this.end = this.end + 4;
        if(this.end==this.studentArray.length)
        {
          this.isLoadingDone=false;
        }

    }
    
    
    
}