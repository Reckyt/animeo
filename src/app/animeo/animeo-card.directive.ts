import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[sizeAnimeoCard]',
})
export class AnimeoCardDirective {
    // private defaultHeight: number = 180;

    // constructor(private el: ElementRef) {
    //     this.setHeight(this.defaultHeight);
    // }

    // @Input('sizeAnimeoCard') height: number;

    // @HostListener('click') onClick() {
    //     this.setHeight(this.height || this.defaultHeight);
    // }

    // setHeight(height: number) {
    //     this.el.nativeElement.style.height = `${height}px`;
    // }
}
