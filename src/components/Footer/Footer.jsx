import styles from './footer.module.scss';
import NavMenu from '@components/NavMenu/NavMenu';
export default function Footer(){
    return (
        <footer className={styles.site__footer}>
            <div className='container'>
                <NavMenu/>
            </div>
        </footer>
    );
}