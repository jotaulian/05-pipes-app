import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {name: 'Superman', canFly: true, color: Color.blue},
    {name: 'Batman', canFly: false, color: Color.black},
    {name: 'Wolverine', canFly: false, color: Color.yellow},
    {name: 'Dr. Strange', canFly: true, color: Color.red},
    {name: 'Green Lantern', canFly: true, color: Color.green},
  ];

  public sortBy: keyof Hero | '' = '';

  toggleUppercase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(sortBy: keyof Hero):void{
    this.sortBy = sortBy;
  }
}
