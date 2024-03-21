import { Customer } from "@prisma/client";
import prismaClient from "../../db/prisma/client";
import { UpdateCustomerProps } from "../../interfaces/ICustomerService";

class UpdateCustomerService {
    async execute({ id, name, email, status }: UpdateCustomerProps): Promise<Customer> {

        const regExMongoId = /^[a-f\d]{24}$/i;

        if (!id || !regExMongoId.test(id)) {
            throw new Error("Você precisa enviar um ID válido!");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

       if (!findCustomer) {
        throw new Error("Cliente não existe.")
       }

       if (!name && !email && !status) {
        throw new Error("Você precisa enviar alguma modificação.")
       }
       
       const updatedCustomer = await prismaClient.customer.update({
        where: {
            id: findCustomer.id
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