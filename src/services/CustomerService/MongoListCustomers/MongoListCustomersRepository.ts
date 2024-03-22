import { Customer } from "@prisma/client";
import { IListAllCustomersRepository } from "../../../controllers/CustomerController/ListAllCustomers/Protocols";
import prismaClient from "../../../db/prisma/client";

export class MongoListCustomersRepository implements IListAllCustomersRepository {

     async listAll(): Promise<Customer[]> {
        const customers = await prismaClient.customer.findMany();

        return customers;
    }
}