export interface IProps {
    type: string;
    name: string;
    placeholder?: string;
    checked?: boolean;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}