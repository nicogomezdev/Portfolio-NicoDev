import styles from './Footer.module.css'
import RippleGrid from '../ui/RippleGrid/RippleGrid';

export default function Footer(){
    return(
        <footer className={styles.Foot}>
            <div style={{position: 'relative', height: '20px', overflow: ''}}>
  <RippleGrid
    enableRainbow={true}
    gridColor="#030c40"
    rippleIntensity={0.22}
    gridSize={10}
    gridThickness={27}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.8}
    gridRotation={120}/>
</div>
            <h3>CONCEPT, DESIGNED AND DEVELOPMENT BY NICODEV, CRAFTED WITH REACT AND NEXT.JS <br/> ALWAYS LEARNING ALWAYS BUILDING</h3>
        </footer>
        
    );
}