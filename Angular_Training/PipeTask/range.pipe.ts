import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(inputData:any[],key:string,min:number,max:number): any[] {
    let result:any[]=[];
    if(key!="")
   {
      result=inputData.filter(x=> x[key]>=min && x[key]<=max);
   }
   else{
     result=inputData;
   }
   
    return result;
  }
}
