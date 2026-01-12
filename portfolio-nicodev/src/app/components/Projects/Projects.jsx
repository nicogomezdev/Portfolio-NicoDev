import Cards from '../ui/Cards/Cards'
import styles from './Projects.module.css'

export default function Projects(){
    return(
        <section className={styles.contentProjects}>
            <h2>MY PROJECTS</h2>
            <div className={styles.projectsGrid}>
                <Cards href={'https://github.com/nicogomezdev/CRUD-DJANGO'}>
                <h3>LIBRERIA</h3>
                <p>CRUD de libreria con imagenes, ejecutado en DJANGO</p>
                </Cards>
                <Cards href={'https://github.com/nicogomezdev/Twitter-FollowCard'}>
                <h3>TWITTER</h3>
                <p>Un clon de la tarjeta de seguir de Twitter (X)</p>
                </Cards>
                <Cards href={'https://github.com/nicogomezdev/IsabellaStylos'}>
                    <h3>SISTEMA SALÓN BELLEZA</h3>
                    <p>Proyecto fullstack de Django + REACT</p>
                </Cards>
                <Cards href={'https://github.com/nicogomezdev'}>
                    <h3>OTROS PROYECTOS</h3>
                    <p>Acceso al repertorio de otros de mis proyectos realizados</p>
                </Cards>

            </div>
        </section>
    )
}