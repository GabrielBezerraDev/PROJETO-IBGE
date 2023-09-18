import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';
import { Observable } from 'rxjs';
import { Estado } from 'src/shared/interfaces/Estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

constructor(
  private htttp: HttpService
) { }

public getAllEstados(idRegiao:number):Observable<Array<Estado>>{
  return this.htttp.getHttp().get<Array<Estado>>(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`);
}

}
