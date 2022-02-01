import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import {LPButton} from '.';
import COLORS from '../statics/colors';

const LIKE_BUTTONS_TYPE = {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
};

const ICON_PROPS = {
  LIKE: {
    color: COLORS.MINT_GREEN,
    name: 'like1',
  },
  DISLIKE: {
    color: COLORS.BITTER_SWEET,
    name: 'dislike1',
  },
};

const LPLikeInput = props => {
  const {setIsLiked, style, isLiked, size} = props;

  const getIconTypeColor = (type, defaultColor = COLORS.WHITE) => {
    if (isLiked === null) {
      return defaultColor;
    }
    if (type === LIKE_BUTTONS_TYPE.LIKE) {
      return isLiked ? ICON_PROPS.LIKE.color : defaultColor;
    } else {
      return isLiked ? defaultColor : ICON_PROPS.DISLIKE.color;
    }
  };

  const customIconContainerClass = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderColor: COLORS.DODGER_BLUE,
  };

  const getLikeButton = () => (
    <LPButton
      onPress={setIsLiked}
      onlyChild
      callbackValues={true}
      style={[
        styles.iconContainer,
        customIconContainerClass,
        {
          borderColor: getIconTypeColor(
            LIKE_BUTTONS_TYPE.LIKE,
            COLORS.DODGER_BLUE,
          ),
        },
      ]}>
      <AntDesignIcons
        name={ICON_PROPS.LIKE.name}
        size={size / 2}
        color={getIconTypeColor(LIKE_BUTTONS_TYPE.LIKE)}
      />
    </LPButton>
  );

  const getDislikeButton = () => (
    <LPButton
      onPress={setIsLiked}
      onlyChild
      callbackValues={false}
      style={[
        styles.iconContainer,
        customIconContainerClass,
        {
          borderColor: getIconTypeColor(
            LIKE_BUTTONS_TYPE.DISLIKE,
            COLORS.DODGER_BLUE,
          ),
        },
      ]}>
      <AntDesignIcons
        name={ICON_PROPS.DISLIKE.name}
        size={size / 2}
        style={styles.disklikeIcon}
        color={getIconTypeColor(LIKE_BUTTONS_TYPE.DISLIKE)}
      />
    </LPButton>
  );

  return (
    <View style={[styles.container, style]}>
      {getLikeButton()}
      {getDislikeButton()}
    </View>
  );
};

LPLikeInput.propTypes = {
  setIsLiked: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isLiked: PropTypes.bool,
  size: PropTypes.number,
};

LPLikeInput.defaultProps = {
  setIsLiked: () => {},
  style: {},
  isLiked: null,
  size: 60,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  disklikeIcon: {
    marginTop: 10,
  },
});

export default LPLikeInput;
