import SignupForm from '../../components/SignupForm/SignupForm';

function SignupPage() {
  const handleSignup = (formData) => {
    console.log('Signup data submitted:', formData);
  };

  return (
    <div>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
}

export default SignupPage;
