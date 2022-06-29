import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "yellow"
    );
  }
}
