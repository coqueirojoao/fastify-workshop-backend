import { IDeleteCustomerRepository } from "../../../controllers/CustomerController/DeleteCustomer/Protocol";
import prismaClient from "../../../db/prisma/client";
import { DeleteCustomerProps } from "../../../interfaces/ICustomerService";


export class MongoDeleteCustomerRepository implements IDeleteCustomerRepository {
    async delete({ id }: DeleteCustomerProps): Promise<{ message: string }> {
        
        await prismaClient.customer.delete({
            where: {
                id: id
            }
        })
    
        return { message: "Deletado com sucesso!"}
    }
}