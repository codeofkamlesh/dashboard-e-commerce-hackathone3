import { client } from "./client";

// Simulate authentication (Replace with actual authentication logic)
export const getAuthUser = async (email?: string, password?: string) => {
  if (email && password) {
    // Fetch user from Sanity
    const query = `*[_type == "user" && email == $email && password == $password][0]`;
    const user = await client.fetch(query, { email, password });
    return user;
  }
  return null;
};

// Simulate OTP verification
export const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
  const query = `*[_type == "user" && email == $email && otp == $otp][0]`;
  const user = await client.fetch(query, { email, otp });
  return !!user;
};
