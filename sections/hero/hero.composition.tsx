import { Hero } from './hero';

const message =
  'Discover amazing content and join our community today. We provide the best services to help you succeed.';

const title = 'Welcome to our app!';

const ctaButton = {
  label: 'Get Started',
  action: () => {
    alert('Yay!');
  },
};

export const BasicHero = () => {
  return <Hero title={title} message={message} ctaButton={ctaButton} />;
};
