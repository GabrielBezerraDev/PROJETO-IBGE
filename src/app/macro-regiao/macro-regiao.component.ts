import { Component, OnInit } from '@angular/core';
import { MacroRegiaoService } from 'src/service/MacroRegiao.service';
import { MacroRegiao } from 'src/shared/interfaces/MacroRegiao';

@Component({
  selector: 'app-macro-regiao',
  templateUrl: './macro-regiao.component.html',
  styleUrls: ['./macro-regiao.component.scss']
})
export class MacroRegiaoComponent implements OnInit {

public macroRegiaoCard: Array<MacroRegiao> = [];

constructor(
  private macroRegiao: MacroRegiaoService
  ){

}

ngOnInit(): void {
    this.getAllMacroRegioes();
}



public getAllMacroRegioes():void{
  this.macroRegiao.getAllMacroRegiao().subscribe({
    next: (res) => {
      this.macroRegiaoCard = res;
      console.log(this.macroRegiaoCard);
    }
  })
}

}
