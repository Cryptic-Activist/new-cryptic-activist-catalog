'use client';

import { Form, Input } from '@/components/forms';
import { Template } from '@/layouts/Modals';
import { loginResolver } from './zod';

const Login = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Template>
      <Form onSubmit={onSubmit} resolver={loginResolver}>
        <Input
          type="text"
          name="username"
          id="username"
          required
          label="Username"
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          label="Password"
          placeholder="Password"
        />
      </Form>
    </Template>
  );
};

export default Login;
