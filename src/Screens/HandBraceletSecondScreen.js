import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {ScaledSheet} from 'react-native-size-matters';
import StarRating from 'react-native-star-rating';

import {
  black,
  bottomTabColor,
  prettyColor,
  robotoBlack,
  robotoMedium,
} from '../Utils/theme';
import HeaderLogo from '../Images/sanandtanLogo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AddComment, SignOutButton, UpdateComment} from '../Components';
import NakedImage from '../Images/NakedImage.png';

const HandBraceletSecondScreen = ({
  navigate,
  goBack,
  specificProductData,
  specificProductLoading,
  refRbSheet,
  setStarCount,
  startCount,
  handleChange,
  commentLoading,
  handleComment,
  flatListRef,
  updateCommentRBRef,
  setComment,
  comment,
  setUpdateStarCount,
  starUpdateCount,
  handleUpdateComment,
  setCommentId,
  handleAddCart,
  cartLoading,
  userData,
  data,
  //
  handleSetBikni,
  handleSetScarf,
  handleSetHandBracelate,
  handleNeckles,
  handleHat,
  hanldeFlipFlop,
  handleAnklets,
  handleSunBlock,
  handleWaistBracelts,
  handleWaistOfBundle,
  handleTanningCream,
}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      disabled={item?.author?.username === userData?.username ? false : true}
      onPress={() => {
        updateCommentRBRef.current.open(),
          setComment(item?.comment),
          setUpdateStarCount(item?.rating),
          setCommentId(item?._id);
      }}>
      <View style={styles.test12Container}>
        <Text
          numberOfLines={1}
          style={
            styles.test12Text
          }>{`${item?.author?.firstname} ${item?.author?.lastname}`}</Text>
        <View style={{marginLeft: 10}}>
          <StarRating
            disabled={false}
            maxStars={5}
            starSize={22}
            rating={item?.rating}
            fullStarColor={bottomTabColor}
            disabled={true}
            starStyle={{marginLeft: 5}}
          />
        </View>
      </View>
      <Text style={styles.ratinbottomParagraph}>{item?.comment}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.Container}>
      <RBSheet
        ref={refRbSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: black,
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <AddComment
          startCount={startCount}
          setStarCount={setStarCount}
          handleChange={handleChange}
          commentLoading={commentLoading}
          handleComment={handleComment}
        />
      </RBSheet>

      <RBSheet
        ref={updateCommentRBRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: black,
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <UpdateComment
          setUpdateStarCount={setUpdateStarCount}
          handleChange={handleChange}
          commentLoading={commentLoading}
          defaultValue={comment}
          starUpdateCount={starUpdateCount}
          handleUpdateComment={handleUpdateComment}
        />
      </RBSheet>
      {specificProductLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={bottomTabColor} size="large" />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.braceletdrawerContainer}>
            <TouchableOpacity onPress={() => navigate('drawer')}>
              <Icon name="bars" size={25} color="black" />
            </TouchableOpacity>
            <Image source={HeaderLogo} />
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name="chevron-left" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.accountsettingText}>
            {specificProductData?.data?.category?.title}
          </Text>
          <ScrollView>
            <TouchableOpacity>
              <Image
                style={styles.handbrceletimage}
                source={
                  specificProductData?.data?.category?.image === null ||
                  undefined ||
                  ''
                    ? {
                        uri: 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
                      }
                    : {uri: specificProductData?.data?.category?.image}
                }
              />
            </TouchableOpacity>
            <View style={styles.maincontainer}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '80%',
                  }}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.proceText}>Price:</Text>
                    <Text style={styles.dollerText}>
                      $ {specificProductData?.data?.category?.price}
                    </Text>
                  </View>
                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Bikni' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleSetBikni(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Scarf' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleSetScarf(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Hand bracelets' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleSetHandBracelate(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Necklace' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleNeckles(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Hats' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleHat(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Flip Flop' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        hanldeFlipFlop(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Anklets' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleAnklets(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Waist Bracelets' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleWaistBracelts(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Sunblock Cream' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleSunBlock(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}
                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'The waist of the bundle' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleWaistOfBundle(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}

                  {specificProductData?.data?.category?.catagory[0]?.title ===
                  'Tanning cream' ? (
                    <TouchableOpacity
                      onPress={() => {
                        navigate('Mannequin', {
                          title:
                            specificProductData?.data?.category?.catagory[0]
                              ?.title,
                          image: specificProductData?.data?.category?.image,
                          price: specificProductData?.data?.category?.price,
                          id: specificProductData?.data?.category?._id,
                        });
                        handleTanningCream(
                          specificProductData?.data?.category?.quantity,
                          specificProductData?.data?.category?._id,
                          specificProductData?.data?.category?.title,
                          specificProductData?.data?.category?.mani_image,
                          specificProductData?.data?.category?.price,
                        );
                      }}>
                      <Image
                        style={{width: 40, height: 60}}
                        source={NakedImage}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
                <View style={styles.titlemainContainer}>
                  <Text style={styles.titleText}>Title:</Text>
                  <Text style={styles.handbraceletText}>
                    {specificProductData?.data?.category?.title}
                  </Text>
                </View>
                <View style={styles.titlemainContainer}>
                  <Text style={styles.titleText}>Remaining Qty : </Text>
                  <Text style={styles.handbraceletText}>
                    {specificProductData?.data?.category?.quantity
                      ? specificProductData?.data?.category?.quantity
                      : 0}
                  </Text>
                </View>

                <View style={styles.titlemainContainer}>
                  <Text style={styles.titleText}>Add Qty: </Text>

                  <TextInput
                    onChangeText={(value) =>
                      handleChange('productQuantity', value)
                    }
                    defaultValue={`${data?.productQuantity}`}
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </View>
              </View>
              <Image
                style={styles.nakedImage}
                source={
                  specificProductData?.data?.category?.image === null ||
                  undefined ||
                  ''
                    ? {
                        uri: 'https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png',
                      }
                    : {uri: specificProductData?.data?.category?.image}
                }
              />
            </View>
            <View style={styles.discriptionmainContainer}>
              <Text style={styles.discriptionText}>Discription:</Text>
              <Text style={styles.bestqualityText}>
                {specificProductData?.data?.category?.description}
              </Text>
            </View>
            {/* <Text style={styles.reviewText}>Reviews</Text> */}
            {/* <View style={{height: 300}}>
              {specificProductData?.data?.category?.comments?.length === 0 ? (
                <View style={styles.empty}>
                  <Text style={styles.emptyText}>No Reviews</Text>
                </View>
              ) : (
                <FlatList
                  renderItem={renderItem}
                  data={specificProductData?.data?.category?.comments.reverse()}
                  scrollToIndex={1}
                  ref={flatListRef}
                  keyExtractor={(item) => item?._id}
                />
              )}
            </View> */}
          </ScrollView>
        </View>
      )}

      {specificProductLoading ? null : (
        <View>
          {/* <View style={styles.heckoutbtnContainer}>
            <SignOutButton
              onPress={() => refRbSheet.current.open()}
              text="Post review"
            />
          </View> */}

          <View style={styles.heckoutbtnContainer}>
            <SignOutButton
              onPress={() => handleAddCart()}
              text={
                cartLoading ? <ActivityIndicator color="white" /> : 'Checkout'
              }
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
  braceletdrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10@s',
  },
  accountsettingText: {
    textAlign: 'center',
    marginTop: '13@s',
    color: prettyColor,
    fontSize: '25@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '29@s',
    fontFamily: robotoBlack,
  },
  handbrceletimage: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: '10@s',
    height: '300@s',
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: '10@s',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  nakedImage: {
    width: '30@s',
    height: '40@s',
  },
  proceText: {
    marginRight: '3@s',
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    color: 'black',
    fontFamily: robotoMedium,
  },
  dollerText: {
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    color: 'grey',
    fontFamily: robotoMedium,
  },
  titlemainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10@s',
  },
  titleText: {
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '18@s',
    color: 'black',
    fontFamily: robotoBlack,
  },
  handbraceletText: {
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18@s',
    color: 'black',
    marginLeft: '3@s',
    fontFamily: robotoMedium,
  },
  discriptionmainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10@s',
    fontFamily: robotoBlack,
  },
  discriptionText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '11@s',
    color: 'black',
    marginRight: '3@s',
    fontFamily: robotoMedium,
  },
  bestqualityText: {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '11@s',
    color: 'black',
    fontFamily: robotoMedium,
  },
  reviewText: {
    fontSize: '20@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22@s',
    color: '#13153B',
    paddingLeft: '10@s',
    fontFamily: robotoMedium,
  },
  test12Container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10@s',
  },
  test12Text: {
    fontSize: '15@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20@s',
    color: '#515C6F',
    textTransform: 'capitalize',
    width: '200@s',
    fontFamily: robotoMedium,
  },
  ratinbottomParagraph: {
    paddingHorizontal: '10@s',
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20@s',
    color: '#BEBEBE',
    fontFamily: robotoMedium,
  },
  heckoutbtnContainer: {
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '10@s',
  },
  empty: {
    marginTop: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: '14@s',
    fontWeight: 'bold',
  },
  input: {
    borderColor: black,
    borderWidth: 1,
    padding: '1@s',
    marginLeft: '10@s',
    width: '40@s',
    borderRadius: '5@s',
    textAlign: 'center',
    fontSize: '16@s',
    fontFamily: robotoMedium,
  },
});

export default HandBraceletSecondScreen;
