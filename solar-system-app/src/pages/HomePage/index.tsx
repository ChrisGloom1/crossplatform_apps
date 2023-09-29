import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Assets from '../../Assets';
import { StyleSheet } from 'react-native';
import { Colors } from '../../Styles/StyleGuide';
import Header from '../../components/Header';
import CategoryButton from '../../components/CategoryButton';
import PlanetCard from '../../components/PlanetCard';

const HomePage: React.FC = () => {
  return(
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.bgImage}/>
        <View style={styles.content}>
      <Header/>
      <View style={styles.categories}>
        <View style={styles.categoryText}>
          <Text style={styles.textWhite}>Kategorier</Text>
          </View>
          <View style={styles.categoryList}>
            <CategoryButton 
              label={'Plantes'} 
              Icon={Assets.icons.Planets} 
              color={'blue'} 
            />
            <CategoryButton 
              label={'Asteroids'} 
              Icon={Assets.icons.Asteroids} 
              color={'pink'} 
            />
            <CategoryButton 
              label={'Stars'} 
              Icon={Assets.icons.Stars} 
              color={'cyan'} 
            />
            <CategoryButton 
              label={'Galaxies'} 
              Icon={Assets.icons.Galaxies} 
              color={'yellow'} 
            />
          </View>
          </View>
          <View>
            <View style={styles.plantes}>
        <Text style={styles.textWhite}>Planets</Text>
        <ScrollView style={styles.planetScroll} horizontal decelerationRate={"normal"}>
          <PlanetCard 
            label="Mercury"
            PlanetImage={Assets.images.Mercury}
          />
          <PlanetCard 
            label="Venus"
            PlanetImage={Assets.images.Venus}
          />
            <PlanetCard 
              label="Earth"
              PlanetImage={Assets.images.Earth}
            />
          <PlanetCard 
            label="Mars"
            PlanetImage={Assets.images.Mars}
          />
          <PlanetCard 
            label="Jupiter"
            PlanetImage={Assets.images.Jupiter}
          />
          <PlanetCard 
            label="Saturn"
            PlanetImage={Assets.images.Saturn}
          />
            <PlanetCard 
              label="Uranus"
              PlanetImage={Assets.images.Uranus}
            />
          <PlanetCard 
            label="Neptune"
            PlanetImage={Assets.images.Neptune}
          />
          <PlanetCard 
            label="Pluto"
            PlanetImage={Assets.images.Pluto}
          />
        </ScrollView>
        </View>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1
  },
  content: {
    padding: 16
  },
  bgImage: {
    position: "absolute",
    zIndex: 0
  },
  categoryList: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16
  },
  textWhite: {
    color: "white"
  },
  planetScroll: {
    marginTop: 8
  },
  categories: {
    marginTop: 16
  },
  plantes: {
    marginTop: 32
  },
  categoryText: {
    marginBottom: 8
  }
})

export default HomePage;