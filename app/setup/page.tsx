import { SetupUser } from "@/action/billing/setupUser";

export default async function SetupPage() {
    return await SetupUser();
}