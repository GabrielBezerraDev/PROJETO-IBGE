import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';

@Injectable({
  providedIn: 'root'
})
export class RegiãoService extends HttpService{

public getRegiao():void{
  this.getHttp().get
}

}
