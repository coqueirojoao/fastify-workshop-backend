import { Customer } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export interface IListAllCustomersController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export interface IListAllCustomersRepository {
    listAll(): Promise<Customer[]>
}