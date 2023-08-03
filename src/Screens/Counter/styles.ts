import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: hp(8),
    marginHorizontal: wp(2),
  },
  buttonView: {
    height: hp(8),
    width: wp(60),
    backgroundColor: 'pink',
    margin: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
