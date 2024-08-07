import { Box } from '@learnbit-react/next-monorepo.layout.box';
import { Container } from '@learnbit-react/next-monorepo.layout.container';
import { Typography } from '@learnbit-react/next-monorepo.typography.typography';
import { Button } from '@learnbit-react/next-monorepo.actions.button';

export type ActionButtonProps = {
  /**
   * The label of the action button.
   */
  label?: string;

  /**
   * The action to be executed when the button is clicked.
   * A function to execute or a URL to redirect to.
   */
  action: () => void | string;
};

export type HeroProps = {
  /**
   * The title of the hero section.
   */
  title?: string;
  /**
   * The message of the hero section.
   */
  message?: string;

  /**
   * The call-to-action button
   * Leave empty to hide the button.
   */
  ctaButton?: ActionButtonProps;

  /**
   * Extend the hero section with additional content.
   */
  children?: React.ReactNode;
};

export const Hero = ({
  title = '',
  message = '',
  ctaButton,
  children,
}: HeroProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="p" color="textSecondary" paragraph>
          {message}
        </Typography>
        {ctaButton && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={
              typeof ctaButton.action === 'object'
                ? ctaButton.action
                : undefined
            }
            href={
              typeof ctaButton.action === 'string'
                ? ctaButton.action
                : undefined
            }
          >
            {ctaButton.label}
          </Button>
        )}
        {children}
      </Container>
    </Box>
  );
};
