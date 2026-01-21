'use client'
import styles from "../../page.module.css";
import { useState } from "react";
import scarabe from "@/assets/histoire_art/egypte/scarabe.png"
import Image from "next/image";
import {Focus} from "@/component/focus";

export default function ArtEgyptien () {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState("");

    function FocusImg({src, alt} : {src: string, alt: string}) {
        return (
            <img className={styles.tooltipImg} src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }

    return (
        <div className={styles.histoireArtCours}>
            {zoomState && <div className={styles.bigImage}>
            <div className={styles.close} onMouseDown={() => setZoom(false)}>X</div>
                <Image src={zoomSrc} alt="Image"/>
            </div>}

            <Image src={scarabe} alt="scarabe" className={styles.imageFond} />

            <h1 className={styles.histoireArtCoursTitle}>Les Caractéristiques de <i>l’Art Égyptien</i><br />de -4000 à -480</h1>
            <div className={styles.coursContent}>
                <Focus content={focusState}/>

                <div id="historique" className={styles.partieCours}>
                    <h2>Historique</h2>

                    <p><i>L’art égyptien s’étend de <b>4 000 à 480</b> avant Jésus-Christ.</i></p>
                    <br />
                    <p>L’histoire de la civilisation égyptienne est la plus ancienne que nous connaissions <b>(4 000 ans à 5 000 ans av. J.-C.)</b>.</p>
                    <br />
                    <p>Elle a été très brillante, et les vestiges qu’elle nous a laissés sont remarquables, notamment pour l’étude de l’art. Son évolution est très lente au cours du temps.</p>
                    <br />
                    <p>
                        Les pharaons (souverains égyptiens) se firent construire des tombeaux : des <b>pyramides</b> pour les plus puissants, ou des <b>mastabas</b>, monuments funéraires de l’Égypte antique en forme de trapèze.
                        Chronologiquement, ils sont les premiers à apparaître (les mastabas). Ils sont <b>utilisés par les pharaons</b>, mais <b>aussi par les nobles</b>. La taille du monument reflète la position sociale du défunt.
                    </p>
                </div>

                <div id="caracteristiques" className={styles.partieCours}>
                    <h2>Les caractéristiques</h2>
                    <p>
                        Les constructions sont très souvent colossales, car elles doivent évoquer l’éternité grâce aux effets de masse et aux lignes sobres et géométriques : pyramides, obélisques, temples aux colonnes trapues, avec des chapiteaux souvent lotiforme ou campaniformes supportant un entablement et une toiture en terrasse.
                        <b>C’est un art à caractère religieux.</b>
                        <br />
                        L’homme a un double, qui survit après la mort, mais seulement si le corps est bien conservé. On pratique donc la momification, et la dépouille du défunt est cachée dans les lieux cités précédemment.
                    </p>
                    <br />
                    <p>
                        Dans leur architecture, les Égyptiens utilisaient le calcaire et le granit.
                    </p>
                    <br />
                    <p>
                        Pour la sculpture, ils travaillaient le granit, le porphyre et le calcaire, souvent rehaussé de peinture et de bois :
                    </p>
                    <ul>
                        <li><b>Granit</b> : roche formée principalement de quartz</li>
                        <li><b>Porphyre</b> : roche volcanique constituée de cristaux rouges ou verts ; • Calcaire : roche formée essentiellement de carbonate de calcium.</li>
                    </ul>
                    <p>La terre cuite et le bronze étaient utilisés principalement pour fabriquer des statuettes. L’or et les pierres précieuses servaient à faire des bijoux.</p>
                </div>

                <div id="decorations" className={styles.partieCours}>
                    <h2>Éléments de décoration</h2>
                </div>

                <div id="animaux" className={styles.partieCours}>
                    <h2>Les animaux dans l’Égypte antique</h2>
                </div>

                <div id="chapiteaux" className={styles.partieCours}>
                    <h2>Les chapiteaux</h2>
                </div>

                <div id="mobilier" className={styles.partieCours}>
                    <h2>Le mobilier égyptien</h2>
                </div>

                <div id="peinture" className={styles.partieCours}>
                    <h2>La peinture dans l’Égypte ancienne</h2>
                </div>

                <div id="platrerie" className={styles.partieCours}>
                    <h2>La plâtrerie dans l’Égypte ancienne</h2>
                </div>

            </div>
        </div>
    );
};