import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

type IOpcao = typeof opcoes[0];

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
    const buttonLabel = nomeOrdenador || 'Ordenar por'
    const classButton = classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
    })
    const classDiv = classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
    })

    const ElArrow =  aberto ? MdKeyboardArrowUp : MdKeyboardArrowDown;

    function handleClick() {
        setAberto(!aberto)
    }

    function handleBlur() {
        setAberto(false)
    }

    function handleOptionClick(opcao: IOpcao) {
        setOrdenador(opcao.value)
    }

    return (
        <button 
            className={classButton} 
            onClick={handleClick}
            onBlur={handleBlur}
            >
            <span>{buttonLabel}</span>

            <ElArrow size={20} />

            <div className={classDiv}>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={() => handleOptionClick(opcao)}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}
