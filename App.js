import React, { useState, useEffect } from 'react';
import { View, Text, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

export default function App() {
  const [dia, setDia] = useState(true)
  const [pequeno, setPequeno] = useState(true)

  // Quando o componente é montado em tela (quando abrimos o App)
  useEffect(() => {
    const recuperarPreferencias = async () => {
      const diaSalvo = await AsyncStorage.getItem('dia')
      const pequenoSalvo = await AsyncStorage.getItem('pequeno')

      if (diaSalvo !== null) {
        setDia(diaSalvo === 'true')
      }
      if (pequenoSalvo !== null) {
        setPequeno(pequenoSalvo === 'true')
      }
    };

    recuperarPreferencias();
  }, []);

  const alterarDia = async (valor) => {
    setDia(valor)
    await AsyncStorage.setItem('dia', valor.toString());
  }

  const alterarPequeno = async (valor) => {
    setPequeno(valor)
    await AsyncStorage.setItem('pequeno', valor.toString());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Frases</Text>

      <View style={styles.linha}>
        <Text style={styles.label}>Dia</Text>
        <Switch
          value={dia}
          onValueChange={(valorSwitch) => alterarDia(valorSwitch)}
        />

        <Text style={styles.label}>Pequeno</Text>
        <Switch
          value={pequeno}
          onValueChange={(valorSwitch) => alterarPequeno(valorSwitch)}
        />
      </View>

      <View style={[styles.areaFrase, { backgroundColor: dia ? '#FFF' : '#222' }]}>
        <Text style={[styles.frase, { color: dia ? '#000' : '#FFF', fontSize: pequeno ? 15 : 35 }]}>
          "A vingança nunca é plena, mata a alma e envenena"
        </Text>
        <Text style={[styles.frase, { color: dia ? '#000' : '#FFF', fontSize: pequeno ? 15 : 35 }]}>
          (Seu Madruga)
        </Text>
      </View>
    </View>
  );
}
