import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[sizeAnimeoCard]',
})
export class AnimeoCardDirective {
    private defaultHeight: string = '180px';

    constructor(private el: ElementRef) {
        this.setHeight(this.defaultHeight);
    }

    @Input('sizeAnimeoCard') height: string;

    @HostListener('click') onClick() {
        this.setHeight(this.height || this.defaultHeight);
    }

    setHeight(height: string) {
        this.el.nativeElement.style.height = `${height}`;
    }
}
