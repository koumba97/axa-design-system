import type { Ratio } from "../../types/Common.types";

export interface ImageProps {
    src: string;
    alt: string;
    ratio: Ratio;
    hasBorder: boolean;
    backgroundColor: "functional" | "expressive";
    objectFit: "cover" | "contain";
    customId: string;
}
