import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import {SingleManniqueScreen} from '../Screens';

const SingleManniquinContainer = (props) => {
  const {params} = props.route;
  const {
    bikiniData,
    scarfData,
    bracelateData,
    necklesData,
    hatData,
  } = useSelector((store) => store.mannique);

  const [imagessm, setImagess] = useState({
    dressImage: '',
    hatImage: '',
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
  const [totalAmmount, setTotalAmmount] = useState(0);

  const handleChange = (name, value) => {
    setImagess({
      ...imagessm,
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

  const handleChangePrice = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  useEffect(() => {
    if (params?.title === 'Bikni') {
      handleChange('dressImage', bikiniData);
      handleChangePrice('dressPrice', params?.price);
      return;
    }
    if (params?.title === 'Scarf') {
      handleChange('necklace', scarfData);
      handleChangePrice('necklacePrice', params?.price);
      return;
    }
    if (params?.title === 'Hand bracelets') {
      handleChange('handBresslet', params?.image);
      handleChangePrice('handBressletPrice', params?.price);
      return;
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <SingleManniqueScreen
        totalAmmount={price}
        imagessm={imagessm}
        bikiniData={bikiniData}
        scarfData={scarfData}
        bracelateData={bracelateData}
        necklesData={necklesData}
        hatData={hatData}
      />
    </SafeAreaView>
  );
};

export default SingleManniquinContainer;
