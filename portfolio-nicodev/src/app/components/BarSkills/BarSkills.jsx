import styles from './BarSkills.module.css';

export default function BarSkills(){
    const duplicatedSkills  = [
  {
    name: 'HTML',
    icon: 'https://devicon-website.vercel.app/api/html5/original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://devicon-website.vercel.app/api/css3/original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://devicon-website.vercel.app/api/javascript/original.svg'
  },
  {
    name: 'React',
    icon: 'https://devicon-website.vercel.app/api/react/original.svg?color=%2366CCFF'
  },
  {
    name: 'Python',
    icon: 'https://devicon-website.vercel.app/api/python/original.svg'
  },
  {
    name: 'Django',
    icon: 'https://devicon-website.vercel.app/api/django/plain.svg'
  },
  {
    name: 'Java',
    icon: 'https://devicon-website.vercel.app/api/java/original.svg'
  },
  {
    name: 'HTML',
    icon: 'https://devicon-website.vercel.app/api/html5/original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://devicon-website.vercel.app/api/css3/original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://devicon-website.vercel.app/api/javascript/original.svg'
  },
  {
    name: 'React',
    icon: 'https://devicon-website.vercel.app/api/react/original.svg?color=%2366CCFF'
  },
  {
    name: 'Python',
    icon: 'https://devicon-website.vercel.app/api/python/original.svg'
  },
  {
    name: 'Django',
    icon: 'https://devicon-website.vercel.app/api/django/plain.svg'
  },
  {
    name: 'Java',
    icon: 'https://devicon-website.vercel.app/api/java/original.svg'
  },{
    name: 'HTML',
    icon: 'https://devicon-website.vercel.app/api/html5/original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://devicon-website.vercel.app/api/css3/original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://devicon-website.vercel.app/api/javascript/original.svg'
  },
  {
    name: 'React',
    icon: 'https://devicon-website.vercel.app/api/react/original.svg?color=%2366CCFF'
  },
  {
    name: 'Python',
    icon: 'https://devicon-website.vercel.app/api/python/original.svg'
  },
  {
    name: 'Django',
    icon: 'https://devicon-website.vercel.app/api/django/plain.svg'
  },
  {
    name: 'Java',
    icon: 'https://devicon-website.vercel.app/api/java/original.svg'
  },{
    name: 'HTML',
    icon: 'https://devicon-website.vercel.app/api/html5/original.svg'
  },
  {
    name: 'CSS',
    icon: 'https://devicon-website.vercel.app/api/css3/original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://devicon-website.vercel.app/api/javascript/original.svg'
  },
  {
    name: 'React',
    icon: 'https://devicon-website.vercel.app/api/react/original.svg?color=%2366CCFF'
  },
  {
    name: 'Python',
    icon: 'https://devicon-website.vercel.app/api/python/original.svg'
  },
  {
    name: 'Django',
    icon: 'https://devicon-website.vercel.app/api/django/plain.svg'
  },
  {
    name: 'Java',
    icon: 'https://devicon-website.vercel.app/api/java/original.svg'
  }

]
    return(
        <section className={styles.skills}>
            <div className={styles.cinta}>{duplicatedSkills.map(({ name, icon }, index) => (<div key={name + index} className={styles.skill}><img src={icon} alt={name} /><p>{name}</p></div>))}</div>
        </section>
    );
}
