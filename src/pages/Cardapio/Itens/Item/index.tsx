import styles from './Item.module.scss';
import classNames from 'classnames';
import TagsPrato from 'components/TagsPrato';
import { IPrato } from 'types/Prato';

export default function Item(props: IPrato) {
    const {
        title, 
        description,
        category,
        size,
        serving,
        price,
        photo
    } = props;

    const classCategories = classNames({
        [styles.item__tipo]: true,
        [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true
    });

    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}><img src={photo} alt={title} /></div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <TagsPrato {...props} />
            </div>
        </div>
    );
}
