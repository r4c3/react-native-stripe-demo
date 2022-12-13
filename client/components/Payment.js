import { useStripe } from "@stripe/stripe-react-native";
import React from "react";
import { Pressable, Text, Alert, StyleSheet } from "react-native";

const Payment = () => {
  const stripe = useStripe();
  const name = "7348014738"; //an imaginary username

  const subscribe = async () => {
    try {
      // sending request
      const response = await fetch("http://localhost:3003/pay", {
        method: "POST",
        body: JSON.stringify({name}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Payment complete, thank you!");
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong, try again later!");
    }
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 2,
      borderRadius: 4,
      marginTop: 12,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
  });

  return (
    <Pressable onPress={subscribe} style={styles.button}>
      <Text style={styles.text}>Purchase ($9.99)</Text>
    </Pressable>
  );
};

export default Payment;