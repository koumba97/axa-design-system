import type { Link, Size } from "../../types/Common.types";

export interface CardProps {
    type: Size;
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
