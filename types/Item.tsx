export interface Item {
    id: string;
    name: string;
    decription: string;
    price: number;
}

export interface CreateItemDto {
    name: string;
    description: string;
    price: number;
}