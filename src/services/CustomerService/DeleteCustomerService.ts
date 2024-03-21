import prismaClient from "../../db/prisma/client";
import { DeleteCustomerProps } from "../../interfaces/ICustomerService";

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps): Promise<{ message: string }> {

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

    await prismaClient.customer.delete({
        where: {
            id: findCustomer.id
        }
    })

    return { message: "Deletado com sucesso!"}

    }
}

export { DeleteCustomerService };