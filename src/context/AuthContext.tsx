// "use client";
// import { createContext, useContext, useState } from "react";

// interface AuthContextType {
//   user: { name: string; role: string } | null;
//   isAuthenticated: boolean;
//   role: string | null;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<{ name: string; role: string } | null>(null);

//   const login = async (email: string, password: string) => {
//     setUser({ name: "Admin User", role: "admin" });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated: !!user, role: user?.role || null, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };
