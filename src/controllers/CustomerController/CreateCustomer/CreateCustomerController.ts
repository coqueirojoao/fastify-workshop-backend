import { FastifyRequest, FastifyReply } from "fastify";
import { HttpCodes } from "../../../utils/HttpCodes";
import { ICreateCustomerController, ICreateCustomerRepository } from "./Protocol";


class CreateCostumerController implements ICreateCustomerController {
    constructor(private readonly createCustomerRepository: ICreateCustomerRepository) {}
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {

        const { name, email } = request.body as { name: string, email: string };

        const customer = await this.createCustomerRepository.create({ name, email });


        reply.code(HttpCodes.CREATED).send(customer);
    }
}

export { CreateCostumerController }