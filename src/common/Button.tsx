import styles from '@/styles/components/sign/HookForm.module.scss';
import { ButtonType } from '@/types/commonType';
const Button = ({ id, phoneNumber, label }: ButtonType) => {
  return (
    <button
      className={
        id || phoneNumber
          ? styles['form-content__box__btn__confirm']
          : styles['form-content__box__btn']
      }
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;
