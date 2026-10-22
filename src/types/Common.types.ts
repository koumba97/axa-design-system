export interface Link {
    url: string;
    label: string;
    type?: "link" | "button";
    variation?: "primary" | "secondary";
    isInverse?: boolean;
}
