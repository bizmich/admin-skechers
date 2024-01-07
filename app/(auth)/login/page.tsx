import LoginForm from '@/components/forms/login-form';
import Text from '@/components/ui/text';

import React from 'react';

const LoginPage = () => {
  return (
    <div className='bg-secondary flex h-screen w-full items-center justify-center'>
      <div className='bg-background rounded-md px-10 py-8'>
        <Text className='pb-5 text-3xl font-bold'>Вход в личный кабинет</Text>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
