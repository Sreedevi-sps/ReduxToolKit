import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputText: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },
  renderBox: {
    justifyContent: 'space-between',
    marginVertical: 20,
    // borderWidth: 1,
    margin:'auto'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  actionBox: {
    flexDirection: 'row',
  },
 
});

export default styles;
