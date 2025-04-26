// components/PasswordStrength.jsx
import React, { useMemo } from "react";

const PasswordStrength = ({ password }) => {
  const strength = useMemo(() => {
    let score = 0;
    if (!password) return 0;

    // Criteria
    if (password.length >= 8) score += 1;
    if (password.match(/[A-Z]/)) score += 1;
    if (password.match(/[0-9]/)) score += 1;
    if (password.match(/[^A-Za-z0-9]/)) score += 1;

    return (score / 4) * 100;
  }, [password]);

  const getStrengthLevel = () => {
    if (strength >= 75) return "Strong";
    if (strength >= 50) return "Medium";
    if (strength >= 25) return "Weak";
    return "Very Weak";
  };

  const getColor = () => {
    if (strength >= 75) return "bg-green-500";
    if (strength >= 50) return "bg-yellow-500";
    if (strength >= 25) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-3 space-y-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getColor()} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${strength}%` }}
        />
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-medium">Password Strength:</span> {getStrengthLevel()}
      </div>
      <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
        <div className="flex items-center">
          <CheckIcon valid={password?.length >= 8} />
          Minimum 8 characters
        </div>
        <div className="flex items-center">
          <CheckIcon valid={password?.match(/[A-Z]/)} />
          Uppercase letter
        </div>
        <div className="flex items-center">
          <CheckIcon valid={password?.match(/[0-9]/)} />
          Number
        </div>
        <div className="flex items-center">
          <CheckIcon valid={password?.match(/[^A-Za-z0-9]/)} />
          Special character
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ valid }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 mr-1 ${valid ? "text-green-500" : "text-gray-400"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    {valid ? (
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    ) : (
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    )}
  </svg>
);

export default PasswordStrength;