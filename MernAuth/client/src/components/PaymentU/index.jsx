import styled from 'styled-components';
import Pricing from '../../parts/Pricing';

function Payment() {
  return (
    <MainContainer>
      <div className='pricing-component'>
        <Pricing
          data={[
            { text: 'Learn to Code', value: true },
            { text: '3 new projects / month', value: true },
          ]}
          price={0}
          duration='y'
          currency='$'
          color='#1823e9'
          buttonContent='Get Started'
          subTitle='Great for starters'
          priceText='Discover how to create your first projects.'
          headerText='free'
        />
      </div>
      <div className='pricing-component'>
        <Pricing
          data={[
            { text: 'Learn to Code', value: true },
            { text: 'Unlimited Projects for a month', value: true },
          ]}
          price={10.0}
          duration='m'
          background='linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'
          shadow='#96e6a1'
          currency='$'
          buttonContent='Get Started'
          subTitle='For Planned Projects'
          priceText='Bring your designs to the next level and export them.'
          headerText='Monthly'
        />
      </div>
      <div className='pricing-component'>
        <Pricing
          data={[
            { text: 'Learn to Code', value: true },
            { text: ' Unlimited Projects for a year', value: true },
          ]}
          price={60.0}
          duration='y'
          background='linear-gradient(to left, #ff0844 0%, #ffb199 100%);'
          shadow='#ffb199'
          currency='$'
          buttonContent='Get Started'
          subTitle='For Professional Use'
          priceText='Enjoy limitless use with interactive export options.'
          headerText='yearly'
        />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default Payment;
