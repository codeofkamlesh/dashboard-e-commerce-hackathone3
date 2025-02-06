"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // Track the current step of the flow (1 = Role, 2 = Credentials, 3 = OTP)
  const [role, setRole] = useState<string | null>(null); // State for storing selected role
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // State to check if OTP is sent

  // Sample credentials for each role
  const credentials: { [key: string]: { username: string; password: string } } = {
    admin: { username: 'admin', password: 'admin123' },
    inventoryManager: { username: 'inventory', password: 'inventory123' },
    shipmentManager: { username: 'shipment', password: 'shipment123' },
    // damagedProductsManager: { username: 'damaged', password: 'damaged123' },
  };

  // Step 1: Select Role
  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole); // Set selected role
    setStep(2); // Proceed to credentials step
  };

  // Step 2: Handle credentials submission (Username and Password)
  const handleCredentialsSubmit = () => {
    const roleCredentials = credentials[role!];
    if (roleCredentials.username === username && roleCredentials.password === password) {
      setStep(3); // Proceed to OTP step
    } else {
      alert('Invalid username or password.');
    }
  };

  // Step 3: Handle OTP Verification
  const handleVerify = () => {
    const fixedOtp = "123"; // Same OTP for all roles temporarily

    if (otp === fixedOtp) {
      // Redirect to the dashboard after successful OTP verification with the role
      router.push(`/dashboard/${role}`);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleOtpRequest = () => {
    if (role) {
      setIsOtpSent(true); // Mark OTP as sent
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-8 shadow-md rounded-lg">
        {step === 1 && !role && (
          <div>
            <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
            <div className="flex flex-col">
              {['admin', 'inventoryManager', 'shipmentManager'].map((roleOption) => (
                <button
                  key={roleOption}
                  onClick={() => handleRoleSelection(roleOption)}
                  className="py-2 px-4 mb-3 bg-blue-500 text-white rounded-lg"
                >
                  {roleOption}
                </button>
              ))}
            </div>
          </div>
        )}
          <div>
          <h2 className='font-bold'>These are fixed to check dashboard </h2>
          <p>Admin:____id = admin | pass= admin123</p>
          <p>Inv:____id = inventory | pass= inventory123</p>
          <p>Ship:_____id = shipment | pass= shipment123</p>
          {/* <p>Dmg:____id = damaged | pass=damaged123</p> */}
          <h2 className='font-bold'>Temporary OTP is same for all = 123</h2>
          </div>

        {step === 2 && role && (
          <div>
            <h2 className="text-xl font-bold mb-4">Login as {role}</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={handleCredentialsSubmit}
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        )}

        {step === 3 && isOtpSent && (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <button
              onClick={handleVerify}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Verify OTP
            </button>
          </div>
        )}

        {!isOtpSent && role && (
          <button
            onClick={handleOtpRequest}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg mt-4"
          >
            Send OTP
          </button>
        )}
      </div>

    </div>
  );
}
