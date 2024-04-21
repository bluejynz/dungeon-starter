export interface ISelectFromArray {
    control: any;
    defaultValue?: string;
    placeholder?: string;
    options: IOptions[];
    label?: string;
}

export interface IOptions {
    value: string;
    label: string;
}
