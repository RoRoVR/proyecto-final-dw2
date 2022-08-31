import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() classNavbarHeader: string = '';
  @Input() activeIndex: string = '';
  @Input() activeStyles: string = '';
  @Input() activeApp: string = '';
  @Input() closeIndex: string = '';
  @Input() closeStyles: string = '';
  @Input() closeApp: string = '';

  @Output() activeNavbarHijo = new EventEmitter<string>();
  @Output() btnActiveIndexHijo = new EventEmitter<string>();
  @Output() btnActiveStylesHijo = new EventEmitter<string>();
  @Output() btnActiveAppHijo = new EventEmitter<string>();

  @Output() btnCloseIndexHijo = new EventEmitter<string>();
  @Output() btnCloseStylesHijo = new EventEmitter<string>();
  @Output() btnCloseAppHijo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  btnActiveIndex(){
    this.activeIndex = 'active';
    this.activeStyles = '';
    this.activeApp = '';
    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnActiveAppHijo.emit( this.activeApp );

    this.closeIndex = '';
    this.btnCloseIndexHijo.emit( this.closeIndex );
  }
  btnActiveStyles(){
    this.activeIndex = '';
    this.activeStyles = 'active';
    this.activeApp = '';
    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnActiveAppHijo.emit( this.activeApp );

    this.closeStyles = '';
    this.btnCloseStylesHijo.emit( this.closeStyles );
  }
  btnActiveApp(){
    this.activeIndex = '';
    this.activeStyles = '';
    this.activeApp = 'active';
    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnActiveAppHijo.emit( this.activeApp );

    this.closeApp = '';
    this.btnCloseAppHijo.emit( this.closeApp );
  }
  activeNavbar(){
    if( this.classNavbarHeader === 'active' ){
      this.classNavbarHeader = '';
      this.activeNavbarHijo.emit( this.classNavbarHeader );
    }else{
      this.classNavbarHeader = 'active';
      this.activeNavbarHijo.emit( this.classNavbarHeader );
    }
  }
}
