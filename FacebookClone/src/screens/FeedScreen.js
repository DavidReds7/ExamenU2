import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Platform, StatusBar } from 'react-native';
import { Avatar, Card, Icon } from 'react-native-elements';

const stories = [
  { id: '1', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Juan' },
  { id: '2', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Maria' },
  { id: '3', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Carlos' },
];

const activeUsers = [
  { id: '1', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { id: '2', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
  { id: '3', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: '4', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
];

const posts = [
  { id: '1', user: 'Juan Pérez', time: '2h', text: 'Bendiciones, feliz día', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', postImage: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg' },
];

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.safeArea}>

      {/* FILA 1 - Header con logo, búsqueda y mensajes */}
      <View style={styles.header}>
        <Text style={styles.title}>facebook</Text>
        <TextInput placeholder="Search" style={styles.searchBar} />
        <Icon name="chat" color="black" />
      </View>

      {/* FILA 2 - Barra de navegación con acceso a perfil */}
      <View style={styles.navBar}>
        <Icon name="home" color="black" />
        <Icon name="group" color="black" />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" color="black" />
        </TouchableOpacity>
        <Icon name="storefront" color="black" />
        <Icon name="notifications" color="black" />
        <Icon name="menu" color="black" />
      </View>

      {/* FILA 3 - Foto de perfil + input para estado */}
      <View style={styles.createPost}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Avatar rounded size="medium" source={{ uri: 'https://randomuser.me/api/portraits/men/10.jpg' }} />
        </TouchableOpacity>
        <TextInput placeholder="What's on your mind?" style={styles.input} />
      </View>

      {/* FILA 4 - Botones de Live, Foto y Video */}
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}><Icon name="videocam" color="red" /><Text>Live</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}><Icon name="photo-library" color="green" /><Text>Photo</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}><Icon name="video-library" color="purple" /><Text>Video</Text></TouchableOpacity>
      </View>

      {/* Espacio gris */}
      <View style={styles.separator} />


      <View style={styles.createRoomContainer}>
  <TouchableOpacity style={styles.createRoomButton}>
    <Icon name="video-camera" type="font-awesome" color="purple" size={20} />
    <Text style={styles.createRoomText}>Create Room</Text>
  </TouchableOpacity>
  <FlatList
  horizontal
  data={activeUsers}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.activeUser}>
      <Avatar rounded size="medium" source={{ uri: item.image }} />
      <View style={styles.onlineIndicator} />
    </View>
  )}
/>
</View>

      {/* Espacio gris */}
      <View style={styles.separator} />


      {/* FILA 5 - Historias */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
        <View style={styles.storyCard}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/10.jpg' }} style={styles.storyAvatar} />
          <Text style={styles.storyText}>Add Story</Text>
        </View>
        {stories.map((story) => (
          <View key={story.id} style={styles.storyCard}>
            <Image source={{ uri: story.avatar }} style={styles.storyAvatar} />
            <Text style={styles.storyText}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Espacio gris */}
      <View style={styles.separator} />

      {/* FILA 6 - Post */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card containerStyle={styles.postCard}>
            <View style={styles.postHeader}>
              <Avatar rounded source={{ uri: item.avatar }} />
              <View>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.postTime}>{item.time} • 🌎</Text>
              </View>
              <Icon name="more-horiz" color="black" style={{ marginLeft: 'auto' }} />
            </View>
            <Text>{item.text}</Text>
            <Image source={{ uri: item.postImage }} style={styles.postImage} />
          </Card>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#1877F2',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  createPost: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0'
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    height: 10,
    backgroundColor: '#f0f0f0'
  },
  stories: {
    paddingHorizontal: 10,
  },
  storyCard: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  postCard: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: { fontWeight: 'bold' },
  postTime: { color: 'gray', fontSize: 12 },
  postImage: { width: '100%', height: 250, marginTop: 5 }, createRoomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  createRoomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  createRoomText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeUser: {
    marginRight: 15,
    position: 'relative',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'green',
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
});