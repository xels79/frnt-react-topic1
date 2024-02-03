import styles from './style.module.scss';
export function Burger(){
    return (
        <div className={styles.burger__button}>
            {Array(3).keys().map( key => <span className={styles.burger__line} key={key}/>)}
        </div>
    );
}