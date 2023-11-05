import styles from  "./page.module.css";
import Card from '../components/card/card';

function Page() {
  const cardsData= [
    {
      title: 'Headspace',
      description: 'Meditation and tips for well-being',
      image: 'headspace.jpg',
      link: 'https://www.headspace.com/', 
      linkDescription: 'Headspace',
    },
    {
      title: 'Suicide Hotlines',
      description: 'List of hotlines around the world',
      image: 'suidcidehotlineimage.jpg',
      link: 'https://www.psychologytoday.com/us/basics/suicide/suicide-prevention-hotlines-resources-worldwide', 
      linkDescription: 'Suicide Hotlines'
    },
    {
      title: 'Psych2go',
      description: 'Educational videos on mental health',
      image: 'channels4profile.jpg',
      link: 'https://www.youtube.com/@Psych2go', 
      linkDescription: 'Psych2go'
    },
  ]
  return (
    <>
      <div className={styles["resources-containers"]}>
        {cardsData.map((card, index) => (
          <Card 
            key = {index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link} 
            linkDescription={card.linkDescription}
          />
        ))}
      </div>
    </>);


}


export default Page;
