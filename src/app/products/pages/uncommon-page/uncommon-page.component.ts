import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18n select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'conocerlo',
    'female': 'conocerla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18n plural
  public clients: string[] = ['Maria', 'Pedro', 'Lara', 'Mariana', 'Joaquin']
  public clientsMap = {
    '=0':'no tenemos clientes esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  deleteClient() {
    this.clients.shift();
    }

  // KeyValue Pipe
  public person =
  {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000);


}
