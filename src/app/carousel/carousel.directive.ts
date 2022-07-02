import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { IcrouselContext } from "./app.interface";

@Directive({
  selector: "[appCarousel]",
})
export class CarouselDirective implements OnInit {
  public context: IcrouselContext | null = null;
  public index = 0;
  public timer;

  constructor(
    private templateRef: TemplateRef<IcrouselContext>,
    private viewContent: ViewContainerRef
  ) {}

  @Input("appCarouselFrom") images: string[];

  ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };
    this.viewContent.createEmbeddedView(this.templateRef, this.context);
    this.playAuto()
  }

  public next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }

  public prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }

  public playAuto() {
    this.timer = setInterval(() => {
      this.next();
    }, 3000);
  }

  public clearSetInterval() {
    this.clearSetInterval()
  }
}
