import { InputType } from '@/types/commonType';
import Button from '@/common/Button';
import ableEye from '@/../../public/assets/images/ableEye.svg';
import disableEye from '@/../../public/assets/images/disableEye.svg';
import star from '@/../../public/assets/images/star.svg';
import Image from 'next/image';

import type { RegisterContentType } from '@/types/signType';

const Input = ({
  register,
  type,
  placeholder,
  errors,
  ...props
}: InputType) => {
  const { id, password, confirmPassword, nickName, phoneNumber, changeType } =
    props;

  const registerContent =
    id || password || confirmPassword || nickName || phoneNumber;

  return (
    <div>
      <label htmlFor="user-input">
        <p>{registerContent}</p>
        <Image src={star} alt="blue star" />
      </label>
      <input
        {...register(registerContent as RegisterContentType, {
          required: true,
        })}
        id="user-input"
        type={type}
        placeholder={placeholder}
      />
      {(password || confirmPassword) && (
        <>
          {type === 'password' ? (
            <Image src={disableEye} alt="가리기" onClick={changeType} />
          ) : (
            <Image src={ableEye} alt="보기" onClick={changeType} />
          )}
        </>
      )}
      {errors?.message && (
        <p>
          <span>{errors.message}</span>
        </p>
      )}
      <Button label="중복확인" />
    </div>
  );
};

export default Input;
