"use client";
import { Button } from "@/components/ui/button";
import { useOrganization, UserButton } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 p-6 h-[calc(100%-80px)]">
      {}
      {!organization ? (
        <EmptyOrg />
      ) : (
        <>
          <BoardList orgId={organization.id} query={searchParams} />
        </>
      )}
    </div>
  );
}
