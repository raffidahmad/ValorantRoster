import logo from '../assets/logo.png';
import omen from '../assets/Omen.png';
import jett from '../assets/Jett.png';
import gekko from '../assets/Gekko.png';
import viper from '../assets/Viper.png';
import sage from '../assets/Sage.png';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
function Home() {
  const agents = [
    {
      name: '???',
      image: gekko,
      underline: false
    },
    {
      name: '???',
      image: jett,
      underline: false
    },

    {
      name: 'suika',
      image: omen,
      underline: true
    },
    {
      name: 'hitman',
      image: viper,
      underline: false
    },
    {
      name: '???',
      image: sage,
      underline: false
    }
  ];

  return (
    <div className='min-h-screen bg-valorant-red bg-no-repeat bg-cover flex flex-col items-center overflow-hidden'>
      <img
        src={logo}
        alt='logo'
        width={300}
        style={{
          borderRadius: '100%'
        }}
        className=' animate-rotate'
      />
      <div className='md:grid grid-cols-1 md:grid-cols-5 gap-4 absolute mt-48 hidden'>
        {agents.map((agent, index) => (
          <div className='z-10' key={index}>
            <img src={agent.image} alt='agent' />
            <div className='bg-black bg-opacity-50 h-1/5 relative bottom-64 mx-5 text-center cursor-pointer'>
              <div className='flex flex-col h-full justify-center items-center text-4xl text-white opacity-100'>
                {agent.name}
                {agent.underline && (
                  <div
                    className='
                w-1/2 bg-white h-1
              '
                  >
                    {' '}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-center w-screen'>
          <Button>Ready Up</Button>
        </div>
      </div>

      <div className='md:hidden'>
        <Carousel list={agents} />
      </div>
    </div>
  );
}

export default Home;
