import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import pic1 from "../assets/pics/1.webp";
import pic2 from "../assets/pics/2.webp";
import pic3 from "../assets/pics/3.webp";
import pic4 from "../assets/pics/4.webp";
import pic5 from "../assets/pics/5.webp";
import pic6 from "../assets/pics/6.webp";
import pic7 from "../assets/pics/7.webp";
import pic8 from "../assets/pics/8.webp";
import pic9 from "../assets/pics/9.webp";
import pic10 from "../assets/pics/10.webp";
import pic11 from "../assets/pics/11.webp";
import pic12 from "../assets/pics/12.webp";
import pic13 from "../assets/pics/13.webp";
import pic14 from "../assets/pics/14.webp";
import pic15 from "../assets/pics/15.webp";
import pic16 from "../assets/pics/16.webp";
import pic17 from "../assets/pics/17.webp";
import pic18 from "../assets/pics/18.webp";
import pic19 from "../assets/pics/19.webp";
import pic20 from "../assets/pics/20.webp";
import pic21 from "../assets/pics/21.webp";
import pic22 from "../assets/pics/22.webp";
import pic23 from "../assets/pics/23.webp";
import pic24 from "../assets/pics/24.webp";
import pic25 from "../assets/pics/25.webp";
import pic26 from "../assets/pics/26.webp";
import pic27 from "../assets/pics/27.webp";
import pic28 from "../assets/pics/28.webp";
import pic29 from "../assets/pics/29.webp";
import pic30 from "../assets/pics/30.webp";
import pic31 from "../assets/pics/31.webp";
import pic32 from "../assets/pics/32.webp";
import pic33 from "../assets/pics/33.webp";
import pic34 from "../assets/pics/34.webp";
import pic35 from "../assets/pics/35.webp";
import pic36 from "../assets/pics/36.webp";
import pic37 from "../assets/pics/37.webp";
import pic38 from "../assets/pics/38.webp";
import pic39 from "../assets/pics/39.webp";
import pic40 from "../assets/pics/40.webp";

const colors = [
  "#F8781C",
  "#F8E71C",
  "#B8E986",
  "#E3E3E3",
  "#6A60FF",
  "#42FF36",
  "#FF6060",
  "#B1B1B1",
  "#58E2FF",
  "#FF3D30",
];

let currentColorIndex = 0;

const pics = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
  pic25,
  pic26,
  pic27,
  pic28,
  pic29,
  pic30,
  pic31,
  pic32,
  pic33,
  pic34,
  pic35,
  pic36,
  pic37,
  pic38,
  pic39,
  pic40,
];

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getRandomPics = () => {
  let indexs = [];
  for (let i = 0; i < 40; i++) {
    indexs.push(i);
  }
  shuffle(indexs);
  const randomPics = [];
  for (let i = 0; i < 40; i++) {
    randomPics.push(pics[indexs[i]]);
  }
  return randomPics;
};

interface ITheme {
  color: string;
  bigPics: string[];
  smallPics: string[];
}

const defaultTheme: ITheme = {
  color: colors[0],
  bigPics: [],
  smallPics: [],
};

const randomPics = getRandomPics();
defaultTheme.bigPics = randomPics.slice(0, 5);
defaultTheme.smallPics = randomPics.slice(5, 40);

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    const id = setInterval(() => {
      currentColorIndex = (currentColorIndex + 1) % 10;
      const randomPics = getRandomPics();
      setTheme({
        color: colors[currentColorIndex],
        bigPics: randomPics.slice(0, 5),
        smallPics: randomPics.slice(5, 40),
      });
    }, 4000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider
        children={children}
        theme={theme}
      ></StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
