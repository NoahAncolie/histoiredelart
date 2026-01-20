'use client'
import { useState } from "react";
import {Focus} from "@/component/focus";
import styles from "../../page.module.css"


export default function ArtGrec () {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState("");

    function FocusImg({src, alt} : {src: string, alt: string}) {
        return (
            <img className={styles.tooltipImg} src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }

    return (
        <div className={styles.histoireArtcours}>
            {zoomState && <div className={styles.bigImg}>
                <div className={styles.close} onMouseDown={() => setZoom(false)}>X</div>
                <img src={zoomSrc} />
            </div>}

            <h1 className={styles.histoireArtCoursTitle}>Les <i>Caractéristiques de l’Art Grec</i></h1>
            <div className={styles.coursContent}>
                <Focus content={focusState}/>

                <div id="caracteres-generaux" className={styles.partieCours}>
                    <h2>Caractères généraux</h2>
                </div>

                <div id="architecture" className={styles.partieCours}>
                    <h2>Architecture grecque</h2>
                </div>

                <div id="ordres" className={styles.partieCours}>
                    <h2>Les ordres grecs</h2>
                </div>

                <div id="mobilier" className={styles.partieCours}>
                    <h2>Le mobilier grec</h2>
                </div>

                <div id="sculpture" className={styles.partieCours}>
                    <h2>La sculpture grecque</h2>
                </div>

                <div id="decorations" className={styles.partieCours}>
                    <h2>Éléments de décoration</h2>
                </div>

            </div>
        </div>
    );
};
