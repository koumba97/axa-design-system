export type ButtonStyle = "button" | "link";

export interface ButtonLinkProps {
    label: string;
    buttonStyle: ButtonStyle;
    url?: string;
    isInverse: boolean;
}
