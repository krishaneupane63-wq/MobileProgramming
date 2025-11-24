import React, { useState } from 'react';
import {View,Text,TouchableOpacity,ScrollView,StyleSheet,Modal,Animated,StatusBar,Platform} from 'react-native';

export default function BikeServiceHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300));

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 200,
        useNativeDriver: true
      }).start(() => setMenuOpen(false));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <View style={styles.hamburger}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BikeServe</Text>
        <View style={styles.spacer} />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>Welcome to BikeServe</Text>
          <Text style={styles.subtitle}>Your trusted bike maintenance partner</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Book Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emergencyButton}>
            <Text style={styles.buttonText}>Emergency Call</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Schedule Service</Text>
            <Text style={styles.featureText}>Book maintenance appointments</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Get Reminders</Text>
            <Text style={styles.featureText}>Never miss service dates</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Service History</Text>
            <Text style={styles.featureText}>Track all your maintenance</Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureTitle}>Find Mechanics</Text>
            <Text style={styles.featureText}>Locate nearby trusted mechanics</Text>
          </View>
        </View>
      </ScrollView>

      {/* Side Menu */}
      <Modal
        visible={menuOpen}
        transparent={true}
        animationType="none"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={toggleMenu}
        >
          <Animated.View 
            style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>BikeServe</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>My Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Service History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Find Mechanics</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Reminders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Help</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#4F46E5',
  },
  menuButton: {
    padding: 8,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  spacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#4F46E5',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E7FF',
  },
  buttonContainer: {
    padding: 20,
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  emergencyButton: {
    backgroundColor: '#EF4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresContainer: {
    padding: 20,
  },
  feature: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  featureText: {
    fontSize: 14,
    color: '#6B7280',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#374151',
  },
});