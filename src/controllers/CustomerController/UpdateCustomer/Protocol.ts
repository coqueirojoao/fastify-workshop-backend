import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerProps } from "../../../interfaces/ICustomerService";
import { Customer } from "@prisma/client";


export interface IUpdateCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export interface IUpdateCustomerRepository {
    update({ id, name, email, status }: UpdateCustomerProps): Promise<Customer>
}