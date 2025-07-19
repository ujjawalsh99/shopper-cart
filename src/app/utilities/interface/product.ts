export interface Product {
    readonly id: number;
    readonly title: string;
    readonly image: string;
    readonly description: string;
    readonly category: string;
    readonly rating: Rating;
    readonly price: number;
}

export interface Rating {
    readonly rate: number;
    readonly count: number;
}