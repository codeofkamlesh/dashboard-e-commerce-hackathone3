import React, { useState } from 'react';

interface TwoFactorAuthProps {
  onVerify: (code: string) => void;
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    if (otp.trim() !== '') {
      onVerify(otp); // Call the onVerify function with the OTP
    } else {
      alert('Please enter a valid OTP.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-bold mb-2">Two-Factor Authentication</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Verify
      </button>
    </div>
  );
};

export default TwoFactorAuth;
