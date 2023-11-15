import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Invoice } from '../Models/invoice';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id!: number | undefined;
  active !:boolean | undefined;
  invoice !: Invoice[];
  errorMessage = '';

  constructor(private route: ActivatedRoute, private invoiceliste:InvoiceListComponent) { 
    this.invoice = this.invoiceliste.getDataList();
  }

  ngOnInit(): void {
    this.getParam();
    
  }

  getParam() {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id'] || undefined;
      this.active = params['active'] === 'true';
    if (!this.active) {
        this.errorMessage = 'Impossible de visualiser les détails de la facture';
      }
    });
  }
}
