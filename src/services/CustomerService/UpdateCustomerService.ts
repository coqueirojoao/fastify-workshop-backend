import { Customer } from "@prisma/client";
import prismaClient from "../../db/prisma/client";
import { UpdateCustomerProps } from "../../interfaces/ICustomerService";

class UpdateCustomerService {
    async execute({ id, name, email, status }: UpdateCustomerProps): Promise<Customer> {
       
       const updatedCustomer = await prismaClient.customer.update({
        where: {
            id: id
        },
        data: {
            name,
            email,
            status,
            updated_at: new Date()
        }
       })


       return updatedCustomer;
    }
}

export { UpdateCustomerService };