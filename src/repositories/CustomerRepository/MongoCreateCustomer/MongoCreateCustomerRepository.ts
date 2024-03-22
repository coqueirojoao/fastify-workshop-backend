import { Customer } from "@prisma/client";
import { ICreateCustomerRepository } from "../../../controllers/CustomerController/CreateCustomer/Protocol";
import { CreateCustomerProps } from "../../../interfaces/ICustomerService";
import prismaClient from "../../../db/prisma/client";


export class MongoCreateCustomerRepository implements ICreateCustomerRepository {
   async create({ name, email }: CreateCustomerProps): Promise<Customer> {
        
        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })


        return customer;
    }
}