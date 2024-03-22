import prismaClient from "../../db/prisma/client";
import { DeleteCustomerProps } from "../../interfaces/ICustomerService";

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps): Promise<{ message: string }> {

    await prismaClient.customer.delete({
        where: {
            id: id
        }
    })

    return { message: "Deletado com sucesso!"}

    }
}

export { DeleteCustomerService };