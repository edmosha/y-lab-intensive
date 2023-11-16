import React, { FC, useState } from 'react';
import styles from './AuthForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormValues } from '@/types/types';
import Input from '@/comonents/Input/Input';
import userIcon from '../../assets/icons/user-icon.svg';
import eyeIcon from '../../assets/icons/eye-icon.svg';

const AuthForm: FC = () => {
  const {
    register, handleSubmit, formState: {errors}, formState, reset,
  } = useForm<IAuthFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const [passwordState, setPasswordState] = useState<'password' | 'text'>('password');

  const onSubmit: SubmitHandler<IAuthFormValues> = (data) => {
    console.log(data)
    if (data.email === 'admin@gmail.com' && data.password === 'admin') {
      alert('Вы авторизованны!');
      reset();
      return;
    }
    alert('Неверный логин или пароль');
  };

  return (
    <section className={styles.authForm}>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='E-mail'
          name='email'
          register={register}
          required='Это обязательное поле'
          icon={userIcon.src}
          errors={errors} />

        <Input
          label='Пароль'
          name='password'
          type={passwordState}
          register={register}
          required='Это обязательное поле'
          icon={eyeIcon.src}
          onIconClick={() => setPasswordState(passwordState === 'password' ? 'text' : 'password')}
          errors={errors} />

        <button
          className={styles.submitBtn}
          type='submit'
          disabled={!formState.isValid || !formState.isDirty}>
          Войти
        </button>
      </form>
    </section>
  );
};

export default AuthForm;