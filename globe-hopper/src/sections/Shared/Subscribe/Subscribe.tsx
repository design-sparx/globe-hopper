import { Title1, Text, Input, Button } from '@fluentui/react-components';
import { Flex } from '../../../components/Flex';
import { useStyles } from './Subscribe.styles.ts';

export const SubscribeSection = () => {
  const classes = useStyles();

  return (
    <Flex direction="column" align="center" className={classes.root}>
      <Title1>Subscribe And Get a Special Discount</Title1>
      <Text>
        Speedily say has suitable disposal add boy. On forth doubt miles of
        child. Exercise joy man children rejoiced.
      </Text>
      <Flex>
        <Input placeholder="Enter your email" style={{ flexGrow: 1 }} />
        <Button>Subscribe!</Button>
      </Flex>
    </Flex>
  );
};
