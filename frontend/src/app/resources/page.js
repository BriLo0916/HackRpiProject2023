import styles from  "./page.module.css";
import Card from '../components/card/card';

function Page() {
  const cardsData= [
    {
      title: 'Headspace',
      description: 'Meditation and tips for well-being',
      image: 'src\app\resources\headspace-1.jpg',
      link: 'https://www.headspace.com/', 
      linkDescription: 'Headspace',
    },
    {
      title: 'Card 2',
      description: 'List of hotlines around the world',
      image: '/suidcide-hotline-image.jpg',
      link: 'https://www.psychologytoday.com/us/basics/suicide/suicide-prevention-hotlines-resources-worldwide', 
      linkDescription: 'Suicide Hotlines'
    },
    {
      title: 'Card 3',
      description: 'Educational videos on mental health',
      image: '/channels4_profile.jpg',
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
