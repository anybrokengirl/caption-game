import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 5,
    padding: 10,
    fontFamily: 'LilitaOne',
    fontSize: 20,
  },
  subhead: {
    fontFamily: 'LilitaOne',
    fontSize: 20,
    color: 'white',
    margin: 10,
  },
  nameContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  pickerContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 100,
  },
});
