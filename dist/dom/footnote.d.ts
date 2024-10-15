import type { Footnote } from '../use-cases';
export type FootnoteElements = Readonly<{
    id: string;
    host: HTMLElement;
    button: HTMLElement;
    popover: HTMLElement;
    content: HTMLElement;
    wrapper: HTMLElement;
}>;
export declare function footnoteActions({ id, button, content, host, popover, wrapper, }: FootnoteElements): Footnote<HTMLElement>;
