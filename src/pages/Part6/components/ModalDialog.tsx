import { useEffect } from 'react';

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
  content: string;
}

function ModalDialog({ open, onClose, content }: ModalDialogProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Function to handle the overlay click
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div>
      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleOverlayClick} // Attach click handler to the overlay
        >
          <div className="bg-white w-1/2 p-4">
            <div className="flex justify-end">
              <button className="text-red-500" onClick={onClose}>
                X
              </button>
            </div>
            <div>{content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDialog;
