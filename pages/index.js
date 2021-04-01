import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const labels = [
    'Live Podcast @ 7pm PST', 
    'TikTok', 
    'Instagram', 
    'YouTube', 
    'LinkedIn', 
    'Github'
  ]

  const links = [
    'https://dogehouse.tv/scheduled-room/8de54d48-05e1-48f5-9975-fd0c6cdb03ad',
    'https://www.tiktok.com/@andrew.robles',
    'https://www.instagram.com/andrewroblesdev/',
    'https://www.youtube.com/channel/UCqNGTj5w7NxE74m25So27gg',
    'https://www.linkedin.com/in/andrew-robles-dev/',
    'https://github.com/andrewrobles'
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Andrew Robles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className={styles.image} 
        src='/profile.png'
        height={105}
        width={105}
      />

      <div className={styles.name}>Andrew Robles</div>

      <div className={styles.description}>Hello, world! I'm a web developer and <br/> content creator from California 🌴</div>


      <LinkButtonColumn labels={labels} links={links}/>
    </div>
  )
}

function LinkButtonColumn(props) {
  const pairs = zip(props.labels, props.links)

  return (
    <div className={`${ styles.linkButtonColumn }`}>
      {pairs.map(element => <LinkButton label={element[0]} link={element[1]}/>)}
    </div>
  )
}

function zip(a, b) {

  const mapFunction = (element, index) => {
    return [element, b[index]];
  }

  return a.map(mapFunction);
}

function LinkButton(props) {
  return (
    <div>
      <a className={`btn btn-primary mb-2 btn-lg ${ styles.linkButton }`} href={props.link}>{props.label}</a>
      <br/>
    </div>
  )
}
