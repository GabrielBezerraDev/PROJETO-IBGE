import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';

@Injectable({
  providedIn: 'root'
})
export class RegiãoService {

constructor(
  private http: HttpService
) { }

public getRegiao():void{
  this.http.getHttp().get
}

}
