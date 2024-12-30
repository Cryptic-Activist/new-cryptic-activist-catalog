'use client';

import React, { useState } from 'react';

const useVerifyAccount = () => {
  const [privateKeys, setPrivateKeys] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [privateKeysArr, setPrivateKeysArr] = useState<string[]>(
    Array(12).fill('')
  );

  const checkAllFields = (): boolean => {
    if (privateKeys) {
      for (let i = 0; i < privateKeysArr.length; i += 1) {
        if (privateKeysArr[i].length === 0) {
          return false;
        }
      }
    } else if (username.length === 0) {
      return false;
    }

    return true;
  };

  return {};
};

export default useVerifyAccount;
