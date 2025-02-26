'use client';

import { resetNavigationBar, toggleModal } from '@/store';
import { useEffect, useState } from 'react';

import { copyToClipboard } from '@/utils';
import { useRegister } from '@/hooks';

const usePrivateKeys = () => {
  const { register } = useRegister();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPrivateKeysToClipboard = () => {
    if (register.privateKeys) {
      const pksString = register.privateKeys.join(', ');
      copyToClipboard(pksString);
      setIsCopied((prev) => !prev);
    }
  };

  const onAccountVerification = () => {
    resetNavigationBar();
    toggleModal('verifyAccount');
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }, [isCopied]);

  return { handleCopyPrivateKeysToClipboard, onAccountVerification, isCopied };
};

export default usePrivateKeys;
