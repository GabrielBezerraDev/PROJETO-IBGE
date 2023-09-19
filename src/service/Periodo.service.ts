import { Periodo } from 'src/shared/interfaces/Periodo';
import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PeriodoService extends HttpService{


public getPeriodos(id:number):Observable<Array<Periodo>>{
  return this.getHttp().get<Array<Periodo>>(`https://servicodados.ibge.gov.br/api/v3/agregados/${id}/periodos`);
}

}
