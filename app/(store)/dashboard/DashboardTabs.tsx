"use client";

import { useState } from "react";
// Since shadcn tabs are potentially not installed yet, simulating with standard buttons for now
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function DashboardTabs({ userRole }: { userRole?: string }) {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <Button 
          variant={activeTab === "orders" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => setActiveTab("orders")}
        >
          Order History
        </Button>
        <Button 
          variant={activeTab === "settings" ? "default" : "ghost"}
          className="justify-start"
          onClick={() => setActiveTab("settings")}
        >
          Account Settings
        </Button>
        {userRole === "admin" && (
          <Button 
            variant={activeTab === "admin" ? "default" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("admin")}
          >
            Admin Panel
          </Button>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-card rounded-lg border p-6 min-h-[400px]">
        {activeTab === "orders" && (
          <div className="space-y-4">
            <TypographyH2>Order History</TypographyH2>
            <TypographyP className="text-muted-foreground">
              You haven't placed any orders yet.
            </TypographyP>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-4">
            <TypographyH2>Account Settings</TypographyH2>
            <TypographyP className="text-muted-foreground">
              Manage your personal information, address, and login security.
            </TypographyP>
            {/* Mocked setting forms would go here */}
          </div>
        )}

        {activeTab === "admin" && (
          <div className="space-y-4">
            <TypographyH2>Admin Control Panel</TypographyH2>
            <TypographyP className="text-muted-foreground">
              Manage 3D prints, user accounts, and fulfillments.
            </TypographyP>
          </div>
        )}
      </main>
    </div>
  );
}
