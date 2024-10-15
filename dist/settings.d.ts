import { type HTMLAdapterSettings } from './dom/document';
import type { UseCaseSettings } from './use-cases';
export type Settings = HTMLAdapterSettings & UseCaseSettings<HTMLElement>;
export declare const DEFAULT_SETTINGS: Settings;
