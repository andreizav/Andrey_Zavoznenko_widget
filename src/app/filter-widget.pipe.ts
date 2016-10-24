import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWidget'
})
export class FilterWidgetPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(value)
    console.log(args)
    if(!args) {
      return value
    } else {
      let newArr = [];
      value.forEach((val)=>{
        if(val.widgetType === args){
          newArr.push(val);
        }
      })

      return newArr
    }
  }

}
