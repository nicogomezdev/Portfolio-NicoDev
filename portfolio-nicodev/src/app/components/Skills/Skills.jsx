import GhostCursor from '@/app/components/ui/GhostCursor/GhostCursor'
import styles from './Skills.module.css'
import DecryptedText from '../ui/DecryptedText/DecryptedText';

export default function Skills(){

  return(
  
    <section className={styles.ContainerSkill}>
      <div style={{ height: 300, position: 'relative',  }}>
      <GhostCursor color="#B19EEF" brightness={1}edgeIntensity={0} 

      // Trail and motion
      trailLength={50}
      inertia={0.5}

      // Post-processing
      grainIntensity={0.05}
      bloomStrength={0.1}
      bloomRadius={1.0}
      bloomThreshold={0.025}

      // Fade-out behavior
      fadeDelayMs={1000}
      fadeDurationMs={1500}/>
      <h2 className={styles.SkillTxt}><div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="MY SKILLS"
  animateOn="view"
  revealDirection="end"
  speed={400}
  className="revealed"
  parentClassName="all-letters"
  encryptedClassName="encrypted"

/>
  </div>
    </h2>
  </div>
    </section>
    );
}