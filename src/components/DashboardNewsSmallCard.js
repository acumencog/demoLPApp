import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {LPText} from '.';
import COLORS from '../statics/colors';
import LinearGradient from 'react-native-linear-gradient';
const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_ASPECT_RATIO = 0.6;
const BORDER_RADIUS = 10;

const DashboardNewsSmallCard = props => {
  const {id, width, height, header, imageUrl, subHeader, tickView} = props;

  const getImageView = () => (
    <View style={styles.imageContainer}>
      <SharedElement id={`image_${id}`} style={styles.sharedEl}>
        <Image style={styles.image} source={{uri: imageUrl}} />
      </SharedElement>
    </View>
  );

  const getInfoView = () => (
    <LinearGradient
      colors={[COLORS.TRANSPARENT, 'rgba(0, 0, 0, 0.6)']}
      locations={[0, 0.7]}
      style={[styles.infoContainer]}>
      <View style={styles.infoDetail}>
        <View>
          <LPText style={styles.headerText}>{unescape(header)}</LPText>
          <LPText smallText style={styles.descriptionText} numberOfLines={3}>
            {unescape(subHeader)}
          </LPText>
        </View>
        <View>{tickView}</View>
      </View>
    </LinearGradient>
  );

  const customContainerStyles = {
    width,
    height,
  };
  return (
    <View style={[styles.container, customContainerStyles]}>
      {getImageView()}
      {getInfoView()}
    </View>
  );
};

DashboardNewsSmallCard.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  imageUrl: PropTypes.string,
  onPress: PropTypes.func,
};

DashboardNewsSmallCard.defaultProps = {
  id: '',
  width: Math.round(SCREEN_WIDTH * 0.8),
  height: Math.round((SCREEN_WIDTH * 0.8) / IMAGE_ASPECT_RATIO),
  header: 'Nike Joyride',
  subHeader: 'Some description about Nike shoes',
  imageUrl: 'https://i.picsum.photos/id/1083/400/600.jpg',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
  },
  sharedEl: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: COLORS.PORT_GORE,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    height: '70%',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  infoDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionText: {
    marginTop: 5,
    width: 220,
  },
  headerText: {
    width: 220,
  },
});

export default DashboardNewsSmallCard;
