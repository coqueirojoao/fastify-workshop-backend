import { DeleteCustomerProps } from './../../../interfaces/ICustomerService';
import { FastifyReply, FastifyRequest } from "fastify";


export interface IDeleteCustomerController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export interface IDeleteCustomerRepository {
    delete({ id }: DeleteCustomerProps): Promise<{ message: string }>
}