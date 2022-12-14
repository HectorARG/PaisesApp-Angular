import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { BusquedaPais } from '../../interfaces/pais.interfaces';
import { PaisService } from './../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: BusquedaPais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(switchMap( ({id}) => this.paisService.detallesPais( id )), tap( console.log ))
        .subscribe(pais => { this.pais = pais });

    // this.activatedRoute.params.subscribe( ({ id }) => {
    //   console.log(id);

    //   this.paisService.detallesPais( id ).subscribe(resp => {
    //     console.log(resp);

    //   });
    // });



  }

}
