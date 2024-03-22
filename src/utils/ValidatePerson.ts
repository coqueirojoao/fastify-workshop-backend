import { MethodsForValidation } from "./MethodsForValidation";

interface ValidatePersonProps {
    name?: string | null;
    email?: string | null;
    status?: boolean | null;
    method: string;
}



export class ValidatePerson {
    public static execute({ name, email, status, method }: ValidatePersonProps): boolean {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const nameMinLength = 2;

        if (method === MethodsForValidation.CREATE) {
            if (!name || !email) {
                return false;
            } else if (name && name?.length < nameMinLength || email && !emailRegex.test(email)) {
                return false;
            }
        }

        if (method === MethodsForValidation.UPDATE) {
            if (!name && !email && status === null) {
                return false
            } else if (name && name?.length < nameMinLength || email && !emailRegex.test(email)) {
                return false
            }
        }

        return true;
    }
}