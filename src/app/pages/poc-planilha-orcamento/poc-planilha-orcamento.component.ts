import { Component } from '@angular/core';

@Component({
  selector: 'app-poc-planilha-orcamento',
  template: `<iframe
    src="/assets/poc-planilha-orcamento.html"
    style="width:100vw;height:100vh;border:none;display:block;"
    title="Planilha de Orçamento - New OPP"
  ></iframe>`,
})
export class PocPlanilhaOrcamentoComponent {}
