import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerProps } from "../../../interfaces/ICustomerService";
import { Customer } from "@prisma/client";

export interface ICreateCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export interface ICreateCustomerRepository {
    create({ name, email }: CreateCustomerProps): Promise<Customer>
}