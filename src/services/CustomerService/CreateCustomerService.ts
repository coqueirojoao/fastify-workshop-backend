import { Customer } from "@prisma/client";
import prismaClient from "../../db/prisma/client";
import { CreateCustomerProps } from "../../interfaces/ICustomerService";

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps): Promise<Customer> {        
        
        if (!name || !email) {
            throw new Error("Preencha todos os campos");
        }

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

export { CreateCustomerService }