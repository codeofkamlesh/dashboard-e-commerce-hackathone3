// import { getServerSession } from 'next-auth';

// import { redirect } from 'next/navigation';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// export default async function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect('/dashboard/login');
//   }
//   return <>{children}</>;
// }