// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
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