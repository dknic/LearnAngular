import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name:'profit'})

export class profitpipe implements PipeTransform{
    transform(value: number,profitpercentage:number):number{
     return value*profitpercentage*0.01
    }
}