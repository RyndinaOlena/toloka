'use client'
import React from 'react'
import clsx from "clsx";
import { nunito } from '../_components/fonts';
import { MdOutlineCheck } from "react-icons/md";
import styles from '../_styles/scss/event.module.scss'
const Events = () => {

    return (
        <div>
            <div className={styles.invoice_container}>
                <div className={styles.event}>
                    <div className={styles.main_img}></div>
                    <div>
                        <h1 className={clsx(styles.event_title, nunito.className)}>Our Event</h1>
                        <h3> Home - Event</h3>
                    </div>
                </div>
                {/* {eventid ? ( */}
                <div>
                    <div>
                        {/* <h1>{eventid}</h1> */}
                        {/* <p>Дані про рахунок-фактуру для ID: {eventid}</p> */}
                        <h1 className={styles.event_information}>Innovate 2024: Unleashing the Power of Change</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit nisi, fringilla eu lobortis eget, scelerisque nec risus. Aliquam eget dui vitae mi venenatis hendrerit. Cras nec imperdiet quam. Donec ullamcorper tempor odio ut blandit. Proin id dignissim nibh. Ut eu augue purus. Morbi vulputate efficitur neque sit amet mattis.</p>
                        <ul>
                            <li><MdOutlineCheck className={styles.list_icon} /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li><MdOutlineCheck />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li><MdOutlineCheck />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li><MdOutlineCheck />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div className={styles.main_img}>
                        {/* img */}
                    </div>
                    <ul>
                        <li>Speaker</li>
                        <li>Venue</li>
                        <li>Date</li>
                    </ul>
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
                {/* 
                ) : (
                    <p>Йде завантаження...</p>
                )} */}
            </div>

        </div>
    )
}
export default Events