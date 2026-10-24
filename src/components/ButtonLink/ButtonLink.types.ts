export type ButtonType = "button" | "link";

export interface ButtonLinkProps {
    label: string;
    buttonType: ButtonType;
    url?: string;
}
