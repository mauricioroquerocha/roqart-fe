import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import DashboardTabs from "./DashboardTabs";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container py-10 space-y-8">
      <div>
        <TypographyH1>My Account</TypographyH1>
        <TypographyP className="text-muted-foreground mt-2">
          Welcome back, {session.user?.name || session.user?.email}
        </TypographyP>
      </div>

      <DashboardTabs userRole={(session.user as any)?.role} />
    </div>
  );
}
