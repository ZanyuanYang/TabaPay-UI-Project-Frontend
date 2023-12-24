import React, { useState, useEffect, useContext } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AuthContext } from '@/contexts/auth_context';

type AlertDestructiveProps = {
  description: string;
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>;
};

function AlertDestructive(props: AlertDestructiveProps) {
  const { description, setErrorDescription } = props;
  // const { setErrorDescription } = useContext(AuthContext);

  // State to manage visibility of the alert
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // useEffect hook to hide the alert after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setErrorDescription('');
    }, 4000); // 4000ms = 4s

    // Cleanup function to clear the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Conditionally render the Alert based on isVisible state
  return isVisible ? (
    <Alert
      variant="destructive"
      className="animate__animated animate__bounceInRight fixed top-10 right-10 z-[60] w-80"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  ) : null;
}

export default AlertDestructive;
