import styles from './style.module.scss';
export default function Burger(){
    return (
        <span className={styles.burger__button}>
            {[...Array(3).keys()].map( key => <span className={styles.burger__line} key={key}/>)}
        </span>
    );
}