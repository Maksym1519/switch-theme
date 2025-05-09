import styles from './Button.module.scss';

const Button = ({children,handleClick,className}) => {
    return (
        <button className={`${styles.btn} ${className === 'dark' ? styles.dark : ''}`} onClick={handleClick}>{children}</button>
    )
}
export default Button;