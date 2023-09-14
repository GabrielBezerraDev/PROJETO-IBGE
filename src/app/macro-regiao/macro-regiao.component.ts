import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MacroRegiaoService } from 'src/service/MacroRegiao.service';
import { PesquisaService } from 'src/service/Pesquisa.service';
import { MacroRegiao } from 'src/shared/interfaces/MacroRegiao';
import { Pesquisa } from 'src/shared/interfaces/Pesquisa';

@Component({
  selector: 'app-macro-regiao',
  templateUrl: './macro-regiao.component.html',
  styleUrls: ['./macro-regiao.component.scss']
})
export class MacroRegiaoComponent implements OnInit {

public macroRegiaoCard: Array<MacroRegiao> = [];
public pesquisas: Array<Pesquisa> = [];
public panelOpenState = false;
public formIBGE: FormGroup;
public selectValue: string;

constructor(
  private macroRegiao: MacroRegiaoService,
  private pesquisa: PesquisaService,
  private formBuilder: FormBuilder
  ){

}

ngOnInit(): void {
    this.getAllMacroRegioes();
    this.getPesquisa();
    this.initForm();
}

public initForm():void{
  this.formIBGE = this.formBuilder.group({
    select:['krl']
  });
}


public getAllMacroRegioes():void{
  this.macroRegiao.getAllMacroRegiao().subscribe({
    next: (res) => {
      this.macroRegiaoCard = res;
      console.log(this.macroRegiaoCard);
    }
  })
}

public getPesquisa():void{
  this.pesquisa.getPesquisas().subscribe({
    next: (res) => {
      this.pesquisas = res;
      console.log(this.pesquisas);
    }
  });
}

public setSelectValue():void{
  console.log(this.formIBGE.get("select")?.value);
  this.selectValue = this.formIBGE.get("select")?.value;
}

}
