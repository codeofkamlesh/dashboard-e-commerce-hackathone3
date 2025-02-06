// app/dashboard/[role]/page.tsx (Dashboard page)
import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import RoleBasedView from "../../components/RoleBasedView";
// import DashboardCards from "../../components/DashboardCards";

export default async function DashboardPage({ params }: { params: { role: string } }) {
  // Fetch session
  const session = await getServerSession();

  if (!session || !session.user?.role) {
    // redirect("/login"); // Redirect to login if session or role is not present
    console.log("Session or role not present");
    return null;
  }

  const userRole = session.user.role;

  // If the user role doesn't match the URL role, redirect to login
  if (userRole !== params.role) {
    // redirect("/login");
    console.log("Role mismatch");
    return null;
  }

  // If the role matches, render the dashboard
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard - {params.role}</h1>
      {/* <RoleBasedView role={params.role}> */}
        {/* <DashboardCards role={params.role} /> */}
      {/* </RoleBasedView> */}
    </div>
  );
}
