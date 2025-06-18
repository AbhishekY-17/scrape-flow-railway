import { GetWorkflowExecutions } from "@/action/workflows/getWorkflowExecution";
import Topbar from "../../_components/topbar/Topbar"
import { Suspense } from "react";
import { InboxIcon, Loader2Icon } from "lucide-react";
import ExecutionsTable from "./_components/ExecutionsTable";

export default function ExecutionPage({ 
    params 
}: {
    params: { workflowId: string };
}) {
    return (
    <div className="h-full w-full overflow-auto">
        <Topbar workflowId={params.workflowId} title="Workflow Runs" hideButtons subtitle="List of all your workflow runs"/>
        <Suspense fallback={
            <div className="flex items-center justify-center h-full w-full">
                <Loader2Icon size={30} className="animate-spin stroke-primary" />
            </div>
        }>
            <ExecutionsTableWrapper workflowId={params.workflowId} />
        </Suspense>
    </div>
    );
    }

async function ExecutionsTableWrapper({ workflowId }: { workflowId: string }) {
    const executions = await GetWorkflowExecutions(workflowId);
    if(!executions) {
        return <div>No Data</div>;
    }

    if(executions.length === 0) {
        return 
            <div className="container w-full py-6">
                <div className="flex items-center flex-col gap-2 justify-center h-full w-full">
                    <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
                        <InboxIcon size={40} className="stroke-primary"/>
                    </div>
                    <div className="flex flex-col gap-1 text-center">
                        <p className="font-bold">
                            No runs have been triggered for this workflow yet.
                        </p>
                    </div>
                </div>
            </div>;
    }
    return (
        <div className="container w-full py-6">
            <ExecutionsTable workflowId={workflowId} initialData = {executions}/>
        </div>
    );
}