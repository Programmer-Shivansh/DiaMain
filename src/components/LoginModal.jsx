
import React, { useState } from 'react';
import Vortex from './vortex';
import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import LoginModal from './LoginModal'; // Import LoginModal
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [publicKey, setPublicKey] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handlePublicKeySubmitted = (key) => {
    if (key) {
      localStorage.setItem('publicKey', key);
      setPublicKey(key);
      setIsLoggedIn(true);
      toast({
        title: 'Logged In',
        description: `You are now logged in with the public key: ${key}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate('/home'); // Redirect to the specific route, replace '/home' with your desired route
    } else {
      toast({
        title: 'Error',
        description: 'Please enter a public key.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="mx-auto h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Daichain Warfare
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Play, Earn, Repeat: Earn rewards in Real Time!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            onClick={onOpen}
          >
            Login
          </Button>
          <Button
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
            onClick={onOpen}
          >
            Create
          </Button>
        </div>
        <div className="fixed top-4 right-4 bg-black text-green-500 p-2 rounded-md">
          {isLoggedIn ? `Public Key: ${publicKey.slice(0, 4)}...` : 'Not Logged In'}
        </div>
      </Vortex>
      <LoginModal isOpen={isOpen} onClose={onClose} onPublicKeySubmitted={handlePublicKeySubmitted} />
    </div>
  );
}

// import React, { useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Text, useToast } from '@chakra-ui/react';

// const LoginModal = ({ isOpen, onClose, onPublicKeySubmitted }) => {
//   const [publicKey, setPublicKey] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const handleSubmit = () => {
//     setIsLoading(true);
//     try {
//       // Save the public key to local storage
//       localStorage.setItem('publicKey', publicKey);
//       onPublicKeySubmitted(publicKey);
//       onClose(); // Close the modal after submission
//     } catch (error) {
//       console.error('Error saving public key:', error);
//       toast({
//         title: 'Save Error',
//         description: 'Error saving the public key.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Login</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Text mb={4}>Enter your Public Key:</Text>
//           <Input
//             value={publicKey}
//             onChange={(e) => setPublicKey(e.target.value)}
//             placeholder="Public Key"
//           />
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             colorScheme="blue"
//             onClick={handleSubmit}
//             isLoading={isLoading}
//             mr={3}
//           >
//             Submit
//           </Button>
//           <Button variant="ghost" onClick={onClose}>
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default LoginModal;
