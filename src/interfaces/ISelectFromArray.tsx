export interface ISelectFromArray {
    control: any;
    defaultValue?: string;
    placeholder?: string;
    options: IOptions[];
}

export interface IOptions {
    value: string;
    label: string;
}
