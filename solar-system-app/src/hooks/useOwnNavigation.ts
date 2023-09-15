import {useNavigation, NavigationProp} from '@react-navigation/native';

type routeList = {
  Welcome: undefined;
  HomeRoutes: undefined;
  DetailPage: undefined;
  Search: undefined;
  Favorites: undefined;
}

type solarNavigationProps = NavigationProp<routeList>;

const useOwnNavigation = () => {
  const navigation = useNavigation<solarNavigationProps>();

  const navigate = (path: keyof routeList) => {
    navigation.navigate(path);
  }

  const goBack = () => {
    navigation.goBack();
  }

  return {
    navigate, goBack
  }
}

export default useOwnNavigation