import { ExecutionEnvironment } from "@/types/executor";
import { ReadPropertyFromJsonTask } from "../task/ReadPropertyFromJson";
import { AddPropertyToJsonTask } from "../task/AddPropertyToJson";

export async function AddPropertyToJsonExecutor(
    environment: ExecutionEnvironment<typeof AddPropertyToJsonTask>
): Promise<boolean> {
    try {
        const jsonData = environment.getInput("JSON");
        if(!jsonData) {
            environment.log.error("input->json not defined")
        }

        const propertyName = environment.getInput("Property name");
        if(!propertyName) {
            environment.log.error("input->propertyName not defined")
        }

        const propertValue = environment.getInput("Property value");
        if(!propertValue) {
            environment.log.error("input->propertValue not defined")
        }

        const json = JSON.parse(jsonData);
        
        json[propertyName] = propertValue;

        environment.setOutput("Update JSON", JSON.stringify(json));
        return true;

    } catch (error: any) {
        environment.log.error(error.message)
        return false;
    }
}