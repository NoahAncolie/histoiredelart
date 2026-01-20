'use client'
import { useState } from "react";
import jeuneLouis from "../../../../public/histoire_art/jeune-louis-xiv.jpg"
import gobelins from "../../../../public/histoire_art/louis-xiv-gobelins.jpg"
import mazarin from "../../../../public/histoire_art/Mazarin.jpg"
import versailles from "../../../../public/histoire_art/versailles.jpg"
import trophee from "../../../../public/histoire_art/trophee.jpg"
import vegetaux from "../../../../public/histoire_art/vegetaux.jpg"
import mascaron from "../../../../public/histoire_art/mascaron-louisxiv.jpg"
import enfilades from "../../../../public/histoire_art/enfilades.png"
import monogramme from "../../../../public/histoire_art/monogramme-louisxiv.png"
import bureauxiv from "../../../../public/histoire_art/bureau-louisxiv.jpg"
import commodeBoulle from "../../../../public/histoire_art/commode-boulle.jpg"
import Image, {StaticImageData} from "next/image";
import styles from "../../page.module.css";
import {Focus} from "@/component/focus";


export default function StyleLouisXIV () {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState(mascaron);

    function FocusImg({src, alt} : {src: StaticImageData, alt: string}) {
        return (
            <Image className={styles.tooltipImg} src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }

    return (
        <div className={styles.histoireArtCours}>
            {zoomState ? <div className={styles.bigImg}>
                <div className={styles.close} onMouseDown={() => {setZoom(false)}}>X</div>
                <Image src={zoomSrc} alt={"zoom"}/>
            </div> : <></>}

            <h1 className={styles.histoireArtCoursTitle}>Le <i>Style Louis XIV</i> de 1650 à 1700</h1>
            <div className={styles.coursContent}>
                <Focus content={focusState}/>

                <div id="historique">
                    <h2>Historique</h2>
                    
                    <p><u>Le style Louis XIV dure environ un demi-siècle de 1650 à 1700.</u></p>
                    <br/>
                    <p>
                        Cependant, le règne de Louis XIV sera le plus long de l'histoire de la monarchie, car il s'étendra de 1643 à 1715, soit 72 ans de pouvoir. <br/>
                        Louis XIV est né en 1638, et il n'a que cinq ans lors de la disparition de son père en 1643.
                    </p>
                    <Image src={jeuneLouis} alt="Peinture de Louis XIV par juste Egmont" className={styles.smallImg}/>
                    <p className={[styles.imgSubtitle, styles.centerText].join(' ')}>Peinture de Louis XIV par juste Egmont</p>
                    <br/>
                    <p>
                        Sa mère prend la charge de gouverner le pays et sur les conseils de Richelieu elle fait appel à <span className={styles.tooltip} onMouseOver={() => {
                        setFocus(<><FocusImg src={mazarin} alt="Portrait peint de Mazarin" /> <h2>Jules Mazarin</h2><h3>Cardinal catholique, diplomate et principal ministre d'État</h3><p>Jules Raymond Mazarin, connu sous son titre de cardinal Mazarin, né à Pescina, dans les Abruzzes, royaume de Naples, le 14 juillet 1602 et mort à Vincennes le 9 mars 1661, est un prélat, diplomate et homme politique français d'origine italienne, d'abord au service de la papauté, puis des rois de France Louis XIII et Louis XIV.</p></>)
                    }}>Mazarin</span> pour diriger le royaume. Mazarin était un grand collectionneur, amateur de meubles italiens, il fait tout naturellement appel à ses compatriotes, leur influence s'ajoute à celle de nombreux autres venus en particulier des Flandres et d'Espagne.
                        <br/>
                        Il ne peut exister dans ces conditions de style spécifiquement français.
                        <br/>
                        Ce n'est qu’après la mort de Mazarin que l'art français prendra son véritable nom.
                    </p>
                </div>

                <div id="caractere-generaux" className={styles.partieCours}>
                    <h2>Caractères Généraux</h2>
                    
                    <p>
                        Trois grandes lignes se dégagent principalement : <b>unité</b> , <b>majesté</b>, <b>distinction</b>
                    </p>
                    <h2 className={styles.h3Cours}>Unité</h2>
                    <p>
                        Colbert et Le Brun fondent aux <span className={styles.tooltip} onMouseOver={() => {setFocus(
                        <><FocusImg src={gobelins} alt="Louis XIV visitant la manufacture Royale de teinture et de draps Fins"/> <h2>La Manufacture des Gobelins</h2><h3>Le début du règne personnel de Louis XIV</h3><p>En 1667, la manufacture des Gobelins est transformée en « manufacture royale des meubles de la Couronne » sous l’impulsion de Colbert, devenu contrôleur général des finances deux ans plus tôt. Confiée au peintre Charles Lebrun, elle s’inscrit dans l’élaboration d’un mécénat d’Etat.</p></>
                    )}}>Gobelins</span> en 1667 la manufacture royale des meubles de la couronne, dont les membres sont nommés par le Roi. Le Brun devient le maître absolu de l'art français, il réunit sous ses ordres, sculpteurs, peintres, orfèvres, ébénistes, bronziers, tapissiers... <u>On obtient ainsi une unité jamais connue jusque-là</u>.
                    </p>
                    <h2 className={styles.h3Cours}>Majesté</h2>
                    <p>
                        La majesté est due à l'ampleur des compositions, à <b>l'ordre colossal</b> souvent adopté qui s'étend sur deux étages à la richesse des matériaux utilisés. <u>(mobilier en argent massif)</u>.
                    </p>
                    <h2 className={styles.h3Cours}>Distinction</h2>
                    <p>
                        La distinction est crée par le contraste entre la <b>somptuosité des intérieurs</b> et la <b>simplicité des façades</b>. L'originalité du style réside en une volonté très forte d'avoir un <u>art national bien français</u>.
                    </p>
                </div>

                <div id="architecture" className={styles.partieCours}>
                    <h2>Architecture</h2>
                    
                    <p>
                        La brique tant employée sous Louis XIII, est abandonnée et remplacée par la pierre
                        de taille. Le château de Versailles résume toute cette période, c'est un véritable temple
                        ou le Roi se fait vénérer tel un dieu antique.
                    </p>
                    <div className={styles.titusThermes}>
                        <Image className={styles.imageCentre} src={versailles} alt="Photo aérienne du chateau de Versailles" />
                        <p className={[styles.imgSubtitle, styles.centerText].join(' ')}><u>CHATEAU DE VERSAILLES</u> <i>Demeure principale du Roi de France Louis XIV</i></p>
                    </div>
                    <p>
                        Les façades sont généralement composées d'un haut soubassement qui est le rez de
                        chaussé, <u>sur lequel repose un ordre colossal de pilastres ou de colonnes engagées
                        d'une hauteur de deux étages</u>.
                    </p>
                    <br />
                    <p>
                        Les ferronneries gagnent en raffinement avec l'usage du bronze doré et du fer forgé. Des éléments tels que <span className={styles.tooltip} onMouseOver={() => {setFocus(
                        <><FocusImg src={trophee} alt="Dessins des décors de casques et rameaux Style Louis XIV" /> </>
                    )}} >trophée guerriers</span> et <span className={styles.tooltip} onMouseOver={() => {setFocus(
                        <><FocusImg src={vegetaux} alt="Décorations de motifs végétaux sur un ornement style et époque Louis XIV"/> </>
                    )}}>motifs végétaux</span> enrichissent les structures.
                    </p>
                    <br />
                    <p>
                        Sur le haut des immeubles une balustrade cerne les combles sur lesquels on retrouve :
                        <ul>
                            <li>des lucarnes percées dans la toiture</li>
                            <li>des avants corps à colonnes égayent la façade</li>
                            <li>des mascarons décorent la clé des arcs au rez de chaussé</li>
                            <li>des bas reliefs au premier étage</li>
                        </ul>
                    </p>
                    <Image src={mascaron} alt="Mascaron de cuivre époque Louis XIV" className={styles.smallImg}/>
                    <p className={[styles.imgSubtitle, styles.centerText].join(' ')}>Mascaron de fontaine d’époque Louis XIV, <span className={styles.tooltip} onMouseOver={() => {setFocus(
                        <><h2>Tête de faune</h2><h3>Sculpture de Michel-Ange</h3><p>La Tête de faune est une statue en marbre réalisée par Michel-Ange encore enfant vers 1488 et dont la trace a été perdue depuis les années 1490.</p></>
                    )}}>tête de Faune</span></p>
                </div>

                <div id="interieur" className={styles.partieCours}>
                    <h2>Architecture d'intérieur</h2>
                    
                    <p>
                        <i>Les espaces intérieurs se distinguent par leurs hauts plafonds et leurs pièces en enfilade. Les murs sont décorés de tapisseries, de tentures de damas ou de marbre coloré. Les lambris, souvent blancs ou peints, encadrent des cheminées imposantes, parfois surmontées de glaces.</i>
                    </p>
                    <Image src={enfilades} alt="pièces en enfilade" className={styles.smallImg}/>
                    <p className={[styles.imgSubtitle, styles.centerText].join(' ')}>Pièces en enfilade au <i>Palais de Versailles</i></p>
                    <br />
                    <p>
                        Pendant la période du style Louis XIV, nous rencontrons plus communément le
                        terme de <u>« salle à manger »</u> et celui de <u>« salon »</u> apparaît. Mais il ne correspond pas à
                        notre salon actuel, c'est plutôt <i>n hall de réception avec un plafond très haut</i>. Les
                        pièces sont disposée <b>en enfilade</b>.
                    </p>
                    <br />
                    <p>
                        La mouluration devient très riche dans <u>les
                        lambris en bois naturel ou peints en
                        blanc</u>.
                        Elle est le plus souvent à <b>grand
                        cadre</b>.
                        Les manteaux de cheminées sont
                        imposants, décorés de peintures ou de bas
                        reliefs, dans un premier temps, puis sont
                        décorés de glaces par la suite. Les murs
                        sont ornés de tapisseries, de tentures de
                        « Damas », ou de marbres de couleur.
                    </p>
                    <br />
                    <p className={styles.detail}>
                        <i>Le Damas est un tissu de soie ou de laine
                            monochrome dont le dessin mat sur fond
                            satiné est obtenu par le jeu des armures.</i>
                    </p>
                </div>

                <div id="decorations" className={styles.partieCours}>
                    <h2>Éléments de décoration</h2>
                    
                    <ul>
                        <li>Le soleil, symbole du Roi Soleil.</li>
                        <li>Les chiffres entrecroisés <span className={styles.tooltip} onMouseOver={() => {setFocus(
                            <><FocusImg src={monogramme} alt="Monogramme de Louis XIV"/> <i>Le monogramme de Louis XIV est inspiré par celui de Louis II</i></>
                        )}}>"LL" de Louis XIV</span>.</li>
                        <li>Motifs végétaux tels que feuilles de chêne, laurier et acanthe, fleurs en guirlandes.</li>
                        <li><span className={styles.tooltip} onMouseOver={() => {setFocus(
                            <><FocusImg src={commodeBoulle} alt="Commode réalisée pour Louis XIV par André-Charles Boulle" /><h2>Commode pour Louis XIV par Boulle</h2> </>
                        )}}>Motifs animaliers</span> : dragon ailé, griffes de lion, têtes de bélier et de dauphin.</li>
                        <li>La coquille, très populaire à la fin du style.</li>
                    </ul>
                    <div className={styles.titusThermes}>
                        <Image className={styles.imageCentre} src={bureauxiv} alt="Photo d'un bureau style Louis XIV avec le Monogramme du Roi au milieu" />
                        <p className={[styles.imgSubtitle, styles.centerText].join(' ')}><u>BUREAU LOUIS XIV</u> <i>Le monogramme au centre du meuble, sur les côtés et autour des serrures</i></p>
                    </div>
                </div>

                <div id="mobilier" className={styles.partieCours}>
                    <h2>Mobilier</h2>
                    
                    <p>
                        <i>
                            Le caractère principal du meuble Louis XIV, est qu'il n'y a pas de parallèle entre
                            le mobilier et l'architecture. L'architecture est sobre et le mobilier somptueux.
                            Le meuble Louis XIV ne présente plus rien d'un monument. La ligne courbe fait son
                            apparition.
                        </i>
                    </p>
                    <br />
                    <p>
                        Le mobilier Louis XIV se distingue par son opulence et sa décoration élaborée, souvent rehaussée de dorures et d'incrustations. André Charles Boulle perfectionne la technique de la marqueterie en "première partie" et "contrepartie". Les meubles emblématiques incluent :
                    </p>
                    <ul>
                        <li><b>Armoires :</b> De vastes dimensions, avec corniches saillantes.</li>
                        <li><b>Bureaux :</b> Plats ou à huit pieds, décorés de marqueteries complexes.</li>
                        <li><b>Commodes :</b> Invention majeure de l'époque, souvent attribuée à Boulle.</li>
                        <li><b>Sièges :</b> Bergères et fauteuils aux structures courbes, en bois sculpté et doré.</li>
                        <li><b>Tables :</b> Aux plateaux en marbre ou mosaïque, soutenues par des pieds sculptés et dorés.</li>
                        <li><b>Lits :</b> Lits à quenouilles, à la duchesse et de repos, intégralement tapissés.</li>
                    </ul>
                    <br />
                    <p>
                        <h2>Les techniques de marqueterie.</h2>
                        <br />
                        Les procédés de placage déjà employés sous Louis XIII se développent sous Louis
                        XIV. Les bâtis sont en chêne, en sapin ou en peuplier, (sapin et peuplier réservés pour
                        les panneaux).
                        <br />
                        <b>Andrée Charles Boulle</b> amène ce procédé à son apogée de perfection. Il
                        emploie le <u>cuivre</u>, <u>l'ébène</u>, <u>la corne</u>, <u>l'écaille de tortue</u>, <u>la nacre</u>, et <u>l'ivoire</u>.
                        La technique consiste à découper décors et fonds dans des plaques de cuivre et
                        d'écaille de même épaisseur et <i>d'utiliser la contre partie pour former un second
                        meuble</i>. Il en résulte ainsi deux exemplaires dont le premier, dit <b>« en première partie »</b>
                        est celui qui a le plus de valeur, son fond est en écaille et ses ornements en cuivre ou
                        étain. Le second dit <b>« en contrepartie »</b> offre le même décor mais son fond est en
                        cuivre et ses ornements en écaille.
                    </p>
                </div>

                <div id="artistes" className={styles.partieCours}>
                    <h2>Artistes</h2>
                    
                    <h2>Ébénistes</h2>
                    <ul>
                        <li>André Charles Boulle (1642-1732)</li>
                        <li>Pierre Golle</li>
                        <li>Alexandre Jean Oppenordt (1639-1715)</li>
                    </ul>
                    <h2>Ornemanistes</h2>
                    <ul>
                        <li>Charles Lebrun (1619-1690)</li>
                        <li>Jean Bérain (1640-1711)</li>
                        <li>Antoine Lepautre (1621-1691)</li>
                    </ul>
                    <h2>Sculpteurs</h2>
                    <ul>
                        <li>Philippe Caffiéri</li>
                        <li>François Girardon (1628-1715)</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
