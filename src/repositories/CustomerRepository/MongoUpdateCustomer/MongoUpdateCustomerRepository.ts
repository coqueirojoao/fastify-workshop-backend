import { Customer } from "@prisma/client";
import { IUpdateCustomerRepository } from "../../../controllers/CustomerController/UpdateCustomer/Protocol";
import { UpdateCustomerProps } from "../../../interfaces/ICustomerService";
import prismaClient from "../../../db/prisma/client";

export class MongoUpdateCustomerRepository
  implements IUpdateCustomerRepository
{
  async update({
    id,
    name,
    email,
    status,
  }: UpdateCustomerProps): Promise<Customer> {
    const updatedCustomer = await prismaClient.customer.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        status,
        updated_at: new Date(),
      },
    });

    return updatedCustomer;
  }
}
