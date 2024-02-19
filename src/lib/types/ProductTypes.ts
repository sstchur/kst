export const Sizes = [ 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large', '3X-Large', '4X-Large' ] as const;
export type Size = (typeof Sizes)[number];

export type Product = {
    id: string;
    model?: string;
    title: string;
    description?: string;
    images: string[];
    price: number;
    customizable?: number;
    varsityEnabled?: number;
    restrictedSizes?: Set<Size>;
    required?: boolean;
    memo?: string;
};

export type ProductInstance = Product & {
    size: Size,
    quantity: number;
    customization: string,
    varsity: boolean;
    dynamicPrice: number;
}