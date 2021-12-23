import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {


  transform(input:number): string
   {
    let output: string = "";

      if(input == 1)  output = "Outstanding";
      if(input == 2)  output = "Excellent";
      if(input == 3)  output = "Good";
      if(input == 4)  output = "Average";

      // if(input==1)
      // {
      //     output="Outstanding";
      // } else if(input==2)
      // {
      //   output = "Excellent";
      // }
      // else if(input==3)
      // {
      //   output = "Good";
      // }else
      // {
      //   output = "Average";
      // }
         return output;
  }

}
