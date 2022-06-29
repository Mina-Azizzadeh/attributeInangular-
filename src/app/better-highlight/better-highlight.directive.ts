import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
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
    this.backgroundColor = "blue";
  }
  @HostListener("mouseleave") mouseleave(event: Event) {
    // this.render.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = "transparent";
  }
}
