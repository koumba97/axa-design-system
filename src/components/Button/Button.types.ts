export type ButtonType = "button" | "link";

export interface ButtonProps {
    label: string;
    type: ButtonType;
    url?: string;
}
