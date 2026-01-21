'use client'
import styles from "./page.module.css";
import Link from "next/link";
import {getEvents} from "@/app/data/events";
import {useState} from "react";

export default function Home() {
    const [currentLink, setCurrentLink] = useState("");
    const events = getEvents()

    const observe = (element: HTMLDivElement | null) => {
        if (!element) return;
        const io = new IntersectionObserver(callBack, {threshold: 1});
        io.observe(element);
    };

    function callBack(entries: IntersectionObserverEntry[]) {
        entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            const i = target.dataset.index!;
            if (entry.isIntersecting) {
                setCurrentLink(`link-${i}`)
            }
        })
    }

    function scrollTo(id: string) {
        let e = document.getElementById(id)!;
        e.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
            inline: 'center'
        });
    }

  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <ul className={styles.events}>
                <h1>Histoire de l'Art</h1>

                {events.map((event, index) =>
                    <li key={index} id={event.link} >
                        <div className={styles.event} data-index={index} ref={observe}>
                            <Link href={`/pages/${event.link}`} className={styles.link}>
                                <p className={styles.date}>{event.date}</p>
                                <h2>{event.name}</h2>
                                <h3>{event.subtitle}</h3>
                                <p className={styles.short}>{event.short}</p>
                            </Link>
                        </div>
                    </li>
                )}
            </ul>

            <ul className={styles.scroller}>
                {events.map((event, index) =>
                <li key={index} className={currentLink === `link-${index}` ? styles.liHover : ""} onClick={() => scrollTo(event.link)} id={`link-${index}`}>{event.name}</li>
                )}
            </ul>
        </main>
    </div>
  );
}
