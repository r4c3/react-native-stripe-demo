import { StripeProvider } from '@stripe/stripe-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Payment from './components/Payment';

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51MEG7CFsL0aic5f1MH4roevQ1icuJJzuPknqUGQVRROwEhdHmHHzg1nKrApgHefyvp3KOqC09kAydCKaRw7nOSHW000LbcurVY">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
