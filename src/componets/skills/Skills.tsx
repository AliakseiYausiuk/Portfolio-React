import React, {useMemo} from 'react';
import styles from './skills.module.scss'
import commonStyles from '../../styles/common.module.scss'
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const Skills = React.memo(() => {
    const state = useSelector((state: RootState) => state);

    const isSkills = useMemo(() => {
        return state.user.skills.map(el => {
            return (
                <div key={el.id} className={styles.skills__item}>
                    <div className={styles.skills__progress}></div>
                    <p className={styles.skills__text}>{el.skill}</p>
                </div>
            )
        })

    }, [state.user.skills]);


    return (
        <section className={styles.skills}>
            <div className={commonStyles.container}>
                <hr className={styles.skills__separator}/>
                <h3 className={styles.skills__title}>MY SKILLS</h3>
                <div className={styles.skills__wrapper}>
                    {isSkills}
                </div>
                <hr className={styles.skills__separator}/>
            </div>
        </section>
    )
})
