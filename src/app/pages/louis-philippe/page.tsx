'use client'
import styles from '../../page.module.css'
import { useState } from "react";
import {Focus} from "@/component/focus";
import defaultImg from "../../../../public/histoire_art/arabesque.jpg"
import Image, {StaticImageData} from "next/image";

export default function StyleLouisPhilippe() {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState(defaultImg);

    function FocusImg({src, alt} : {src: StaticImageData, alt: string}) {
        return (
            <Image className={styles.tooltipImg} src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }

    return (
        <div className="histoire-art-cours">
            {zoomState && <div className="big-img">
                <div className="close" onMouseDown={() => setZoom(false)}>X</div>
                <Image src={zoomSrc} alt={"zoom"}/>
            </div>}

            <h1 className="histoire-art-cours-title">Le <i>Style Louis-Philippe</i></h1>
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique" className={styles.partieCours}>
                    <h2>Historique</h2>
                </div>

                <div id="architecture" className={styles.partieCours}>
                    <h2>Architecture</h2>
                </div>

                <div id="interieur" className={styles.partieCours}>
                    <h2>Architecture d'intérieur</h2>
                </div>

                <div id="decorations" className={styles.partieCours}>
                    <h2>Éléments décoratifs</h2>
                </div>

                <div id="mobilier" className={styles.partieCours}>
                    <h2>Mobilier</h2>
                </div>

                <div id="sieges" className={styles.partieCours}>
                    <h2>Sièges</h2>
                </div>

                <div id="artistes" className={styles.partieCours}>
                    <h2>Artistes</h2>
                </div>
            </div>
        </div>
    );
};

