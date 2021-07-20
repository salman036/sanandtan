import React, {useState, useEffect, useRef} from 'react';

import {SafeAreaView, PermissionsAndroid, Platform, Alert} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {captureRef} from 'react-native-view-shot';
import Stripe from 'react-native-stripe-api';
import CameraRoll from '@react-native-community/cameraroll';

import {
  getAllMannique,
  setHatData,
  setBikniData,
  setScarfData,
  setFlipFlopData,
  setNecklesData,
  setHandBraclateData,
  setAnkletsData,
  setWaistBraceletsData,
  setSunBlockData,
  setWaistOfBundleData,
  setTanningCreamData,
  productTotalPrice,
} from '../actions/mannique';

import {uploadManniquinImage} from '../actions/auth';
import {addMarquineToCart} from '../actions/cart';
import {getAllProducts} from '../actions/products';
import {MannequinScreen} from '../Screens';
import {white, stripeKey} from '../Utils/theme';

const MannequinContainer = (props) => {
  const {params} = props?.route;
  const dispatch = useDispatch();

  const {
    manniqueData,
    manniqueLoading,
    bikiniData,
    scarfData,
    bracelateData,
    necklesData,
    hatData,
    ankletsData,
    sunBlockData,
    tanningCreamData,
    waistBraceletsDta,
    flipFlopData,
    waistOfBundleData,
    totalProPriceData,
  } = useSelector((store) => store.mannique);
  const {productLoading, producctData} = useSelector((store) => store.products);
  const {specificOrderLoading} = useSelector((store) => store.cart);
  const {imageUploadData} = useSelector((store) => store.auth);
  const viewRef = useRef();

  const [modalVisible, setModalVisible] = useState(false);

  const [imagessm, setImagess] = useState({
    dressImage: {},
    hatImage: {},
    scarfImage: '',
    handBresslet: '',
    necklace: '',
    tanningProduct: '',
  });

  const [price, setPrice] = useState({
    dressPrice: 0,
    hatPrice: 0,
    scarfPrice: 0,
    handBressletPrice: 0,
    necklacePrice: 0,
    tanningProductPrice: 0,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const [selectCart, setSelectCart] = useState([]);
  const [data, setData] = useState({
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
  });
  const [totalAmmount, setTotalAmmount] = useState(0);

  const [footerTitle, setFooterTitle] = useState('');
  const [footerId, setFooterId] = useState('');

  const navigate = (routeName) => {
    const {navigation} = props;
    navigation.navigate(routeName);
  };

  useEffect(() => {
    dispatch(getAllProducts(footerId));
  }, [footerId]);

  useEffect(() => {
    getAllProducts(params);
  }, []);

  const handleChange = (name, value) => {
    setImagess({
      ...imagessm,
      [name]: value,
    });
  };

  const handleChangePrice = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });

    setTotalAmmount(
      price.dressPrice +
        price.hatPrice +
        price.scarfPrice +
        price.handBressletPrice +
        price.tanningProductPrice +
        price.necklacePrice,
    );
  };

  const handleStripChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleProducts = (id) => {
    dispatch(getAllProducts(id));
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 0.8,
      });

      // cameraroll saves image
      // const image = CameraRoll.save(uri, 'photo');

      const fd = new FormData();

      fd.append('image', {
        uri: uri,
        type: 'image/jpg',
        name: uri,
      });

      console.log('uri', uri);

      dispatch(uploadManniquinImage(fd));
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDressImage = (qty, id, name, image, price) => {
    dispatch(setBikniData(qty, id, name, image, price));
  };

  const handleHatImage = (qty, id, name, image, price) => {
    dispatch(setHatData(qty, id, name, image, price));
  };

  const handleScarfImage = (qty, id, name, image, price) => {
    dispatch(setScarfData(qty, id, name, image, price));
  };

  const handleFlipFlopImage = (qty, id, name, image, price) => {
    dispatch(setFlipFlopData(qty, id, name, image, price));
  };

  const handleNeckles = (qty, id, name, image, price) => {
    dispatch(setNecklesData(qty, id, name, image, price));
  };

  const handleSetHandBracelate = (qty, id, name, image, price) => {
    dispatch(setHandBraclateData(qty, id, name, image, price));
  };

  const handlAnklests = (qty, id, name, image, price) => {
    dispatch(setAnkletsData(qty, id, name, image, price));
  };

  const handleWaistBracelts = (qty, id, name, image, price) => {
    dispatch(setWaistBraceletsData(qty, id, name, image, price));
  };

  const handleSunBlock = (qty, id, name, image, price) => {
    dispatch(setSunBlockData(qty, id, name, image, price));
  };

  const handleWaistOfBundle = (qty, id, name, image, price) => {
    dispatch(setWaistOfBundleData(qty, id, name, image, price));
  };

  const handleTanningCream = (qty, id, name, image, price) => {
    dispatch(setTanningCreamData(qty, id, name, image, price));
  };

  const handleTotalPrice = (price) => {
    dispatch(productTotalPrice(price));
  };

  const genToken = async () => {
    const apiKey = stripeKey;
    const client = new Stripe(apiKey);

    try {
      const token = await client.createToken({
        number: data?.number,
        exp_month: data?.exp_month,
        exp_year: data?.exp_year,
        cvc: data?.cvc,
      });

      if (token.id) {
        setModalVisible(false);
        // downloadImage();
        if (imageUploadData) {
          dispatch(
            addMarquineToCart(
              [
                bikiniData,
                scarfData,
                bracelateData,
                necklesData,
                hatData,
                sunBlockData,
                tanningCreamData,
                waistBraceletsDta,
                flipFlopData,
                waistOfBundleData,
              ],
              token.id,
              totalProPriceData,
              imageUploadData,
              setHatData,
              setBikniData,
              setScarfData,
              setFlipFlopData,
              setNecklesData,
              setHandBraclateData,
              setAnkletsData,
              setWaistBraceletsData,
              setSunBlockData,
              setWaistOfBundleData,
              setTanningCreamData,
              navigate,
            ),
          );
        }
      } else {
        alert(token.error.message);
      }
    } catch (e) {
      // alert(e.error.code);
    }
  };

  const handleManniqueOrder = () => {
    if (data?.number === '') {
      alert('Please enter card number');
      return;
    }
    if (data?.number.length < 16) {
      alert('Card Number is too short');
      return;
    }
    if (data?.number.length > 16) {
      alert('Card Number is too large');
      return;
    }
    if (data?.exp_month === '') {
      alert('Please enter exp month');
      return;
    }
    if (data?.exp_month.length < 2 || data?.exp_month.length > 2) {
      alert('Expire month should be two digits');
      return;
    }

    if (data?.exp_year === '') {
      alert('Please enter exp year');
      return;
    }
    if (data?.exp_year.length < 2 || data?.exp_year.length > 2) {
      alert('Expire year should be two digits');
      return;
    }
    if (data?.cvc === '') {
      alert('Please enter CVC');
      return;
    }
    if (data?.cvc.length < 3 || data?.cvc.length > 3) {
      alert('CVC should be three digits');
      return;
    } else {
      genToken();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MannequinScreen
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleStripChange={handleStripChange}
        handleManniqueOrder={handleManniqueOrder}
        setSelectCart={setSelectCart}
        navigate={navigate}
        setFooterTitle={setFooterTitle}
        footerTitle={footerTitle}
        manniqueLoading={productLoading}
        manniqueData={producctData}
        imagessm={imagessm}
        handleChange={handleChange}
        handleChangePrice={handleChangePrice}
        handleDressImage={handleDressImage}
        totalAmmount={price}
        downloadImage={downloadImage}
        viewRef={viewRef}
        hatData={hatData}
        bikiniData={bikiniData}
        scarfData={scarfData}
        sunBlockData={sunBlockData}
        bracelateData={bracelateData}
        tanningCreamData={tanningCreamData}
        waistBraceletsDta={waistBraceletsDta}
        waistOfBundleData={waistOfBundleData}
        flipFlopData={flipFlopData}
        necklesData={necklesData}
        ankletsData={ankletsData}
        handleHatImage={handleHatImage}
        handleScarfImage={handleScarfImage}
        handleFlipFlopImage={handleFlipFlopImage}
        handleNeckles={handleNeckles}
        handleSetHandBracelate={handleSetHandBracelate}
        handlAnklests={handlAnklests}
        handleWaistBracelts={handleWaistBracelts}
        handleSunBlock={handleSunBlock}
        handleWaistOfBundle={handleWaistOfBundle}
        handleTanningCream={handleTanningCream}
        handleProducts={handleProducts}
        setFooterId={setFooterId}
        setTotalPrice={setTotalPrice}
        totalPrice={totalPrice}
        handleTotalPrice={handleTotalPrice}
        totalProPriceData={totalProPriceData}
        specificOrderLoading={specificOrderLoading}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default MannequinContainer;
