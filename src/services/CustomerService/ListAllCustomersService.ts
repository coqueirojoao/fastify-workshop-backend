import { Customer } from "@prisma/client";
import prismaClient from "../../db/prisma/client";



class ListAllCustomersService {
    async execute(): Promise<Customer[]> {
        const customers = await prismaClient.customer.findMany();

        return customers;
    }
}


export { ListAllCustomersService };