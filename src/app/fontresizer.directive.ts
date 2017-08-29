import { 
    Directive, 
    ElementRef, 
    HostListener,
    Input,
    OnInit } 
from '@angular/core';

@Directive({ selector: '[fontResizer]' })
export class FontResizerDirective implements OnInit{

    readonly SIZE_UNIT: string = "px";

    @Input('fontResizer') defaultSize: number;

    @HostListener('click', ['$event']) onClick($event) {
        this.fontSize += ($event.shiftKey ? -5 : 5);
        this.resize(); 
    }

    fontSize: number;

    constructor(public el: ElementRef) { 
        
    }

    ngOnInit() {
        this.fontSize = this.defaultSize || 16;
        this.resize();
    }

    resize() {
        this.el.nativeElement.style.fontSize = this.fontSize + this.SIZE_UNIT;
    }
}