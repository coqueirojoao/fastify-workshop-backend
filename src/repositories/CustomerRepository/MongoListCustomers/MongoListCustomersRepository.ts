import { Customer } from "@prisma/client";
import { IListAllCustomersRepository } from "../../../controllers/CustomerController/ListAllCustomers/Protocol";
import prismaClient from "../../../db/prisma/client";

export class MongoListCustomersRepository implements IListAllCustomersRepository {

     async listAll(): Promise<Customer[]> {
        const customers = await prismaClient.customer.findMany();

        return customers;
    }
}