import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input()  defaultColor: string = 'transparent';
  @Input('appBetterHighlight')   highlightColor: string = 'blue';

   @HostBinding('style.backgroundColor') backgroundColor!:string;
  constructor(private elref:ElementRef , private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elref.nativeElement,'background-color' , 'blue');

  }
  @HostListener ('mouseenter')  mouseover(eventData:Event){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color' , 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener ('mouseleave')  mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
