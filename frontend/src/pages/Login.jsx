import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import EmailInput from "../components/EmailInput";
import VerificationCode from "../components/VerificationCode";
import PasswordLogin from "../components/PasswordLogin";
import routes from "../routes/Routes";
import { useLoginStep, useEmail } from "../stores/login";

const Login = () => {
  const { step, setStep } = useLoginStep();
  const { setEmail } = useEmail();
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = (email) => {
    // Request to Back to Find Out That User Was Going to Sign Up or Login
    // Show in the case of Error
    setUserExists(true); // Back Answer
    setEmail(email);
    setStep("verification");
  };

  const handleVerificationSuccess = () => {
    // In both login and registration modes should set token and operations required
    // Show in the case of Error
    if (userExists) {
      navigate(routes.home);
    } else {
      navigate(routes.completeProfile);
    }
  };

  const handlePasswordLoginSuccess = () => {
    // Perform the operations required for entry
    navigate(routes.home);
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <PageTransition key={step}>
        {step === "email" && (
          <EmailInput handleEmailSubmit={handleEmailSubmit} />
        )}
        {step === "verification" && (
          <VerificationCode
            handleVerificationSuccess={handleVerificationSuccess}
            userExists={userExists}
          />
        )}
        {step === "password" && (
          <PasswordLogin
            handlePasswordLoginSuccess={handlePasswordLoginSuccess}
            setUserExists={setUserExists}
          />
        )}
      </PageTransition>
    </div>
  );
};

export default Login;
