import type { Link } from "../../types/Common.types";

export type CardSize = "sm" | "md" | "lg" | "bg";

export interface CardProps {
    type: CardSize;
    image: string;
    cardDate: string;
    link: Link[];
    breakpoint: string;
    cardTitle: string;
    content: string;
    subhead: string;
    isInverse: boolean;
    inverted: boolean;
}
