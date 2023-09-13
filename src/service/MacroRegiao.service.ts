import { Injectable } from '@angular/core';
import { HttpService } from './Http.service';
import { Observable } from 'rxjs';
import { MacroRegiao } from 'src/shared/interfaces/MacroRegiao';

@Injectable({
  providedIn: 'root'
})
export class MacroRegiaoService{

constructor(
  private http: HttpService
) { }

public getAllMacroRegiao():Observable<Array<MacroRegiao>>{
  return this.http.getHttp().get<Array<MacroRegiao>>(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`);
}

}
