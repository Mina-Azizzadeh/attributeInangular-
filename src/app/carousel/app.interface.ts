export interface IcrouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
}
