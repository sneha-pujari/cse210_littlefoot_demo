export declare const CLASS_TOOLTIP = "littlefoot__tooltip";
export type Position = 'above' | 'below';
export declare function getLeftInPixels(content: HTMLElement, button: HTMLElement): number;
export declare function getMaxHeight(element: HTMLElement): number;
export declare function repositionPopover(popover: HTMLElement, button: HTMLElement, current: Position): [Position, number];
export declare function repositionTooltip(popover: HTMLElement, button: HTMLElement): void;
