import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollbar]'
})
export class ScrollbarDirective implements OnInit {

  @Input() scrollbar: string
  @Input() allowAllScreens: boolean | string

  hostElement: HTMLElement

  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
    this.hostElement = this.elementRef.nativeElement
    if (this.hostElement && this.hostElement.tagName && this.hostElement.tagName == 'ION-CONTENT') {
      let el = document.createElement('style')
      el.innerText = this.scrollbar || this.getCustomStyle()
      this.hostElement.shadowRoot.appendChild(el)
    }
  }

  getCustomStyle() {
    if (this.allowAllScreens === true || this.allowAllScreens === 'true') {
      return `::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-track:hover {
          background: #f7f7f7;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #888
        }
        .inner-scroll {
          scrollbar-width: thin
        }`
    } else {
      return `@media(pointer: fine) {
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-track:hover {
          background: #f7f7f7;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #888
        }
        .inner-scroll {
          scrollbar-width: thin
        }
      }`
    }
  }

}
