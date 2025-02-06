'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data: session } = useSession();
  if (!session) {
    redirect('/dashboard/login');
  }
  return <>{children}</>;
}