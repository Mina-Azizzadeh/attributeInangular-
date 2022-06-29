import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() backgroundColorChange: string;
  @Input() defaultColor: string;
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
  }
  @HostListener("mouseenter") mouseover(event: Event) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
    this.backgroundColor = this.backgroundColorChange;
  }
  @HostListener("mouseleave") mouseleave(event: Event) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
