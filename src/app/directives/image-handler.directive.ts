import { Directive, ElementRef, EventEmitter, HostListener, Input,Output,Renderer2} from '@angular/core';

@Directive({
  selector: '[appImageHandler]',
  standalone: true
})
export class ImageHandlerDirective {

  @Input() defaultImg: string='../../assets/img/utils/default-product.png';
  @Output() imageBroken = new EventEmitter<void>
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('error') onError() {
    this.setDefaultImage(); 
    this.imageBroken.emit()
  }
  private setDefaultImage() {
    console.log("Error al cargar una imagen")
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.defaultImg);
  }

}
