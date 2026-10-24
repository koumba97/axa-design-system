export type ButtonStyle = "button" | "link";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonLinkProps {
    label: string;
    buttonStyle: ButtonStyle;
    buttonType: ButtonType;
    url?: string;
    isInverse: boolean;
}
