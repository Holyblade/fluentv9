import { Button, makeStyles, shorthands, Title1, tokens, Card, Menu, MenuTrigger, MenuList, MenuPopover, MenuItem } from '@fluentui/react-components';
import type { NextPage } from 'next';
import Head from 'next/head';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    alignItems: 'center',

    ...shorthands.border('2px', 'dashed', tokens.colorPaletteBerryBorder2),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.gap('5px'),
    ...shorthands.padding('10px'),
  },
});

const Home: NextPage = () => {
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>Fluent UI React v9 SSR</title>
      </Head>

      <div className={styles.container}>
        <Title1>Hello world!</Title1>
        <Button>A button</Button>
      </div>
      <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button>Toggle menu</Button>
    </MenuTrigger>

    <MenuPopover>
      <MenuList>
        <MenuItem>New </MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>Open File</MenuItem>
        <MenuItem>Open Folder</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
      <div>

      </div>
    </>
  );
};

export default Home;