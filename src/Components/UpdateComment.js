import React from 'react';

import {View, TextInput, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import StarRating from 'react-native-star-rating';

import {black} from '../Utils/theme';
import {SignOutButton} from '../Components';

const UpdateComment = ({
  setUpdateStarCount,
  starUpdateCount,
  handleChange,
  commentLoading,
  defaultValue,
  handleUpdateComment,
}) => {
  const onStarRatingPress = (rating) => {
    setUpdateStarCount(rating);
  };

  return (
    <View style={styles.container}>
      <StarRating
        disabled={false}
        emptyStar={require('../Images/staremoty.png')}
        fullStar={require('../Images/Star.png')}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={starUpdateCount}
        selectedStar={(rating) => onStarRatingPress(rating)}
        fullStarColor={'red'}
        starSize={20}
      />
      <TextInput
        style={styles.input}
        placeholder="Comment"
        placeholderTextColor="gray"
        onChangeText={(value) => handleChange('comment', value)}
        defaultValue={defaultValue}
      />
      <SignOutButton
        onPress={() => handleUpdateComment()}
        text={
          commentLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            'Update Comment'
          )
        }
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
  },

  input: {
    borderColor: black,
    borderWidth: 1,
    borderRadius: '10@s',
    marginTop: '10@s',
    padding: '15@s',
  },
});

export default UpdateComment;
