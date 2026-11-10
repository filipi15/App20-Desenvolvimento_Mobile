import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#222',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
  areaFrase: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#222',
    margin: 10,
    padding: 15,
  },
  frase: {
    marginBottom: 10,
  },
});

export { styles };
