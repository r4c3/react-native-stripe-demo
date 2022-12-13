import { StripeProvider } from '@stripe/stripe-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Payment from './components/Payment';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: '50px', fontWeight: 'bold'}}>Hello!</Text>
      <Text style={{fontSize: '20px'}}>This is a demo showing how to integrate Stripe payments into a React Native application.</Text>
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
    backgroundColor: '#eee',
    padding: '10%',
    justifyContent: 'center',
  },
});
