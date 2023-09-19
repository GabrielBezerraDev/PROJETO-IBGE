import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';
import { Observable } from 'rxjs';
import { Pesquisa } from 'src/shared/interfaces/Pesquisa';

@Injectable({
  providedIn: 'root'
})

export class PesquisaService extends HttpService {

public getPesquisas():Observable<Array<Pesquisa>>{
  return this.getHttp().get<Array<Pesquisa>>("https://servicodados.ibge.gov.br/api/v3/agregados");
}

}
