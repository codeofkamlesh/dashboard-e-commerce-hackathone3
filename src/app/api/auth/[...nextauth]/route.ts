// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import { NextRequest } from "next/server";

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           throw new Error("Email and password are required");
//         }

//         const users = [
//           { id: "1", name: "Admin User", email: "admin@example.com", password: "password123", role: "admin" },
//           { id: "2", name: "Inventory Manager", email: "inventory@example.com", password: "inventoryPass", role: "inventoryManager" },
//           { id: "3", name: "Shipment Manager", email: "shipment@example.com", password: "shipmentPass", role: "shipmentManager" },
//           { id: "4", name: "Damaged Products Manager", email: "damaged@example.com", password: "damagedPass", role: "damagedProductsManager" },
//         ];

//         const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);
//         if (!user) return null; // Invalid credentials

//         return { id: user.id, name: user.name, email: user.email, role: user.role };
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/login",
//   },
// };

// // ✅ Corrected handler for Next.js 14 API routes
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
