import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../utility/IProduct';

@Pipe({
  name: 'searchProduct',
  standalone: false
})
export class SearchProductPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] {
    if (!value || !args) {
      return value;
    }

    const lowerSearch = args.toLowerCase();

    return value.filter(p =>
      p.name.toLowerCase().includes(lowerSearch)
    ) ;
  }

}