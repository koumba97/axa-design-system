export interface Link {
    url: string;
    label: string;
    type?: "link" | "button";
    variation?: "primary" | "secondary";
    isInverse?: boolean;
}

export type Size = "sm" | "md" | "lg" | "bg";
export type Ratio = "1:1" | "2:3" | "3:1" | "3:2" | "3:4" | "4:3" | "16:9";
