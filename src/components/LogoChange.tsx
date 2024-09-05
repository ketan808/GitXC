import { useMantineColorScheme, Image } from '@mantine/core';

const ThemedImage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const lightImage = '../images/logo.png';
  const darkImage = '../images/react.png';

  return <Image src={isDark ? darkImage : lightImage} />;
};

export default ThemedImage;