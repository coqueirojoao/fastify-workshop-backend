export interface DeleteCustomerProps {
    id: string;
}


export interface CreateCustomerProps {
    name: string;
    email: string;
}

export interface UpdateCustomerProps {
    id: string;
    name?: string;
    email?: string;
    status?: boolean;
}