import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() classNavbarHeader: string = '';
  @Input() activeIndex: string = '';
  @Input() activeStyles: string = '';
  @Input() activeApp: string = '';
  @Input() closeIndex: string = '';
  @Input() closeStyles: string = '';
  @Input() closeApp: string = '';

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
  }
  btnActiveStyles(){
    this.activeIndex = '';
    this.activeStyles = 'active';
    this.activeApp = '';
    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnActiveAppHijo.emit( this.activeApp );
  }
  btnActiveApp(){
    this.activeIndex = '';
    this.activeStyles = '';
    this.activeApp = 'active';
    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnActiveAppHijo.emit( this.activeApp );
  }
  btnCloseApp(){
    this.activeApp = '';
    this.closeApp = 'close';

    this.btnActiveAppHijo.emit( this.activeApp );
    this.btnCloseAppHijo.emit( this.closeApp );
  }

  btnCloseStyles(){
    this.activeStyles = '';
    this.closeStyles = 'close';

    this.btnActiveStylesHijo.emit( this.activeStyles );
    this.btnCloseStylesHijo.emit( this.closeStyles );
  }

  btnCloseIndex(){
    this.activeIndex = '';
    this.closeIndex = 'close';

    this.btnActiveIndexHijo.emit( this.activeIndex );
    this.btnCloseIndexHijo.emit( this.closeIndex );
  }

}
