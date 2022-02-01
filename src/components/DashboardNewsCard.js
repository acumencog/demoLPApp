import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import COLORS from '../statics/colors';
import {LPText} from '.';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_ASPECT_RATIO = 0.6;
const SHADOW_PADDING = 15;
const BORDER_RADIUS = 15;

const DashboardNewsCard = props => {
  const {
    id,
    height,
    width,
    isHighlighted,
    highlightColor,
    header,
    subHeader,
    imageUrl,
  } = props;

  const getContent = () => (
    <View style={styles.imageContainer}>
      <SharedElement id={`image_${id}`} style={styles.sharedEl}>
        <Image
          style={styles.image}
          source={{uri: imageUrl, cache: 'force-cache'}}
        />
      </SharedElement>
      <View style={styles.contentContainer}>
        <LPText style={styles.headerText}>{header}</LPText>
        <LPText style={styles.subHeaderText}>{subHeader}</LPText>
      </View>
    </View>
  );

  const customContainerClass = {
    height,
    width,
  };

  const shadowOpt = {
    width: width - SHADOW_PADDING * 2,
    height: height - SHADOW_PADDING * 2,
    color: highlightColor,
    border: isHighlighted ? SHADOW_PADDING : 0,
    radius: BORDER_RADIUS,
    opacity: 0.2,
    x: 0,
    y: 0,
  };

  const borderColor = isHighlighted ? COLORS.GORSE : COLORS.RUSSIAN_BLACK;

  return (
    <View style={[styles.container, customContainerClass]}>
      <BoxShadow setting={shadowOpt}>
        <View style={[styles.innerContainer, {borderColor}]}>
          <LinearGradient
            useAngle
            angle={290}
            colors={[
              COLORS.RUSSIAN_BLACK,
              COLORS.TRANSPARENT,
              COLORS.TRANSPARENT,
              COLORS.RUSSIAN_BLACK,
            ]}
            locations={[0.2, 0.4, 0.6, 0.8]}
            style={styles.gradiantMask}>
            {getContent()}
          </LinearGradient>
        </View>
      </BoxShadow>
    </View>
  );
};

DashboardNewsCard.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  isHighlighted: PropTypes.bool,
  highlightColor: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  imageUrl: PropTypes.string,
};

DashboardNewsCard.defaultProps = {
  id: '',
  width: Math.round(SCREEN_WIDTH * 0.8),
  height: Math.round((SCREEN_WIDTH * 0.8) / IMAGE_ASPECT_RATIO),
  isHighlighted: false,
  highlightColor: COLORS.GORSE,
  header: 'Nike Joyride',
  subHeader: 'Some description about Nike shoes',
  imageUrl: 'https://i.picsum.photos/id/1083/400/600.jpg',
};

const styles = StyleSheet.create({
  container: {
    padding: SHADOW_PADDING,
  },
  innerContainer: {
    flex: 1,
    borderWidth: 4,
    borderRadius: BORDER_RADIUS - 2,
  },
  gradiantMask: {
    flex: 1,
    margin: -SHADOW_PADDING - 3,
    padding: 2,
  },
  imageContainer: {
    flex: 1,
    margin: SHADOW_PADDING,
    borderRadius: BORDER_RADIUS - 3,
    overflow: 'hidden',
  },
  sharedEl: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: COLORS.PORT_GORE,
  },
  contentContainer: {
    backgroundColor: COLORS.MIRAGE,
    padding: 20,
  },
  headerText: {},
  subHeaderText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default DashboardNewsCard;
