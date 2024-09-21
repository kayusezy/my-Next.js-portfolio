import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to My Portfolio</h1>
            <Image src="/images/profile.jpg" alt="Profile Picture" width={150} height={150} />
        </div>
    );
};

export default Home;
