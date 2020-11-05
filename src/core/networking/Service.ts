import { GenericResponse } from "./GenericResponse";

export abstract class Service {
    protected getErrorFromResponse(from: unknown): Error {
        switch (true) {
            case from instanceof Error:
                return from as Error;

            case from instanceof GenericResponse:
                if ((from as GenericResponse).message) {
                    return new Error((from as GenericResponse).message);
                }

                if ((from as GenericResponse).data?.msg) {
                    return new Error((from as GenericResponse).data.msg as string);
                }

                break;
        }

        return new Error("There was a problem executing your request.");
    }
}
