import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';
import { Avatar, Button, Icon, Card } from 'react-native-elements';

export default function ProfileScreen({ navigation }) {
  const user = {
    name: 'Manuel Chavez',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    coverPhoto: 'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg',
  };

  const posts = [
    {
      id: '1',
      text: 'Este es mi primer post!',
      time: '2h',
      avatar: user.avatar,
      image: 'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      {/* Fila 1 - Barra de navegación superior */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Icon name="home" color="black" />
        </TouchableOpacity>
        <Icon name="group" color="black" />
        <Icon name="person" color="blue" />
        <Icon name="storefront" color="black" />
        <Icon name="notifications" color="black" />
        <Icon name="menu" color="black" />
      </View>

      {/* Fila 2 - Imagen de portada */}
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />

      {/* Fila 3 - Foto de perfil sobrepuesta con botón de cámara */}
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size={120}
          source={{ uri: user.avatar }}
          containerStyle={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Icon name="camera-alt" color="white" size={18} />
        </TouchableOpacity>
      </View>

      {/* Fila 4 - Nombre y botones de acción */}
      <Text style={styles.username}>{user.name}</Text>
      <View style={styles.actionButtons}>
        <Button title="Edit Profile" buttonStyle={styles.editButton} />
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="more-horiz" color="black" />
        </TouchableOpacity>
      </View>

      {/* Fila 5 - Detalles del perfil */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>🎓 Estudió en Universidad UTEZ</Text>
        <Text style={styles.detailItem}>📍 Vive en Cuernavaca</Text>
        <Text style={styles.detailItem}>💼 Trabaja en Ceviset</Text>
      </View>

      {/* Fila 6 - Botón grande para editar detalles */}
      <Button title="Edit Public Details" buttonStyle={styles.fullWidthButton} />

      {/* Fila 7 - Lista de publicaciones */}
      {posts.map((post) => (
        <Card key={post.id} containerStyle={styles.postCard}>
          <View style={styles.postHeader}>
            <Avatar rounded size={40} source={{ uri: post.avatar }} />
            <View>
              <Text style={styles.usernamePost}>{user.name}</Text>
              <Text style={styles.postTime}>{post.time} • 🌎</Text>
            </View>
            <Icon name="more-horiz" color="black" style={{ marginLeft: 'auto' }} />
          </View>
          <Text style={styles.postText}>{post.text}</Text>
          <Image source={{ uri: post.image }} style={styles.postImage} />
        </Card>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight, 
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -60, // Mantiene la imagen de perfil sobrepuesta
  },
  avatar: {
    borderWidth: 5,
    borderColor: 'white',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1877F2',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center', // CENTRADO
    width: '100%', // Ocupa todo el ancho disponible
    marginTop: 10, // Espacio después de la foto de perfil
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  menuButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  detailsContainer: {
    padding: 20,
    alignItems: 'flex-start', // Alinea los detalles a la izquierda
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  fullWidthButton: {
    backgroundColor: '#1877F2',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  postCard: {
    borderRadius: 10,
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  usernamePost: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postTime: {
    color: 'gray',
    fontSize: 12,
  },
  postText: {
    fontSize: 16,
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
});