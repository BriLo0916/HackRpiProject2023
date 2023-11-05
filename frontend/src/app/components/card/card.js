import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';

function Card(props) {
    return (
        <>
            <div className={styles["card"]}>
                <Image 
                    src={props.image} 
                    alt="My Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '50%', height: 'auto' }}
                />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link} className={styles["button"]}target="_blank">{props.linkDescription}</a>
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