import { AppNode } from "@/types/appNode";
import { TaskRegistry } from "./task/registry";
import { TaskType } from "@/types/task";

export function CalculateWorkflowCost(nodes: AppNode[]) {
    return nodes.reduce((acc, node) => {
        return acc + TaskRegistry[node.data.type as keyof typeof TaskRegistry].credits;
    }, 0)
}