export const Sizes = [ 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large' ] as const;
export type Size = (typeof Sizes)[number];

export type Product = {
    id: string;
    title: string;
    description?: string;
    images: string[];
    price: number;
    customizable?: true;
    varsityEnabled?: true;
    restrictedSizes?: Set<Size>;
};

export type ProductInstance = Product & {
    size: Size,
    quantity: number;
    customization: string,
    varsity: boolean;
}