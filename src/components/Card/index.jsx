import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card({ title, description, date, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.cardRemove}>
        <Text style={styles.cardRemoveText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181719',
    borderRadius: 4,
    padding: 8,
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 4,
  },
  description: {
    color: '#333134',
    fontSize: 14,
    marginBottom: 4,
  },
  date: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 4,
  },
  cardRemove: {
    backgroundColor: 'red',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -12,
    right: -12,
  },
  cardRemoveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
