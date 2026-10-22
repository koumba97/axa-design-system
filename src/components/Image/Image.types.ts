import type { Ratio } from "../../types/Common.types";

export type ImageBackgroundColor = "functional" | "expressive";
export type ImageObjectFit = "cover" | "contain";

export interface ImageProps {
    src: string;
    alt: string;
    ratio: Ratio;
    hasBorder: boolean;
    backgroundColor: ImageBackgroundColor;
    objectFit: ImageObjectFit;
    customId?: string;
}
