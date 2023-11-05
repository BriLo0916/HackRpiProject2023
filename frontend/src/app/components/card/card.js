import React from 'react';
import styles from './card.module.css';

function Card(props) {
    return (
        <>
            <div className={styles["card"]}>
                <img src={props.image} alt="My Image" />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} className={styles["card-link"]}>{props.linkDescription}</a>
            </div>
        </>
    );
    // return (
    //     <>
    //         <div className={styles["container"]}>
    //             <div className={styles["card-container1"]}>
    //                 <a href="https://www.youtube.com/@Psych2go">Psych2go</a>
    //             </div>
    //             <br></br>
    //             <div className={styles["card-container2"]}>
    //                 <a href="https://www.apa.org/topics/crisis-hotlines">APA Crisis Hotlines</a>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Card;