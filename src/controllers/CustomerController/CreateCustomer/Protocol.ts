import { FastifyReply, FastifyRequest } from "fastify";

export interface ICreateCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>
}