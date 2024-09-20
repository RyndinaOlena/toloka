'use client'
import React from 'react'
import styles from '../../_styles/scss/event.module.scss'
import clsx from "clsx";
import { nunito } from '../../_components/fonts';
import { usePathname } from 'next/navigation';
import img from '../../_images/fruit-8773085_1280.jpg'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
const Event = () => {
    const pathname = usePathname();
    const paths = pathname.split('/');
    const eventid = paths[paths.length - 1]

    return (
        <div className={styles.event_container}>
            <div className={styles.event}>
                <div className={styles.main_img}></div>
                <div>
                    <h1 className={clsx(styles.event_title, nunito.className)}>Our Event</h1>
                    <h3>Home - Event</h3>
                </div>
            </div>
            {eventid ? (
                <div >
                    <div className={styles.event_hero}>
                        <div className={styles.event_name_action}>
                            <h1 className={styles.event_name_action2}>{eventid}Innovate 2024: Unleashing the Power of Change</h1>
                            <p className={styles.event_text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit nisi, fringilla eu lobortis eget, scelerisque nec risus. Aliquam eget dui vitae mi venenatis hendrerit. Cras nec imperdiet quam. Donec ullamcorper tempor odio ut blandit. Proin id dignissim nibh. Ut eu augue purus. Morbi vulputate efficitur neque sit amet mattis.</p>
                            <ul className={styles.event_list}>
                                <li className={styles.event_list_element}><span><FaCheck /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className={styles.event_list_element}><span><FaCheck /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className={styles.event_list_element}><span><FaCheck /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className={styles.event_list_element}><span><FaCheck /></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                        <div className={styles.event_img_action}>
                            <Image src={img} alt='img' className={styles.event_hero_img} />
                        </div>
                    </div>

                    <div className={styles.event_items}>

                        <div className={styles.event_sreaker_item}>
                            <div className={styles.event_sreaker_icon}>jhfhg</div>
                            <h3>Speaker</h3>
                            <p>Maria Lopez</p>
                            <p>Environmental Advocate</p>
                        </div>

                        <div className={styles.event_sreaker_item}><h3>Venue</h3>
                            <p><span className={styles.event_sreaker_icon}></span>Ballroom Extra Hotel,</p>
                            <p>Pekanbaru City</p>
                        </div>
                        <div className={styles.event_sreaker_item}><h3>Date</h3>
                            <p><span className={styles.event_sreaker_icon}></span>Monday, Jan 23, 2024</p>
                            <p> 10.00 AM - 11.30 AM</p></div>
                    </div>
                    <div>
                        <p>
                            {/* text */}
                        </p>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div><h2>Susbcribe Our Newsletter</h2>
                        <input></input>
                        <button></button>
                    </div>
                </div>

            ) : (
                <p>Йде завантаження...</p>
            )}
        </div>
    );
};

export default Event;
